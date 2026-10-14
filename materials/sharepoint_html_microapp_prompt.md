# Karta promptów: BudMax Deal Desk

Materiał do ćwiczenia z budowania mikroaplikacji. Najpierw wykonaj pierwszą próbę, potem pokaż prompt iteracji 2. To ćwiczenie pracuje na fikcyjnych danych BudMax i ofertach szkoleniowych.

## Pierwsza próba

> Na podstawie materiałów BudMax zbuduj prostą, interaktywną stronę HTML, która pomoże handlowcowi porównać oferty dealerów i przygotować rekomendację. Dodaj kontrolki najważniejszych założeń i pokaż, jak zmieniają wynik. Nie dopisuj brakujących cen, warunków ani dostępności.

Po pierwszym wyniku zapytaj: co pomaga podjąć decyzję, czego brakuje i które elementy są tylko dekoracją?

## Iteracja 2

> Ulepsz aplikację, dodając osobne sekcje Client Snapshot, Dealer Comparison, Scenario Controls i Negotiation Cockpit. Pokaż obliczenia tak, by dało się je sprawdzić. Nie wymyślaj brakujących danych; oznacz je jako „do potwierdzenia”. Kontrolki liczby aut, przebiegu oraz znaczenia terminu, ceny i wyposażenia mają deterministycznie aktualizować porównanie. Przygotuj czytelny widok do użycia podczas rozmowy handlowej. Zwróć pojedynczy plik HTML z CSS i JavaScript wbudowanymi w plik.

## Pięć przykładów zmian językiem naturalnym

1. „Dodaj suwak ważności terminu dostawy. Pokaż, jak jego zmiana wpływa na ranking, i wyjaśnij użyte założenia.”
2. „Wyróżnij, że w ofercie Dealera C tylko 4 auta są od ręki, a pozostałe mają termin 6 tygodni. Nie pokazuj tego jako potwierdzonej dostępności całych 12 aut.”
3. „Dodaj Executive Summary z rekomendacją, założeniami, ryzykami i pytaniami do potwierdzenia.”
4. „Dodaj ostrzeżenie, gdy porównywane limity przebiegu nie odpowiadają potrzebie około 45 tys. km rocznie dla handlowców. Jeśli oferta nie podaje limitu, pokaż „do potwierdzenia”.”
5. „Uprość widok do rozmowy z klientem: pokaż najważniejsze kryteria i pytania, a szczegółowe obliczenia zostaw w rozwijanej sekcji dla handlowca.”

Po każdej zmianie sprawdź, czy aplikacja zachowała dane źródłowe i czy interakcja faktycznie zmienia wynik.

## Checklista przed pokazaniem wyniku

- [ ] **Funkcja biznesowa:** czy aplikacja pomaga porównać oferty i przygotować kolejny krok, a kontrolki robią coś więcej niż dekoracja?
- [ ] **Dane:** czy wartości pochodzą z materiałów BudMax? Czy fakty, założenia i braki są rozróżnione?
- [ ] **Obliczenia:** czy formuły i założenia są widoczne i sprawdzalne? Czy transport, rabaty i pakiety są pokazane osobno?
- [ ] **Interakcje:** czy zmiana liczby aut, przebiegu lub ważności kryterium aktualizuje porównanie w przewidywalny sposób?
- [ ] **Ograniczenia:** czy wynik to jeden plik HTML z CSS i JavaScript wbudowanymi w plik, bez zewnętrznych API, `fetch`, `localStorage` i nieobsługiwanych bibliotek z CDN?
- [ ] **Bezpieczeństwo:** czy użyto wyłącznie danych fikcyjnych, bez prawdziwych danych klientów, rzeczywistych warunków handlowych, sekretów i kluczy API?

## Ograniczenia SharePoint HTML Pages

Dostępność funkcji HTML Pages może zależeć od środowiska SharePoint używanego na szkoleniu. Przygotuj prosty plik bez backendu, z CSS i JavaScript w tym samym HTML; nie zakładaj dostępu do `fetch`, zewnętrznych API, `localStorage` ani dowolnych skryptów CDN. Jeśli funkcja nie jest dostępna, użyj tego samego briefu w dostępnym narzędziu generującym kod, zapisz pojedynczy plik HTML i otwórz go lokalnie. Prototyp przed wdrożeniem wymaga przeglądu bezpieczeństwa, danych i sposobu udostępnienia.
