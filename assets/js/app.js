const STORAGE_KEY = "mhc-ai-sales-training-v2";
const TRAINER_PASSWORD_HASH = "5d21d61712fdbbc2973ce7f4363949dfe7e91987e7e0eee29285a08e21f47a42";
const courseContentUrl = new URL("source/training_content.json", document.baseURI);
const courseRoot = document.getElementById("course-content");
const navRoot = document.getElementById("course-nav");
let course;
let state = loadState();
const timers = new Map();

function loadState() {
  try {
    const saved = Object.assign({ trainer: false, fast: false, done: {}, revealed: {}, choices: {}, caseOutputs: {}, workflows: [{}, {}], factCheck: false }, JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"));
    saved.trainer = false;
    return saved;
  } catch {
    return { trainer: false, fast: false, done: {}, revealed: {}, choices: {}, caseOutputs: {}, workflows: [{}, {}], factCheck: false };
  }
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* Local storage can be disabled by the browser. */ }
  updateProgress();
}

function esc(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function render() {
  document.body.classList.toggle("trainer-mode", Boolean(state.trainer));
  document.getElementById("trainer-toggle").checked = Boolean(state.trainer);
  document.getElementById("fast-mode").checked = Boolean(state.fast);
  renderNav();
  courseRoot.innerHTML = `${renderHome()}${course.modules.map(renderModule).join("")}${renderPromptLibrary()}<footer class="site-footer">AI w sprzedaży · Playbook szkoleniowy · Materiał szkoleniowy — dane fikcyjne</footer>`;
  updateProgress();
  updateRoute();
}

function renderNav() {
  const seen = new Set();
  navRoot.innerHTML = `<a class="nav-link" href="#start"><span class="nav-number">↗</span><span>Start</span></a>` + course.agenda.map(item => {
    if (item.break) return `<span class="nav-link break-link"><span class="nav-number">·</span><span>${esc(item.time)} &nbsp; ${esc(item.label)}</span></span>`;
    if (seen.has(item.target)) return "";
    seen.add(item.target);
    return `<a class="nav-link ${state.done[Number(item.target.split("-")[1])] ? "done" : ""}" href="#${esc(item.target)}"><span class="nav-number">${esc(item.target.split("-")[1])}.</span><span>${esc(item.label.replace(/^\d+\. /, ""))}</span></a>`;
  }).join("") + `<a class="nav-link" href="#prompt-library"><span class="nav-number">↗</span><span>Prompty do skopiowania</span></a>`;
}

function renderPromptLibrary() {
  const prompts = course.promptLibrary || [];
  return `<section class="module prompt-library" id="prompt-library"><div class="module-head"><div><div class="module-index">MATERIAŁY DLA UCZESTNIKÓW</div><h2>Prompty do skopiowania</h2></div></div><p class="module-objective">${prompts.length ? "Wybierz prompt i skopiuj go do zatwierdzonego narzędzia AI." : "Prompty pojawią się tutaj. Każdy będzie miał własny przycisk kopiowania."}</p>${prompts.length ? `<div class="steps">${prompts.map((item, index) => `<article class="step-card"><div class="step-card-head"><span class="step-badge">${String(index + 1).padStart(2, "0")}</span><h3>${esc(item.title)}</h3></div><div class="step-card-body"><div class="prompt-box"><pre>${esc(item.prompt)}</pre><button class="button secondary small" type="button" data-action="copy-prompt">Kopiuj prompt</button></div></div></article>`).join("")}</div>` : ""}</section>`;
}

function renderHome() {
  const stats = [
    [course.case.name, "fikcyjny case sprzedażowy"],
    [course.case.need, "potrzeba flotowa"],
    [course.case.contact, "kontakt po stronie klienta"]
  ];
  return `<section class="home" id="start">
    <div class="hero"><div class="eyebrow">MHC Mobility · warsztat dla zespołu sprzedaży</div><h1>${esc(course.title)}</h1><p>${esc(course.subtitle)}.</p><div class="hero-actions"><a class="button primary" href="#module-1">Rozpocznij szkolenie <span aria-hidden="true">↗</span></a><span class="micro-note">09:00–17:10 &nbsp;·&nbsp; 11 modułów obowiązkowych &nbsp;·&nbsp; opcjonalne moduły 12 i 13 do 18:40 &nbsp;·&nbsp; case BudMax</span></div></div>
    <div class="notice"><span class="notice-icon" aria-hidden="true">i</span><div><strong>Zasada pracy z danymi</strong><p>${esc(course.case.notice)}</p></div></div>
    <div class="content-block"><h2 class="section-heading">Wasza misja</h2><p>${esc(course.case.mission)}</p><p>${esc(course.case.workingRules)}</p></div>
    <h2 class="section-heading">Case BudMax</h2><div class="case-grid">${stats.map(([value,label]) => `<div class="case-stat"><strong>${esc(value)}</strong><span>${esc(label)}</span></div>`).join("")}</div>
    <h2 class="section-heading">Agenda dnia</h2><div class="agenda">${course.agenda.map(item => item.break
      ? `<div class="agenda-item break"><time>${esc(item.time)}</time><span>${esc(item.label)}</span><span></span></div>`
      : `<a class="agenda-item" href="#${esc(item.target)}"><time>${esc(item.time)}</time><span>${esc(item.label)}</span><span class="agenda-arrow" aria-hidden="true">↗</span></a>`).join("")}</div>
  </section>`;
}

function renderModule(module) {
  let html = `<section class="module" id="module-${module.id}" data-module="${module.id}">
    <div class="module-head"><div><div class="module-index">MODUŁ ${String(module.id).padStart(2,"0")}</div><h2>${esc(module.title)}</h2></div><span class="module-time">${esc(module.time)}</span></div>
    <div class="module-intro"><div class="panel"><h3>Cel ćwiczenia</h3><p class="module-objective">${esc(module.objective)}</p></div><div class="panel problem"><h3>Problem biznesowy</h3><p>${esc(module.problem)}</p></div></div>`;
  if (module.output) html += `<div class="takeaway"><strong>Wejście do etapu</strong>${esc(module.entry)}<strong>Rezultat do wykorzystania dalej</strong>${esc(module.output)}<strong>Kryteria sukcesu</strong>${esc(module.criteria)}</div><div class="case-history" data-case-history="${module.id}">${renderCaseHistory(module.id)}</div>`;
  if (module.content) html += `<div class="content-block"><div class="block-label">Warto zapamiętać</div><ul class="content-list">${module.content.map(item => `<li>${esc(item)}</li>`).join("")}</ul></div>`;
  if (module.source && module.id !== 8) html += `<div class="content-block"><div class="source-title">${esc(module.sourceTitle || "Materiał źródłowy")}</div><div class="source-box">${esc(module.source)}</div></div>`;
  if (module.table) html += renderTable(module.table);
  if (module.segments) html += `<div class="content-block"><div class="block-label">Wybierz jeden segment</div><div class="segment-grid">${module.segments.map(segment => `<article class="segment-card"><h4>${esc(segment.name)}</h4><p>${esc(segment.profile)}</p><p class="objection"><strong>Obawa:</strong> ${esc(segment.objection)}</p></article>`).join("")}</div></div>`;
  if (module.cards) html += renderSafetyCards(module);
  if (module.id === 8 && module.downloads?.length) html += renderDownloads(module);
  html += `<div class="content-block"><div class="block-label">Przebieg ćwiczenia</div><div class="steps" id="steps-${module.id}">${renderSteps(module)}</div>${renderNextButton(module)}</div>`;
  if (module.id === 4) html += `<div class="manual-check"><label><input type="checkbox" id="source-check-confirm" ${state.factCheck ? "checked" : ""}><span><strong>Zweryfikowałem kluczową informację</strong><br>Wskaż w arkuszu lub materiale, gdzie potwierdziłeś dane istotne dla rekomendacji.</span></label></div>`;
  if (module.id === 8 && module.source) html += `<div class="content-block"><div class="source-title">${esc(module.sourceTitle || "Materiał źródłowy")}</div><div class="source-box">${esc(module.source)}</div></div>`;
  if (module.downloads?.length && module.id !== 8) html += renderDownloads(module);
  html += `<div class="trainer-box trainer-only"><div class="trainer-label">NOTATKI DLA TRENERA</div><div class="trainer-grid"><div><h4>Prowadzenie</h4><p>${esc(module.trainer.guide)}</p></div><div><h4>Przykład / wskazówki</h4><p>${esc(module.trainer.golden)}</p></div><div><h4>Na co uważać</h4><ul>${module.trainer.pitfalls.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div><div><h4>Pytania do dyskusji</h4><ul>${module.trainer.questions.map(q => `<li>${esc(q)}</li>`).join("")}</ul></div></div>${module.trainer.fast ? `<div class="fast-note" ${state.fast ? "" : "hidden"}><strong>Fast mode:</strong> ${esc(module.trainer.fast)}</div>` : ""}</div>`;
  html += `<div class="module-tools trainer-only"><button class="button secondary small" type="button" data-action="timer" data-module="${module.id}">▶ Start timer</button><span class="timer" id="timer-${module.id}" hidden><output>--:--</output><button class="text-button" type="button" data-action="stop-timer" data-module="${module.id}">Stop</button></span><span class="fast-note" ${state.fast ? "" : "hidden"}>Fast mode aktywny. Zostaw weryfikację kluczowych informacji, rozróżnienie faktów od hipotez oraz feedback i powtórkę rozmowy.</span></div>`;
  if (module.output && module.id !== 11) html += `<div class="content-block workflow-field"><label for="case-output-${module.id}">Karta szansy · ${esc(module.output)}</label><p>Zapisz zweryfikowany wynik waszej grupy. W kolejnych etapach znajdziesz go w sekcji „Wasze dotychczasowe ustalenia”. Zapis lokalny w tej przeglądarce; do AI kopiujesz go samodzielnie.</p><textarea id="case-output-${module.id}" data-case-output="${module.id}" rows="8" placeholder="Ustalenia i ich źródła, rezultat próby, otwarte pytania i następny krok…">${esc(state.caseOutputs?.[module.id] || "")}</textarea></div>`;
  if (module.output) html += `<button class="button secondary small" type="button" data-action="export-case">Eksportuj kartę szansy .md</button>`;
  html += module.id === 11 ? renderWorkflows() : "";
  html += `<div class="module-status"><label class="module-complete"><input type="checkbox" data-done="${module.id}" ${state.done[module.id] ? "checked" : ""}><span>Oznacz moduł jako ukończony</span></label><div class="step-counter" id="step-count-${module.id}"></div></div>
    <nav class="module-pager" aria-label="Nawigacja między modułami">${module.id === 1 ? `<a class="button secondary" href="#start">← Agenda</a>` : `<a class="button secondary" href="#module-${module.id - 1}">← Poprzedni moduł</a>`}<span>Moduł ${module.id} z ${course.modules.length}</span>${module.id === course.modules.length ? `<a class="button primary" href="#start">Wróć do agendy <span aria-hidden="true">↗</span></a>` : `<a class="button primary" href="#module-${module.id + 1}">Następny moduł <span aria-hidden="true">→</span></a>`}</nav>
  </section>`;
  return html;
}

function renderTable(table) {
  return `<div class="content-block"><div class="block-label">Porównywane oferty</div><div class="table-wrap"><table class="training-table"><thead><tr>${table.headers.map(h => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${table.rows.map(row => `<tr>${row.map((cell,i) => i === 0 ? `<th scope="row">${esc(cell)}</th>` : `<td>${esc(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>`;
}

function renderSafetyCards(module) {
  const labels = ["Zatwierdzenie narzędzia i kategorii danych", "Możliwość minimalizacji lub anonimizacji danych", "Prawa, licencje i zgody dotyczące materiału", "Zasady użycia i zatwierdzenia wyniku AI"];
  return `<div class="content-block"><div class="block-label">Wybierz pierwszą kwestię do sprawdzenia dla każdej karty</div><div class="card-grid">${module.cards.map((card,index) => {
    const selected = labels.includes(state.choices[index]);
    return `<article class="safety-card"><h4>Karta ${index + 1}</h4><p>${esc(card.text)}</p><label class="sr-only" for="choice-${index}">Pierwsza kwestia do sprawdzenia dla karty ${index + 1}</label><select id="choice-${index}" data-choice="${index}"><option value="">Wybierz…</option>${labels.map(label => `<option ${state.choices[index] === label ? "selected" : ""}>${esc(label)}</option>`).join("")}</select><div class="answer-hint" aria-live="polite" ${selected ? "" : "hidden"}>To wskazówka do sprawdzenia, nie zgoda na użycie. Zweryfikuj ją z polityką organizacji.</div></article>`;
  }).join("")}</div></div>`;
}

function renderSteps(module) {
  const revealed = Math.max(1, Number(state.revealed[module.id] || 1));
  return module.steps.map((step,index) => `<article class="step-card ${index >= revealed ? "locked" : ""}" data-step-index="${index}"><div class="step-card-head"><span class="step-badge">${String(index + 1).padStart(2,"0")}</span><h3>${esc(step.title)}</h3></div><div class="step-card-body"><p>${esc(step.body)}</p>${step.prompt ? `<button class="prompt-toggle" type="button" aria-expanded="false" data-action="toggle-prompt">＋ Pokaż prompt</button><div class="prompt-box" hidden><pre>${esc(step.prompt)}</pre><button class="button secondary small" type="button" data-action="copy-prompt">Kopiuj prompt</button></div>` : ""}</div></article>`).join("");
}

function renderNextButton(module) {
  const revealed = Math.max(1, Number(state.revealed[module.id] || 1));
  const remaining = module.steps.length - revealed;
  return remaining > 0 ? `<button class="button secondary small reveal-next" type="button" data-action="next-step" data-module="${module.id}">Pokaż kolejny krok <span aria-hidden="true">↓</span></button><span class="step-counter">${remaining} ${remaining === 1 ? "krok do odsłonięcia" : "kroki do odsłonięcia"}</span>` : `<span class="step-counter">Wszystkie kroki odsłonięte</span>`;
}

function renderDownloads(module) {
  return `<div class="content-block ${module.downloads.every(file => file.trainerOnly) ? "trainer-only" : ""}"><div class="block-label">Materiały do ćwiczenia</div><div class="download-grid">${module.downloads.map(file => {
    const preview = /\.(docx|txt|md)$/i.test(file.href)
      ? `<button class="button secondary small" type="button" data-action="preview-document" data-href="${esc(file.href)}" data-title="${esc(file.label)}" aria-expanded="false">Pokaż tekst</button>`
      : "";
    return `<div class="download-card ${file.trainerOnly ? "trainer-only" : ""}"><strong>${esc(file.label)}</strong><div class="module-tools">${preview}<a class="button secondary small" href="${esc(file.href)}" download>Pobierz</a><a class="button secondary small" href="${esc(file.href)}" target="_blank" rel="noopener">Otwórz</a></div></div>`;
  }).join("")}</div></div>`;
}

function renderCaseHistory(moduleId) {
  const previous = course.modules.filter(module => module.output && module.id < moduleId && module.id !== 11);
  if (!previous.length) return "";
  return `<details class="content-block"><summary>Wasze dotychczasowe ustalenia · karta szansy</summary>${previous.map(module => `<h3>${esc(module.title)}</h3><div class="source-box">${esc(state.caseOutputs?.[module.id] || "Brak zapisu z tego etapu. Wróć do niego i zapisz wynik lub pozostaw brak jako pytanie; nie zastępuj go wymyślonym ustaleniem.")}</div>`).join("")}</details>`;
}

function exportCase() {
  const lines = ["# Karta szansy BudMax", "", "Materiał szkoleniowy — dane fikcyjne", ""];
  course.modules.filter(module => module.output && module.id !== 11).forEach(module => {
    lines.push(`## ${module.id}. ${module.title}`, "", state.caseOutputs?.[module.id] || "Brak zapisu — do uzupełnienia.", "");
  });
  const blob = new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url; link.download = "budmax-karta-szansy.md"; link.click(); URL.revokeObjectURL(url);
}

const workflowFields = [
  ["task", "Zadanie, które robię dzisiaj", "textarea"],
  ["friction", "Co zajmuje najwięcej czasu / gdzie jest tarcie", "textarea"],
  ["ai", "Co AI może zrobić", "textarea"],
  ["context", "Jakie dane / kontekst są potrzebne", "textarea"],
  ["review", "Co człowiek musi sprawdzić", "textarea"],
  ["test", "Jaki będzie pierwszy test", "input"],
  ["success", "Jak poznam, że to działa", "input"]
];

function renderWorkflows() {
  return `<div class="content-block"><div class="block-label">Plan wdrożenia — zapis lokalny w tej przeglądarce</div>${[0,1].map(index => `<section class="workflow-group"><h3>Mój workflow nr ${index + 1}${index === 1 ? " · opcjonalny" : ""}</h3><div class="workflow-fields">${workflowFields.map(([key,label,type]) => `<div class="workflow-field"><label for="wf-${index}-${key}">${esc(label)}</label>${type === "textarea" ? `<textarea id="wf-${index}-${key}" data-workflow="${index}" data-field="${key}" placeholder="Zapisz krótko…">${esc(state.workflows?.[index]?.[key] || "")}</textarea>` : `<input id="wf-${index}-${key}" data-workflow="${index}" data-field="${key}" value="${esc(state.workflows?.[index]?.[key] || "")}" placeholder="Zapisz krótko…">`}</div>`).join("")}</div></section>`).join("")}<button class="button primary small" type="button" data-action="export-workflows">Eksportuj workflowy do pliku .md</button><span class="export-note">Eksport jest tworzony w przeglądarce.</span></div>`;
}

function updateProgress() {
  if (!course) return;
  const requiredModules = course.modules.filter(module => !module.optional);
  const completed = requiredModules.filter(module => state.done[module.id]).length;
  document.getElementById("progress-label").textContent = `Postęp ${completed} / ${requiredModules.length}`;
  document.querySelector(".progress-track").setAttribute("aria-valuenow", String(completed));
  document.getElementById("progress-fill").style.width = `${completed / requiredModules.length * 100}%`;
  navRoot.querySelectorAll(".nav-link[href^='#module-']").forEach(link => link.classList.toggle("done", Boolean(state.done[Number(link.hash.split("-")[1])])));
}

function updateActiveNav() {
  const current = location.hash || "#start";
  navRoot.querySelectorAll(".nav-link[href]").forEach(link => {
    if (link.getAttribute("href") === current) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function updateRoute() {
  closeDocument();
  const requested = decodeURIComponent(location.hash.slice(1));
  const active = requested === "start" || requested === "prompt-library" || course.modules.some(module => `module-${module.id}` === requested) ? requested : "start";
  document.getElementById("prompt-library").hidden = active !== "prompt-library";
  courseRoot.querySelector(".home").hidden = active !== "start";
  courseRoot.querySelector(".site-footer").hidden = active !== "start";
  course.modules.forEach(module => {
    document.getElementById(`module-${module.id}`).hidden = active !== `module-${module.id}`;
  });
  if (active !== requested) history.replaceState(null, "", "#start");
  const module = course.modules.find(item => `module-${item.id}` === active);
  if (module?.output) document.querySelector(`[data-case-history="${module.id}"]`).innerHTML = renderCaseHistory(module.id);
  document.title = module ? `${module.title} · AI w sprzedaży` : "AI w sprzedaży · MHC Mobility";
  updateActiveNav();
  window.scrollTo(0, 0);
}

async function showDocument(button) {
  const drawer = document.getElementById("document-drawer");
  const title = document.getElementById("drawer-title");
  const text = document.getElementById("drawer-text");
  const sourceUrl = new URL(button.dataset.href, document.baseURI);
  const pathname = sourceUrl.pathname;
  const filename = pathname.split("/").pop().replace(/\.docx$/i, ".txt");
  const textUrl = /\.docx$/i.test(pathname) ? new URL(`materials/text/${filename}`, document.baseURI) : sourceUrl;
  title.textContent = button.dataset.title;
  text.textContent = "Wczytuję tekst dokumentu…";
  drawer.hidden = false;
  document.querySelector(".layout").classList.add("preview-open");
  document.querySelectorAll('[data-action="preview-document"]').forEach(item => item.setAttribute("aria-expanded", String(item === button)));
  try {
    const response = await fetch(textUrl);
    if (!response.ok) throw new Error("Nie udało się wczytać tekstu tego dokumentu.");
    text.textContent = await response.text();
  } catch (error) {
    text.textContent = error.message;
  }
}

function closeDocument() {
  document.getElementById("document-drawer").hidden = true;
  document.querySelector(".layout").classList.remove("preview-open");
  document.querySelectorAll('[data-action="preview-document"]').forEach(item => item.setAttribute("aria-expanded", "false"));
}

function copyText(text, button) {
  const done = () => { const previous = button.textContent; button.textContent = "Skopiowano"; setTimeout(() => button.textContent = previous, 1300); };
  if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  else fallbackCopy(text, done);
}

function fallbackCopy(text, onDone) {
  const field = document.createElement("textarea");
  field.value = text; field.style.position = "fixed"; field.style.opacity = "0"; document.body.append(field); field.select();
  try { document.execCommand("copy"); onDone(); } finally { field.remove(); }
}

function startTimer(moduleId) {
  const module = course.modules.find(item => item.id === moduleId);
  const timer = document.getElementById(`timer-${moduleId}`);
  const output = timer.querySelector("output");
  let seconds = module.duration * 60;
  const tick = () => {
    output.value = `${String(Math.floor(seconds / 60)).padStart(2,"0")}:${String(seconds % 60).padStart(2,"0")}`;
    output.textContent = output.value;
    if (seconds <= 0) { clearInterval(timers.get(moduleId)); timers.delete(moduleId); timer.classList.add("timer-ended"); return; }
    seconds -= 1;
  };
  clearInterval(timers.get(moduleId)); timer.hidden = false; tick(); timers.set(moduleId, setInterval(tick, 1000));
}

function exportWorkflows() {
  const lines = ["# Moje workflowy po szkoleniu AI w sprzedaży", "", "Materiał szkoleniowy — dane fikcyjne / plan uczestnika", ""];
  state.workflows.forEach((workflow,index) => {
    lines.push(`## Mój workflow nr ${index + 1}`, "");
    workflowFields.forEach(([key,label]) => lines.push(`**${label}:** ${workflow[key] || "—"}`, ""));
  });
  const blob = new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = "moje-workflowy-ai-w-sprzedazy.md"; link.click(); URL.revokeObjectURL(url);
}

async function checkTrainerPassword(password) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(password));
  const hash = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, "0")).join("");
  return hash === TRAINER_PASSWORD_HASH;
}

document.addEventListener("click", event => {
  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    const action = actionButton.dataset.action;
    const moduleId = Number(actionButton.dataset.module);
    if (action === "toggle-prompt") {
      const box = actionButton.nextElementSibling;
      const open = box.hidden; box.hidden = !open; actionButton.setAttribute("aria-expanded", String(open)); actionButton.innerHTML = open ? "− Ukryj prompt" : "＋ Pokaż prompt";
    } else if (action === "copy-prompt") {
      copyText(actionButton.closest(".prompt-box").querySelector("pre").textContent, actionButton);
    } else if (action === "preview-document") {
      showDocument(actionButton);
    } else if (action === "close-document") {
      closeDocument();
    } else if (action === "cancel-trainer-login") {
      document.getElementById("trainer-password-dialog").close();
    } else if (action === "next-step") {
      const section = document.getElementById(`module-${moduleId}`); const stepBlock = actionButton.closest(".content-block"); const hidden = section.querySelector(".step-card.locked");
      if (hidden) { hidden.classList.remove("locked"); state.revealed[moduleId] = Number(state.revealed[moduleId] || 1) + 1; saveState(); }
      stepBlock.querySelector(".reveal-next + .step-counter")?.remove();
      stepBlock.querySelector(".reveal-next")?.remove();
      stepBlock.insertAdjacentHTML("beforeend", renderNextButton(course.modules.find(m => m.id === moduleId)));
    } else if (action === "timer") startTimer(moduleId);
    else if (action === "stop-timer") { clearInterval(timers.get(moduleId)); timers.delete(moduleId); const timer = document.getElementById(`timer-${moduleId}`); timer.hidden = true; timer.classList.remove("timer-ended"); }
    else if (action === "export-case") exportCase();
    else if (action === "export-workflows") exportWorkflows();
  }
  if (event.target.id === "reset-button") {
    if (confirm("Usunąć zapisany postęp, kartę szansy i workflowy z tej przeglądarki?")) { localStorage.removeItem(STORAGE_KEY); state = loadState(); location.hash = "#start"; render(); }
  }
});

document.addEventListener("input", event => {
  const target = event.target;
  if (target.matches("[data-case-output]")) { state.caseOutputs ||= {}; state.caseOutputs[target.dataset.caseOutput] = target.value; saveState(); }
  if (target.matches("[data-workflow]")) { const index = Number(target.dataset.workflow); state.workflows[index] ||= {}; state.workflows[index][target.dataset.field] = target.value; saveState(); }
});

document.addEventListener("change", event => {
  const target = event.target;
  if (target.id === "trainer-toggle") {
    if (!target.checked) { state.trainer = false; saveState(); render(); }
    else {
      target.checked = false;
      document.getElementById("trainer-password-dialog").showModal();
      document.getElementById("trainer-password").focus();
    }
  }
  else if (target.id === "fast-mode") { state.fast = target.checked; saveState(); render(); }
  else if (target.matches("[data-done]")) {
    const id = Number(target.dataset.done);
    if (id === 4 && target.checked && !document.getElementById("source-check-confirm")?.checked) { target.checked = false; alert("Najpierw potwierdź jedną ważną informację w źródle."); return; }
    state.done[id] = target.checked; saveState(); renderNav();
  } else if (target.id === "source-check-confirm") { state.factCheck = target.checked; saveState(); }
  else if (target.matches("[data-choice]")) {
    state.choices[target.dataset.choice] = target.value;
    const feedback = target.closest(".safety-card").querySelector(".answer-hint");
    feedback.hidden = !target.value;
    saveState();
  }
});

document.getElementById("trainer-password-form").addEventListener("submit", async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const input = document.getElementById("trainer-password");
  if (!await checkTrainerPassword(input.value)) {
    input.value = "";
    document.getElementById("trainer-password-error").hidden = false;
    input.focus();
    return;
  }
  state.trainer = true;
  document.getElementById("trainer-password-dialog").close();
  form.reset();
  document.getElementById("trainer-toggle").checked = true;
  saveState();
  render();
});

document.getElementById("trainer-password-dialog").addEventListener("close", () => {
  document.getElementById("trainer-password-form").reset();
  document.getElementById("trainer-password-error").hidden = true;
});

window.addEventListener("hashchange", updateRoute);
window.addEventListener("keydown", event => { if (event.key === "Escape") closeDocument(); });

fetch(courseContentUrl).then(response => {
  if (!response.ok) throw new Error("Nie udało się wczytać treści szkolenia.");
  return response.json();
}).then(data => { course = data; render(); }).catch(error => {
  courseRoot.innerHTML = `<div class="empty-state"><strong>Nie mogę wczytać treści szkolenia.</strong><p>${esc(error.message)} Otwórz stronę przez lokalny serwer HTTP — instrukcję znajdziesz w README.</p></div>`;
});
