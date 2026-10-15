# Karta promptów: rozbudowa BudMax Deal Desk

W module 4 powstał mały, samodzielny prototyp HTML z danymi ofert wpisanymi na stałe. W module 7 otwórz ten sam plik i rozbuduj go. Nie zaczynaj nowej aplikacji od zera.

## 1. Wczytaj arkusz ofert

```text
Rozbuduj ostatni kompletny prototyp HTML z tego wątku. Zachowaj układ i działające porównanie scenariuszy. Dodaj wybór lokalnego pliku .xlsx i import przez SheetJS z oficjalnego CDN z dokładną, przypiętą wersją; bez „latest”. Jeśli brakuje kodu lub schematu arkusza, poproś o nie przed zmianą.

Schemat i próbka fikcyjnego arkusza:
[WKLEJ NAZWĘ ARKUSZA, NAGŁÓWKI, JEDNOSTKI I KILKA WIERSZY Z dealer_offers.xlsx]

Pokaż wybrany arkusz, wczytaną tabelę i mapowanie nagłówków na pola ofert. Niejednoznaczne dopasowania, nieznane kolumny, brakujące i błędne wartości pokaż do potwierdzenia; nie zgaduj. Zachowaj tekstowe zastrzeżenia, np. „tylko 4 auta od ręki”. Rozróżniaj 0 od braku danych oraz zapis procentowy od ułamka zgodnie ze schematem.
Przetwarzaj plik w pamięci przeglądarki. Poza pobraniem przypiętego skryptu biblioteki nie dodawaj ruchu sieciowego, backendu, API, telemetrii ani wysyłania danych. Komórki pokazuj jako tekst, nie wykonywalny HTML. Błąd importu ma być widoczny i nie może udawać udanego wczytania.
Zwróć wyłącznie kompletny zaktualizowany HTML. Uwzględnij komunikat o niedostępnej bibliotece, jeśli CDN się nie załaduje.
```

## 2. Dodaj wykres scenariusza

```text
Dodaj wykres do ostatniego kompletnego HTML z tego wątku, zachowując import i porównanie ofert. Użyj Chart.js z CDN z dokładną, przypiętą wersją, bez „latest”. Jeśli nie masz kodu, poproś o niego.
Porównaj tylko udokumentowane, porównywalne wartości. Podpisz osie, jednostki i legendę; różne jednostki pokaż osobno. Gdy brakuje porównywalnych liczb, pokaż komunikat zamiast wymyślonego wykresu. Brak wartości nie jest zerem.
Po zmianie scenariusza aktualizuj wykres i podsumowanie, wyróżniając właściwe kryteria bez zmiany danych źródłowych i bez punktacji. Jeśli aplikacja ma wybór liczby aut, przeliczaj tylko miary zależne od tej liczby z jawnym wzorem i założeniami; nie dodawaj nowej kontrolki. Nie wyliczaj TCO ani raty z samej ceny zakupu.
Zachowaj źródła, zastrzeżenia i oznaczenia „do potwierdzenia”. Poza pobraniem przypiętych bibliotek nie dodawaj ruchu sieciowego ani wysyłania danych. Zwróć wyłącznie kompletny HTML.
```

## 3. Sprawdź działanie

```text
Zweryfikuj ostatni HTML oraz fikcyjny dealer_offers.xlsx dostępne w tym wątku. Jeśli brakuje pliku lub kodu, poproś o nie.
Sprawdź: mapowanie kolumn i jednostek; jedno obliczenie względem ręcznego wyniku (albo brak obliczeń); spójność tabeli, wykresu i podsumowania po przełączeniu scenariusza; brakującą wartość wobec zera; zachowanie przy błędzie importu lub niedostępnym CDN.
Jeśli możesz uruchomić aplikację, wykonaj testy i podaj obserwacje. Jeśli nie możesz, wykonaj przegląd kodu i podaj krótką instrukcję ręcznych testów, bez twierdzenia, że je wykonano.
Wynik: tabela „przypadek | oczekiwany wynik | obserwacja lub niewykonane | status i dowód”. Popraw tylko potwierdzone błędy; wtedy dodaj kompletny HTML i wskaż, co trzeba ponownie sprawdzić. Jeśli błędów nie potwierdzono, nie przepisuj kodu. Nie zmieniaj danych ani założeń biznesowych.
```

## Kryteria oceny

- [ ] **Kontynuacja:** aplikacja rozbudowuje plik z modułu 4 i zachowuje jego działające funkcje.
- [ ] **Import:** użytkownik sam wybiera lokalny arkusz; błędne, brakujące i nierozpoznane pola są widoczne.
- [ ] **Wykres:** zmiana scenariusza rzeczywiście aktualizuje wykres i podsumowanie.
- [ ] **Źródła:** liczby można powiązać z arkuszem, a niewiadome pozostają oznaczone.
- [ ] **CDN:** biblioteki mają przypięte wersje; bez internetu aplikacja nie załaduje tych skryptów.
- [ ] **Prywatność:** arkusz jest parsowany w przeglądarce; kod nie wysyła danych do serwisu, API ani backendu.

## Ograniczenia środowiska

Niektóre osadzone edytory, w tym SharePoint HTML Pages, mogą blokować skrypty CDN. Jeśli import lub wykres nie działa w osadzonym podglądzie, zapisz HTML i otwórz go lokalnie w przeglądarce z dostępem do internetu. Korzystaj wyłącznie z fikcyjnego arkusza szkoleniowego. Przed wdrożeniem prototypu trzeba osobno ocenić zależności, dane i sposób udostępnienia.
