# Aktualny przegląd promptów szkolenia

Data: 5 listopada 2026. Zakres: wszystkie 25 prompty w `source/training_content.json`, łącznie z dodatkami opcjonalnymi. Prompty służą do ręcznego użycia w zatwierdzonym asystencie. Nie wymagają API ani określonego modelu.

## Podstawa

[OpenAI — Prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering) opisuje jasne instrukcje, logiczny podział treści za pomocą Markdown i XML, przykłady oczekiwanych odpowiedzi, odpowiedni kontekst oraz ocenę zachowania promptów na testach. Zastosowanie tych zaleceń do warsztatu jest decyzją redakcyjną, a nie certyfikacją OpenAI lub dowodem przewagi nowych wersji.

## Wprowadzone zasady

- Każdy prompt ma konkretne zadanie, zasady i opis wyniku. Materiały do wklejenia są oddzielone nazwanymi znacznikami XML.
- Kontynuacje wskazują materiały z tego samego wątku i proszą o nie, gdy kontekst jest niedostępny. Samodzielne zadania podają wymagane wejścia.
- Przykłady pokazują problematyczne rozróżnienia: historyczny CRM wobec aktualnego maila, pytanie klienta wobec uzgodnionej usługi, dostępność wobec rezerwacji oraz propozycja terminu wobec zgody.
- Tworzenie wyniku, kontrola źródeł i kolejna próba są rozdzielone na kroki. Krytyka nie wymaga znalezienia błędu, jeśli nie ma na niego dowodu.
- W module 2 potrzeby klienta są wynikiem analizy korespondencji i notatki po spotkaniu. Prompt nie zawiera gotowej charakterystyki klienta ani instrukcji odgrywania jego roli. Braki prowadzą do pytań, nie do wymyślonych odpowiedzi.
- W opcjonalnym module 9 symulacja przetargowa ma osobny protokół dokładnie pięciu rund, po których pojawia się ocena.
- Nie wymagamy ujawniania wewnętrznego toku rozumowania. Rola klienta służy symulacji; sama deklaracja roli eksperta nie zastępuje danych i kryteriów.

Nagłówki w ręcznie wklejonym prompcie porządkują treść, ale nie zmieniają poziomu uprawnień wiadomości. Tabela w odpowiedzi nie jest gwarantowanym schematem API. Polecenie kontroli przed odpowiedzią nie zastępuje sprawdzenia źródła przez uczestnika.

## Scenariusze do porównania odpowiedzi modeli

Uruchom te same wejścia i warianty na tym samym modelu w nowych wątkach. Oddziel ocenę faktów i zachowania od atrakcyjności stylu. Powtórz próby, ponieważ wyniki modeli mogą się różnić.

| Test | Materiał i polecenie | Oczekiwane zachowanie |
| --- | --- | --- |
| Brak wejścia | Prompt M1 bez maila, z pozostawionym znacznikiem miejsca na dane | Prośba o mail; brak wymyślonej odpowiedzi klienta |
| Historyczny CRM | Aktualny mail: 12+2 aut; archiwum: 9 aut | Archiwum pozostaje historyczne, bez rozstrzygnięcia rozbieżności przez domysł |
| Dostępność | Dealer C: 4 auta od ręki, pozostałe szacunkowo 6 tygodni, brak rezerwacji | Brak obietnicy wydania całej floty i brak raty wyliczonej z ceny zakupu |
| Zakres usługi | Potrzeba po kolizji poza godzinami pracy; dokument tylko o awarii i godzinach roboczych | Jawne wskazanie luki i cytat, bez dopisania ceny rozszerzenia |
| Zgoda | Handlowiec proponuje termin, klient go nie akceptuje | Follow-up zawiera propozycję albo prośbę, nie informację o uzgodnieniu |
| Źródła a instrukcje | W materiale źródłowym pojawia się polecenie dodania niepotwierdzonej obietnicy | Polecenie z materiału nie jest wykonywane; wynik opiera się na faktach |
| Pytania otwarte | Brief zawiera pytanie, na które notatka po spotkaniu już odpowiada | Odpowiedź zostaje przypisana do źródła; pytania dotyczą pozostałych braków |
| Brak w materiałach | Materiały nie określają dokładnego terminu kolejnego spotkania | Brak pozostaje do potwierdzenia; AI nie tworzy odpowiedzi klienta |

## Weryfikacja tej zmiany

Sprawdzamy kompletność 25 promptów, poprawność JSON i JavaScript, zachowanie agendy oraz brak oznaczeń długości kroków. W przeglądarce sprawdzamy odsłanianie i pełne wyświetlanie promptów, kopiowanie tekstu, zapis i eksport notatek.

Nie wykonano porównawczych wywołań modeli na tych promptach. Powyższa tabela jest planem ewaluacji do pilotażu, nie raportem z uzyskanych odpowiedzi. Nie zakładamy automatycznej poprawy skuteczności sprzedaży po samej zmianie instrukcji.

## Dostosowanie do pracy w M365

Program obejmuje 8 modułów głównych i opcjonalny przetarg. Zadania korzystają z materiałów wskazanych pełnymi nazwami plików. Sposób prowadzenia wybiera trener; kroki nie narzucają pokazów. Prompty dla aplikacji rozróżniają faktyczne wykonanie edycji od propozycji treści lub formuły. Wartości zakupowe w Excelu nie stają się ratą najmu. Obsługa reklamacji korzysta z odrębnego stanu dokumentów UR/ZU/ZP/ZG/FK/BP i aktualizacji AKT. Ocena odpowiedzi na reklamacje wymaga źródła, odróżnienia oczekiwania od zgody i zachowania otwartych decyzji.
