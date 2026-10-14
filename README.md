# AI w sprzedaży

Interaktywny playbook jednodniowego szkolenia oparty na fikcyjnym case’ie BudMax Instalacje Sp. z o.o. Strona prowadzi przez 12 modułów, w tym dodatkowy moduł o konkurencji na końcu dnia, a materiały ćwiczeniowe są w katalogach `materials/` i `fallback/`.

## Uruchomienie lokalne

Strona pobiera wspólny plik treści przez HTTP, dlatego nie otwieraj `index.html` bezpośrednio jako `file://`.

1. Otwórz terminal w katalogu projektu.
2. Uruchom `python3 -m http.server 8000`.
3. Otwórz `http://localhost:8000` w przeglądarce.

Nie jest potrzebny build ani instalacja zależności.

## Publikacja na GitHub Pages

1. Umieść zawartość repozytorium na GitHub.
2. W ustawieniach repozytorium wybierz **Pages**.
3. Wskaż publikację z wybranej gałęzi i katalogu `/ (root)` albo skonfiguruj workflow GitHub Pages.
4. Otwórz wygenerowany adres i przejdź do modułu z agendy.

Linki do treści i plików są względne, więc działają również wtedy, gdy strona jest opublikowana w podkatalogu repozytorium.

## Tryb trenera

Użyj przełącznika **Tryb trenera** w górnym pasku i wpisz hasło. Tryb pokazuje wskazówki, przykładowe odpowiedzi, pytania do grupy, timer i pliki referencyjne. Po odświeżeniu strony jest wyłączony. Hasło jest lekką blokadą interfejsu: materiały nadal znajdują się w publicznych plikach strony i nie są chronione dostępem.

**Fast mode** pojawia się w nawigacji po włączeniu trybu trenera. Pozwala skrócić rundy role-play, liczbę kierunków komunikacji, wariantów kreacji i samodzielne ćwiczenie M365 do demo. Zachowaj ręczną kontrolę obliczenia, rozróżnienie faktów i hipotez oraz krytykę w Sales Lab.

## Edycja treści i plików

- Najprostsza zmiana treści: skorzystaj z instrukcji [EDYCJA.md](EDYCJA.md). Teksty modułów, case i agenda są w jednym pliku: `source/training_content.json`.
- Agenda, case, ćwiczenia, prompty i wskazówki trenerskie: `source/training_content.json`.
- Układ i dostępne zachowania strony: `index.html`, `assets/css/site.css`, `assets/js/app.js`.
- Pliki do ćwiczeń: `materials/`.
- Przykładowe wyniki i warianty awaryjne: `fallback/`.
- Osobny plik `materials/budmax_deal_desk_reference.html` jest referencyjną mikroaplikacją do pokazania po pierwszej próbie uczestników. To nie jest główna strona szkoleniowa.
- Moduł 8 zawiera dwa odrębne ćwiczenia: główne wyszukiwanie klauzuli w dłuższej fikcyjnej umowie oraz opcjonalne, krótkie ćwiczenie reklamacyjne z osobnym plikiem.

Zmiany w `main` uruchamiają GitHub Actions: workflow sprawdza składnię edytowalnych plików i publikuje stronę w GitHub Pages.

Wszystkie firmy, osoby, warunki, kwoty i zapisy w materiałach są fikcyjne. Nie dopisuj rzeczywistych warunków oferty MHC ani danych klientów.

## Postęp, notatki i reset

Postęp modułów, notatki uczestnika, odpowiedzi z kart bezpieczeństwa i formularze workflow zapisują się w `localStorage` tej przeglądarki. Dane pozostają lokalnie na urządzeniu i nie są wysyłane na serwer. **Resetuj postęp i notatki** usuwa zapis szkoleniowy z bieżącej przeglądarki.

Na końcu szkolenia przycisk eksportu zapisuje dwa workflowy do lokalnego pliku Markdown.

## Podmiana materiałów i storyboardu

Zachowaj nazwy plików linkowanych w `source/training_content.json`, aby nie zmieniać odnośników. Można zastąpić pliki w `materials/` nowymi fikcyjnymi materiałami ćwiczeniowymi. Wideo można pominąć: moduł Sales Lab zawiera fallback do storyboardu sześciu kadrów. Podmieniaj go wyłącznie na materiał, do którego masz prawa; nie kopiuj wizerunku ani głosu realnej osoby.

## No API keys / no backend

Główna strona jest statyczna, nie wymaga backendu, logowania ani kluczy API. Uczestnik kopiuje prompt do narzędzia, które organizacja zatwierdziła. Funkcje szkoleniowe, zapis postępu i eksport odbywają się w przeglądarce.
