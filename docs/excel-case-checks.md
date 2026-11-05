# Klucz kontroli ćwiczenia Excel

Rozszerzony skoroszyt z 5 listopada 2026. Dane do szkolenia, nie wyniki ani oferty MHC. Tego pliku nie ma w paczce uczestników.

## Struktura i przepływ

- Analiza: parametry B5:B10, objaśnienia i miejsce na wyniki od wiersza 24. Wyniki mają powstać z Copilotem, nie są dostarczone w gotowym dashboardzie.
- PojazdyRef: 36 aut referencyjnych, 3 modele i 3 profile. Pojazd_ID jest unikalny.
- Eksploatacja: 433 rekordy, w tym 1 dokładny duplikat; baza obejmuje 36 × 12 = 432 obserwacje.
- Zdarzenia: 145 zdarzeń, w tym jedno bez dopasowania do kartoteki. Koszty i przestoje 144 dopasowanych zdarzeń są już w miesięcznej tabeli.
- OfertyDealerow: 18 ofert (6 dealerów × 3 modele), stan na 1 września 2026, ważność do 15 września. To data scenariusza, nie dzisiejsza data szkolenia.

Łącz PojazdyRef z Eksploatacja przez Pojazd_ID (wiele miesięcy do jednego auta). Zdarzenia agreguj przed porównaniem z miesięcznymi kosztami. Nie łącz surowych miesięcy z surowymi zdarzeniami tylko po aucie — to relacja wiele do wielu i zwielokrotnienie kwot.

## Kontrola jakości

| Rekord | Problem | Dopuszczalne postępowanie w ćwiczeniu |
| --- | --- | --- |
| REF-004-202601 | Dokładny duplikat, ten sam Rekord_ID i wartości | Zostawić jeden w kopii roboczej |
| REF-002-202602 | Kilometry = -420 | Zgłosić do sprawdzenia; nie zmieniać znaku ani nie zgadywać przebiegu |
| REF-008-202605 | Brak Paliwo_netto | Nie zamieniać na zero; wykluczyć z kompletnej próby koszt/km lub wykazać oddzielnie |
| SRV-145, REF-999 | Brak pojazdu w kartotece | Zachować w raporcie niedopasowań; nie przypisywać do dowolnego modelu |
| REF-028-202602 | Zero km, brak kosztów i przestojów | Nietypowe, ale nie dowodzi błędu; nie obliczać miesięcznego kosztu/km przez zero |
| Dealer C i E | Brak wyceny transportu w 6 ofertach | Nie tworzyć pozornie kompletnej sumy kosztów |

Zapis decyzji uczestnika jest ważniejszy niż automatyczne „czyszczenie”. Duża kwota albo długi przestój same w sobie nie uzasadniają usunięcia obserwacji.

## Wyniki kontrolne dla profilu Trasy

Poniższe wyniki przyjmują usunięcie duplikatu i wykluczenie całych miesięcznych rekordów z ujemnym km lub brakującym paliwem. Pozostaje 430 kompletnych rekordów w całym portfelu. Inna jawnie opisana metoda może dać inne wyniki; sprawdź wtedy definicję próby. Wskaźnik to (suma paliwa + suma serwisu) / suma km dla tych samych rekordów.

| Model | Auta | Miesiące | km | Paliwo netto | Serwis netto | PLN/km | Dni przestoju |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Kombi A benzyna | 4 | 48 | 181384 | 88834.88 | 20360 | 0.602009 | 30 |
| Kombi B hybryda | 4 | 47 | 182022 | 63671.54 | 20740 | 0.463744 | 26 |
| SUV C benzyna | 4 | 48 | 185400 | 107520.86 | 27620 | 0.728915 | 54 |

Cztery auta na model w profilu Trasy to mała próba. Różnice wieku i historii napraw ograniczają wnioski. To wybrane koszty eksploatacji, bez m.in. finansowania, ubezpieczenia i utraty wartości; nie TCO ani potwierdzona prognoza dla BudMax.

## Oferty i test parametru

- OF-1-1: cena po rabacie 113950 PLN netto; transport 500 na auto; koszt 12 aut z transportem 1373400 PLN. Pozostałe auta mają 49 dni, więc sama poprawność kosztu nie oznacza spełnienia dostawy.
- Największy rabat ma Dealer B (17%), ale tylko 2 auta od ręki i terminy 70–84 dni. Sam ranking rabatu prowadzi do złego wyboru przy przyjętych warunkach dostaw.
- Zmiana Analiza!B6 z 4 na 6 zmienia spełnienie terminu pierwszej partii dla OF-3-1/2/3 oraz OF-6-1/2/3: magazyn 4 przestaje wystarczać, a pozostałe auta mają ponad 14 dni. Koszt zamówienia pozostaje ten sam, bo B5=12 się nie zmieniło.
- Dealer D ma 6 aut od ręki, ale konfiguracja wymaga potwierdzenia. Nie zamieniaj tego na automatyczne „oferta zaakceptowana”.
- Wiersze cen są wariantami, a nie potwierdzoną rezerwacją. Nie sumuj stanów różnych ofert jako pewnej wspólnej dostawy.
- Przywróć B6=4 po próbie. Parametry 4 auta/14 dni i 12 aut/42 dni są założeniami analizy do potwierdzenia, nie nowym ustaleniem z notatki klienta.

## Zakres podstawowy i rozszerzenie

Podstawa: raport jakości, profil Trasy, porównanie modeli, jedna kontrola sumy i ilorazu, oferty i zmiana B6, wykres kosztu/km, rekomendacja do modułu 4. Rozszerzenie: trend przestojów i analiza pozostałych profili. Nie wymagamy Pythona ani uczenia maszynowego; trudność wynika z relacji danych i interpretacji.

## Weryfikacja przygotowanego pliku

Sprawdzono typy liczb i dat, 4 natywne tabele Excel, liczbę rekordów, celowe problemy jakości, spójność kosztów i przestojów miesięcznych z dopasowanymi zdarzeniami oraz niezależne obliczenia powyżej. Obejrzano wyrenderowane widoki wszystkich 5 arkuszy. Plik źródłowy nie zawiera gotowych obliczeń do wykonania przez uczestnika. Nie uruchamiano Copilota na kontach uczestników.
