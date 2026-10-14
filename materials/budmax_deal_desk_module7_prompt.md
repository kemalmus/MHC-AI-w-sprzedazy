# Karta promptów: rozbudowa BudMax Deal Desk

W module 4 powstał mały, samodzielny prototyp HTML z danymi ofert wpisanymi na stałe. W module 7 otwórz ten sam plik i rozbuduj go. Nie zaczynaj nowej aplikacji od zera.

## 1. Wczytaj arkusz ofert

> Rozbuduj istniejący plik HTML, zachowując jego układ i działające funkcje. Dodaj wybór lokalnego pliku .xlsx i odczyt arkusza w przeglądarce przez SheetJS ładowany z oficjalnego CDN, z przypiętą wersją biblioteki. Dopasuj kolumny do pól ofert. Pokaż brakujące i nierozpoznane wartości; nie uzupełniaj ich domysłami. Nie wysyłaj pliku ani jego zawartości do żadnej usługi. Nie dodawaj backendu ani zewnętrznych API. Zwróć kompletny plik HTML.

## 2. Dodaj wykres scenariusza

> Dodaj do tego samego pliku wykres porównujący oferty, używając Chart.js z przypiętą wersją ładowaną z CDN. Wykres i podsumowanie mają aktualizować się po zmianie scenariusza. Podpisz osie i jednostki. Nie pokazuj brakujących wartości jako zera ani nie twórz pozornej precyzji. Zachowaj źródła danych i oznaczenia „do potwierdzenia”. Zwróć kompletny plik HTML.

## 3. Sprawdź działanie

> Przetestuj aplikację na wczytanym arkuszu ofert. Sprawdź mapowanie kolumn, jeden obliczony wynik, aktualizację wykresu po zmianie scenariusza i obsługę brakujących danych. Wypisz potwierdzone błędy i popraw tylko te miejsca. Nie dodawaj nowych danych ani założeń.

## Kryteria oceny

- [ ] **Kontynuacja:** aplikacja rozbudowuje plik z modułu 4 i zachowuje jego działające funkcje.
- [ ] **Import:** użytkownik sam wybiera lokalny arkusz; błędne, brakujące i nierozpoznane pola są widoczne.
- [ ] **Wykres:** zmiana scenariusza rzeczywiście aktualizuje wykres i podsumowanie.
- [ ] **Źródła:** liczby można powiązać z arkuszem, a niewiadome pozostają oznaczone.
- [ ] **CDN:** biblioteki mają przypięte wersje; bez internetu aplikacja nie załaduje tych skryptów.
- [ ] **Prywatność:** arkusz jest parsowany w przeglądarce; kod nie wysyła danych do serwisu, API ani backendu.

## Ograniczenia środowiska

Niektóre osadzone edytory, w tym SharePoint HTML Pages, mogą blokować skrypty CDN. Jeśli import lub wykres nie działa w osadzonym podglądzie, zapisz HTML i otwórz go lokalnie w przeglądarce z dostępem do internetu. Korzystaj wyłącznie z fikcyjnego arkusza szkoleniowego. Przed wdrożeniem prototypu trzeba osobno ocenić zależności, dane i sposób udostępnienia.
