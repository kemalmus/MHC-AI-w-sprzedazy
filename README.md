# AI w sprzedaży i obsłudze klienta

Warsztat na jednej historii BudMax z praktyczną pracą w Outlooku, Excelu, PowerPoincie i dokumentach. Agenda obejmuje 8 modułów od 09:00 do 17:00. Research konkurencji pozostaje dodatkiem opcjonalnym bez przypisanej godziny, poza agendą dnia.

## Przebieg

1. Copilot Chat: briefing i odpowiedź na podstawie pliku z korespondencją; zapis nowego szkicu w Outlooku.
2. Potrzeby klienta: analiza korespondencji i notatki po spotkaniu z AI, weryfikacja ustaleń oraz pytań otwartych.
3. Excel: kontrola jakości i łączenie danych floty, analiza kosztów i przestojów, porównanie 18 ofert, test warunków dostawy i rekomendacja.
4. Word i PowerPoint: brief z AI i cztery slajdy do wewnętrznej decyzji zakupowej.
5. Reklamacja z pliku: mapa sprawy, pierwsza odpowiedź i lista informacji do zebrania.
6. Dokumenty: umowa, załączniki, historia zgłoszenia, faktury i podobne sprawy.
7. Komunikacja: aktualizująca odpowiedź, lista działań, raport i mail do zespołu; CRM opcjonalnie.
8. Transfer: plan i szablon promptu z AI, samodzielne uruchomienie promptu oraz sprawdzenie wyniku.

Każdy moduł opisuje zadanie z AI, materiały wejściowe i oczekiwany wynik. Trener decyduje na bieżąco o sposobie prowadzenia. Uczestnik sprawdza źródło i zapisuje rezultat. Nie ma obowiązkowego pisania szkiców bez AI ani oznaczeń czasu poszczególnych kroków.

Przygotowanie propozycji wykorzystuje ustalenia uczestnika. Obsługa po sprzedaży to jawnie nowy etap współpracy z wydanymi czterema autami i nowym pakietem dokumentów. Wcześniejsza rekomendacja nie staje się automatycznie podpisaną ofertą. Podstawą odpowiedzi reklamacyjnej są materiały 03–05.

## Uruchomienie

```sh
python3 -m http.server 8000
```

Otwórz `http://localhost:8000`. Nie otwieraj `index.html` jako `file://`: strona pobiera JSON przez HTTP. Nie potrzebuje backendu, klucza API ani buildu.

Strona nie steruje aplikacjami M365, nie przesyła automatycznie do nich danych i nie wysyła maili. Uczestnik przenosi wynik i pliki między aplikacjami. Trener przed szkoleniem sprawdza konta, funkcje Copilota oraz zatwierdzony szablon prezentacji.

## Materiały i przygotowanie trenera

- [Instrukcja trenera](docs/trainer-flow.md): przygotowanie aplikacji, przebieg zadań i ścieżki zastępcze.
- `materials/m365/`: korespondencja, skoroszyt, reklamacja, pakiet dokumentów Word i TXT, aktualizacja sprawy i brief do PowerPointa.
- `materials/m365/budmax_materialy.zip`: pakiet do pobrania przez uczestników.
- `docs/prompt-review-current.md`: zasady promptów i scenariusze do oceny odpowiedzi.
- [EDYCJA.md](EDYCJA.md): edycja programu i plików.

Tryb trenera pokazuje wskazówki i timer modułu. Po odświeżeniu jest wyłączony. Hasło ukrywa elementy interfejsu, ale pliki strony są publiczne. Fast mode skraca omówienia i rozszerzenia, zachowując samodzielną obsługę AI przez uczestnika oraz kontrolę źródła.

## Notatki i zapis

W modułach 1–7 uczestnik wkleja zweryfikowany wynik AI do notatek sprawy. Następne etapy pokazują wcześniejsze wpisy; brak wpisu pozostaje widocznym brakiem. Moduł 8 ma formularz planu zastosowania AI. Notatki, plany i postęp zapisują się lokalnie w przeglądarce, bez synchronizacji między urządzeniami. Można je eksportować do Markdown.

Nowy program używa `mhc-ai-sales-training-v3`. Wcześniejsze zapisy `v1` i `v2` pozostają w przeglądarce, ale nie są wyświetlane jako wyniki nowego programu.

## Kopia poprzedniej wersji

[backups/budmax-before-m365-2026-11-04.zip](backups/budmax-before-m365-2026-11-04.zip) zawiera pełny stan strony i materiałów sprzed tej przebudowy, włącznie z niezacommitowanymi zmianami. Integralność ZIP i sumy SHA-256 wszystkich 46 plików zostały sprawdzone. Instrukcja uruchomienia i przywracania: [backups/README.md](backups/README.md).

Nie usuwano wcześniejszych materiałów. Nowy program linkuje pakiet M365; stare dokumenty i szkice pozostają w repozytorium oraz kopii.

## Weryfikacja i publikacja

```sh
python3 -m json.tool source/training_content.json > /dev/null
node --check assets/js/app.js
```

Sprawdź też odnośniki, podgląd dokumentów, odsłanianie i kopiowanie promptów, zapis między modułami, eksport i widok mobilny. Agenda powinna być ciągła. Kontrola źródła dotyczy teraz modułu Excel, a formularz planu — modułu 8.

Zmiany w `main` uruchamiają GitHub Actions: kontrolę składni i publikację GitHub Pages. BudMax jest scenariuszem szkoleniowym; dane ankiety uczestników nie zostały dodane do publicznej strony ani pakietów.
