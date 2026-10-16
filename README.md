# AI w sprzedaży

Jednodniowy warsztat na jednej fikcyjnej szansie sprzedażowej BudMax. Cel: doprowadzić zapytanie o ratę do uzgodnionego następnego kroku. Program główny trwa 09:00–17:10; osobne opcjonalne dodatki kończą się o 18:40.

## Przebieg dnia

1. Odpowiedź na lead i otwarcie rozmowy.
2. Plan discovery na podstawie maila i historycznego CRM.
3. Rozmowa z Anną: potrzeba, wpływ na biznes, kryteria i decyzja.
4. Propozycja oparta na własnym discovery i ofertach dealerów.
5. Usunięcie blokad z dealerem, operacjami i Ryzykiem.
6. Argumentacja dla Anny i CFO.
7. Rozmowa o cenie i porównywalności oferty FleetPro.
8. Wyjaśnienie ograniczeń auta zastępczego.
9. Rozmowa finałowa i follow-up.
10. Kontrola własnego materiału przed wysłaniem.
11. Jeden konkretny test do wykonania w pracy.

Każdy etap określa wejście, rezultat i kryteria sukcesu. Grupy pracują w stałych trójkach, rotując role. Własna próba poprzedza wsparcie AI; po feedbacku następuje powtórka. W głównym programie nie budujemy mikroaplikacji ani kampanii. Materiały tych wcześniejszych ćwiczeń pozostają w repozytorium jako archiwum.

## Uruchomienie lokalne

```sh
python3 -m http.server 8000
```

Otwórz `http://localhost:8000`. Strona pobiera JSON przez HTTP, więc nie otwieraj `index.html` jako `file://`. Nie wymaga buildu, backendu ani kluczy API. Uczestnicy sami kopiują wybrane dane i prompty do zatwierdzonego narzędzia.

## Prowadzenie

Przed warsztatem przeczytaj [instrukcję trenera](docs/trainer-flow.md) i [karty klienta oraz zdarzeń](materials/budmax_client_cards.md). Kart nie rozdawaj wszystkim: część A trafia do osoby grającej Annę w module 3, B jest nowym zdarzeniem w module 5, C trafia do CFO w module 7, a D do klienta w finale.

Tryb trenera pokazuje wskazówki, timer i odnośnik do kart. Po odświeżeniu jest wyłączony. Hasło ukrywa elementy interfejsu, ale pliki strony są publiczne. Fast mode skraca omówienie na forum; zachowuje własną próbę, feedback i powtórkę każdej osoby.

## Karta szansy i zapis

W modułach 1–10 grupa zapisuje wynik w polu karty szansy. Następne moduły pokazują wcześniejsze wpisy w rozwijanej sekcji „Wasze dotychczasowe ustalenia”. Brak wpisu pozostaje widocznym brakiem; strona nie uzupełnia go przykładową odpowiedzią. Zapisuj faktycznie uzyskane ustalenia, ich źródła i otwarte pytania.

Karta szansy, postęp i plan wdrożenia zapisują się w `localStorage` tej przeglądarki. Nie synchronizują się między urządzeniami i nie trafiają na serwer. Można wyeksportować kartę szansy i workflowy do Markdown. Reset usuwa zapisy obecnej wersji warsztatu.

Nowy program używa klucza `mhc-ai-sales-training-v2`. Zapisy poprzedniego programu pod kluczem `v1` pozostają w przeglądarce, ale nie są wyświetlane jako postęp nowego case’u.

## Edycja i weryfikacja

- Treści, agenda, kryteria, prompty i notatki trenera: `source/training_content.json`.
- Interfejs i zapis karty szansy: `assets/js/app.js`, `assets/css/site.css`, `index.html`.
- Nowe karty klienta: `materials/budmax_client_cards.md`.
- Nowy fikcyjny fragment warunków: `materials/budmax_service_excerpt.txt`. W głównym programie nie zastępuj go wcześniejszą umową z innych ćwiczeń.
- Instrukcje edycji: [EDYCJA.md](EDYCJA.md).
- `docs/prompt-review.md` dokumentuje przegląd promptów poprzedniej wersji, nie aktualny program.

Weryfikacja składni:

```sh
python3 -m json.tool source/training_content.json > /dev/null
node --check assets/js/app.js
```

Sprawdź też na stronie zapis wyniku, jego widoczność w następnym module, zachowanie po odświeżeniu, eksport i odsłanianie kroków. Czasy kroków muszą sumować się do czasu modułu, a agenda nie może mieć luk.

## Publikacja

Zmiany w `main` uruchamiają GitHub Actions: kontrolę składni i publikację GitHub Pages. Linki są względne, więc działają także w podkatalogu repozytorium.

Wszystkie firmy, osoby, warunki, kwoty i zapisy w case’ie są fikcyjne. Nie dopisuj rzeczywistych warunków MHC ani danych klientów. Moduł 12 to odrębny wariant przetargowy: nowy wątek i osobne notatki, bez aktualizowania karty głównego case’u. Moduł 13 pozostaje opcjonalnym przeglądem narzędzi.
