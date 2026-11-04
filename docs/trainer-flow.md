# Prowadzenie warsztatu BudMax w M365

## Przed szkoleniem

Przygotuj własne kopie pakietu `materials/m365/budmax_materialy.zip` w zatwierdzonym środowisku. Każdy uczestnik powinien mieć dostęp do AI i samodzielnie uruchamiać zadania. Przy jednym urządzeniu zmieniaj operatora. Podstawowe zadanie ma działać na prostym wejściu; osoby sprawniejsze wykonują rozszerzenie wskazane w module.

Sprawdź cztery stanowiska pracy:

1. Outlook: przygotowany warsztatowy wątek z pakietu 01 oraz osobna wiadomość reklamacyjna z pakietu 03. TXT nie jest natywnym wątkiem Outlooka. Sprawdź podsumowanie i tworzenie niewysłanego szkicu na rzeczywistym koncie demonstracyjnym.
2. Excel: własna kopia `budmax_oferty.xlsx`, tabela OfertyDealerow, możliwość pracy z Copilotem i zapisu. Sprawdź edycję lub generowanie formuł. Nie zakładaj, że każde konto ma identyczne funkcje.
3. PowerPoint: dostępny, zatwierdzony szablon organizacji oraz możliwość pracy na briefie Word. Tego szablonu nie ma w repozytorium — należy przygotować go w środowisku szkoleniowym. Nie używaj starego `proposal_deck_template.pptx` jako aktualnego wzoru; to materiał wcześniejszego programu.
4. Dokumenty: odczyt pakietu 04 DOCX albo osobnych plików TXT w zatwierdzonym Copilot Chat. Sprawdź, jakie dokumenty model faktycznie widzi i jak wskazuje źródła.

Nie używaj danych klientów ani odpowiedzi uczestników ankiety jako treści demonstracyjnej. Na początku wyjaśnij zatwierdzone środowisko, kategorie danych i sposób kontroli wyniku.

## Rytm każdego modułu

Trener pokazuje fragment zadania i weryfikację jednego wyniku. Następnie każdy uczestnik wykonuje pełne zadanie z AI, zmienia jedną instrukcję w razie potrzeby, sprawdza źródło i zachowuje rezultat. Pokaz nie powinien ujawniać całego rozwiązania.

Kroki nie mają oznaczeń czasu. Agenda i długości modułów wyznaczają ramy dnia. Skracaj omówienie na forum i rozszerzenie, a nie bezpośrednią pracę uczestników z AI.

## Trzy rozdziały i transfer

| Moduł | Pokaz trenera | Praca uczestnika | Rezultat |
| --- | --- | --- | --- |
| 1 Outlook | Fragment korespondencji i szkic | Cały wątek, briefing i odpowiedź | Brief i pytania |
| 2 Discovery | Jedno pytanie i STOP | Jedna rozmowa z AI, opcjonalna poprawka | Notatka potrzeb |
| 3 Excel | Jedna formuła i jej źródło | Porównanie wszystkich dealerów i test parametru | Arkusz i rekomendacja |
| 4 PowerPoint | Struktura briefu i pierwszy slajd | Cztery slajdy, kontrola i ewentualne tłumaczenie | Materiał do decyzji |
| 5 Outlook | Jeden akapit reklamacji | Cała reklamacja, triage i pierwsza odpowiedź | Mapa sprawy i pytania |
| 6 Dokumenty | Okres faktury z trzech źródeł | Umowa, załączniki i analogie historyczne | Ustalenia z cytatami |
| 7 Komunikacja | Jeden fakt dla dwóch odbiorców | Odpowiedź, przekazanie, CRM i raport | Spójne komunikaty |
| 8 Transfer | Wyodrębnienie szablonu promptu | Własne zastosowanie i próbne uruchomienie | Plan testu i prompt |

Przygotowanie propozycji (1–3) opiera się na wyniku uczestnika. Zapis spotkania 02 jest jawnym źródłem zastępczym, jeśli symulacja nie zadziała, i materiałem do pokazu raportowania. Nie przedstawiaj go jako informacji zdobytych w dialogu, którego nie było.

W module 5 jawnie przejdź do obsługi po sprzedaży. Wydano cztery auta i pojawia się reklamacja. Podpisany stan sprawy jest określony przez dokumenty 04, a nie decyzję wygenerowaną wcześniej przez AI. Pakiet ten udostępnij po wstępnej analizie maila. W module 7 wprowadź aktualizację 05 z odpowiedziami zespołów.

## Kontrole ważne dla case’u

- Excel: cena A po rabacie 113950 PLN, B 111300 PLN, C 116072 PLN. Transport B dla 12 aut: 10800 PLN; zakup i transport B: 1346400 PLN netto. Transport A/C nie jest wyceniony. Wartości pakietów nie odejmujemy od ceny zakupu. Po testach przywróć B4=12.
- Reklamacja: sam mail nie potwierdza załączników. Uwaga CFO o rozważaniu zakończenia nie jest wypowiedzeniem. Nie dopisuj brokera do wątku i nie rozsyłaj dokumentów szkody.
- Dokumenty: UR §2, ZP §2 i FK 1 wyjaśniają okres raty. ZU opisuje awarię i godziny robocze, a zdarzenie to kolizja. ZG/FK nie zawierają akceptacji ZL-17. Różny opis dwóch opłat nie dowodzi automatycznie ani duplikatu, ani poprawności obciążenia.
- Historia podobnych spraw BP daje wskazówki, nie decyzję o korekcie lub zwrocie dla BudMax.
- Aktualizacja 05 potwierdza koordynację i część faktów, lecz nie decyzję o refundacji ani wiążącą datę wydania pozostałych aut.

## Ścieżki zastępcze

Brak funkcji AI w aplikacji nie oznacza braku zadania. W zatwierdzonym Copilot Chat można dołączyć materiał, uzyskać analizę lub propozycję formuł, a wynik sprawdzić i przenieść do właściwej aplikacji. Wyraźnie nazwij tę ścieżkę; nie twierdź, że model edytował plik lub czytał całą skrzynkę, jeżeli tego nie zrobił.

Gdy tworzenie prezentacji z pliku jest niedostępne, uczestnik generuje układ i treści z AI, a następnie przenosi je do przygotowanego szablonu. Brak konta lub funkcji należy sprawdzić przed szkoleniem, aby nie zamienić ćwiczenia w konfigurację narzędzi.

## Źródła funkcji i przygotowania

Sprawdzono 4 listopada 2026. Interfejsy i dostęp zależą od konta, wersji aplikacji oraz ustawień organizacji. Dokumentacja nie potwierdza dostępności na kontach uczestników.

- [Microsoft — podsumowanie korespondencji w Outlooku](https://support.microsoft.com/office/summarize-an-email-thread-with-copilot-in-outlook-a79873f2-396b-46dc-b852-7fe5947ab640)
- [Microsoft — wskazówki pracy z Copilotem w Excelu](https://support.microsoft.com/office/format-data-for-copilot-in-excel-1604c8eb-57f1-4db1-8363-d53336228c65)
- [Microsoft — tworzenie prezentacji z Copilotem i praca na szablonie](https://support.microsoft.com/office/create-a-new-presentation-with-copilot-in-powerpoint-3222ee03-f5a4-4d27-8642-9c387ab4854d)
- Zasady promptów i scenariusze sprawdzania odpowiedzi: `docs/prompt-review-current.md`.

## Ocena

Uczestnik potrafi wskazać źródło twierdzenia, wykonać test parametru, poprawić prompt i zachować wynik w docelowej aplikacji. Na końcu ma własny plan zastosowania, a nie tylko wygenerowane dokumenty. Zaznaczenie ukończenia na stronie jest samooceną; skuteczność ćwiczeń trzeba obserwować w pilotażu.
