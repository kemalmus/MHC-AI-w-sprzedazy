# Przegląd warsztatu i promptów

Data przeglądu: 5 listopada 2026. Zakres: 8 modułów głównych, opcjonalny research konkurencji, wszystkie 26 promptów, materiały wejściowe, formularze, zapisy i eksporty strony.

## Wykryte problemy i zmiany

| Problem | Zmiana |
| --- | --- |
| Instrukcje obsługi czatu w promptach | Usunięte „Kontynuuj w tym samym wątku”. Operacje użytkownika są w opisie kroku, a prompt określa pracę modelu. |
| Założenie dostępu do skrzynki | Maile są dostarczane w plikach; Outlook służy do zapisu nowego szkicu. |
| Gotowe odpowiedzi w scenariuszu klienta | Moduł 2 analizuje korespondencję i notatkę ze spotkania, bez odgrywania klienta. |
| Powtórzenie briefu w module 2 | Analiza dotyczy zmian po spotkaniu, odpowiedzi na wcześniejsze pytania i pozostałych braków. |
| Cena zakupu auta prezentowana CFO klienta | Rekomendacja dealerów i prezentacja dotyczą decyzji wewnętrznej w MHC. Nie wyliczamy raty najmu. |
| Brak kroku przygotowania briefu Word | Dodano osobne zadanie z AI przed tworzeniem slajdów. |
| Narzucony niedostępny szablon | Dopuszczono prosty układ prezentacji. |
| Prompt podpowiadał rozstrzygnięcie dokumentów | Analiza wymaga wskazania zapisów i rozbieżności, bez wpisanej odpowiedzi. Wskazówki merytoryczne pozostają w notatkach trenera. |
| „Baza BP” sugerowała podłączenie firmowego systemu | Opis wskazuje trzy historie w dostarczonym dokumencie. |
| Wielokrotne generowanie podobnych maili | Moduł 5 zbiera pytania; moduł 7 przygotowuje działania, raport i jeden mail na podstawie nowych informacji. |
| Końcowa odpowiedź sugerowała zamknięcie reklamacji | Jest odpowiedzią aktualizującą, z otwartymi decyzjami. |
| Obowiązek znalezienia błędu | Weryfikacja może potwierdzić poprawność; uczestnik nie musi wymyślać błędu. |
| Plan nie dostarczał promptu do testu | AI przygotowuje szablon, uczestnik rzeczywiście uruchamia go w nowym czacie. |
| Brak miejsca na zapis finalnego promptu | Rozszerzono pole formularza testu do wielowierszowego zapisu z terminem i promptem. |
| Dodatek wymagał nieistniejącego porównania rat | Zastąpiony researchem źródeł i pytaniami do uzyskania indywidualnych ofert. |
| Paczka zawierała nieużywany scenariusz Anny | Aktualna paczka pomija plik 08; historyczny plik pozostaje w repozytorium i backupie. |

## Przepływ i sprawdzane umiejętności

| Moduł | Wejście | Praca z AI i kontrola | Rezultat |
| --- | --- | --- | --- |
| 1 | Plik 01 | Synteza korespondencji, rozróżnienie aktualnego i historycznego źródła, szkic odpowiedzi | Brief, pytania, szkic |
| 2 | Plik 02, plik 01 i brief | Aktualizacja ustaleń po spotkaniu; cytaty i pytania o brakujące dane | Notatka potrzeb |
| 3 | Arkusz, notatka potrzeb | Kontrola jakości i łączenia źródeł, analiza eksploatacji i ofert, test pierwszej partii, rekomendacja | Zapisany arkusz i brief zakupowy |
| 4 | Wyniki 2–3 i struktura Word | Brief z AI, slajdy, krytyka i kontrola liczb | Prezentacja wewnętrzna |
| 5 | Nowy mail reklamacyjny 03 | Analiza wątków, pierwsza odpowiedź, lista pytań | Materiał do zebrania wyjaśnień |
| 6 | Dokumenty 04 i reklamacja | Odszukiwanie dowodów, porównanie historii, kontrola cytatów | Ustalenia i otwarte decyzje |
| 7 | Aktualizacja 05 i ustalenia | Odpowiedź aktualizująca, raport, działania i kontrola spójności | Szkice do użycia po zatwierdzeniu |
| 8 | Własny typ zadania i wybrany materiał BudMax | Szablon promptu z AI, uruchomienie w nowej rozmowie, kontrola i poprawka | Prompt, plan i obserwacja z testu |
| Dodatek | Potrzeby i publiczne źródła | Research i sprawdzenie cytatu, identyfikacja braków porównania | Pytania do indywidualnych ofert |

Moduły 1–4 wspierają przygotowanie propozycji, ale nie dostarczają kompletnej wyceny najmu. Moduły 5–7 zaczynają późniejszy etap współpracy opisany w nowym zestawie dokumentów. Nie zakładamy, że wcześniejszy wybór uczestnika stał się umową. Ćwiczenie 6 uczy pracy na kilku krótkich źródłach, nie zastępuje analizy pełnej rzeczywistej umowy.

## Podstawa redakcyjna promptów

[OpenAI — Prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering): jasne zadanie, odpowiedni kontekst, rozdzielenie instrukcji od danych oraz ocena wyniku. Nagłówki służą czytelności; nie dokładamy roli ani XML tam, gdzie wystarcza wskazanie pliku. Zgodność z tymi zasadami nie jest certyfikacją skuteczności promptu.

## Kontrola merytoryczna

- Rozszerzone ćwiczenie Excel: 36 aut, 433 rekordy miesięczne, 145 zdarzeń i 18 ofert. Dane i wyniki niezależnej kontroli opisuje [klucz ćwiczenia Excel](excel-case-checks.md). Zmiana Analiza!B6 z 4 na 6 zmienia ocenę pierwszej partii dla sześciu ofert, nie zmieniając kosztu całego zamówienia.
- Plik 01 i notatka 02 pozwalają rozróżnić budżet, potrzebę oraz warunki dostawcy; nie dają ceny najmu ani kompletnej oferty usługowej.
- W reklamacji źródła pozwalają wyjaśnić okres raty; nie dają akceptacji ZL-17 ani decyzji o refundacji. Różne opisy pozycji nie dowodzą automatycznie ani duplikatu, ani poprawności opłat. Wcześniejsze sprawy BP nie zatwierdzają decyzji o BudMax.
- Aktualizacja 05 nie potwierdza daty dostawy ani rozstrzygnięcia wszystkich roszczeń. Godziny i daty reklamacji dotyczą momentu sprawy 4 listopada 2026, a nie zegara szkolenia.

## Weryfikacja i ograniczenia

Przegląd obejmuje lekturę wszystkich aktywnych kroków i źródeł, sprawdzenie zależności wejście–wynik oraz danych liczbowych. Testy przeglądarkowe przeszły dla wszystkich 9 modułów i 26 promptów: odsłanianie kroków, kopiowanie, zapis i eksport notatek, wielowierszowy zapis finalnego promptu, podgląd briefu, wszystkie aktywne pliki do pobrania, postęp i układ mobilny. Osobna kontrola potwierdziła dane liczbowe arkusza, zgodność paczki z plikami źródłowymi i agendę do 17:00. Zmieniony brief Word wyrenderowano i sprawdzono wizualnie.

Nie wykonano prób na kontach Copilot uczestników ani porównawczych uruchomień promptów w ich środowisku. Kontrola treści i strony nie jest dowodem, że model zawsze zwróci poprawny wynik. Przed szkoleniem trzeba potwierdzić dostęp do dołączania plików i dostępne funkcje aplikacji; ćwiczenia przewidują pracę w czacie, gdy edycja w aplikacji jest niedostępna.
