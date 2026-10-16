# Jak łatwo zmieniać stronę

## Zmiana tekstu, agendy lub case’u

Edytuj `source/training_content.json`. To jedyne miejsce, w którym zapisane są teksty modułów, prompty, agenda, dane fikcyjnego case’u i wskazówki dla trenera. Do zwykłej zmiany tekstu nie trzeba ruszać HTML, CSS ani JavaScriptu.

Na GitHubie otwórz `source/training_content.json`, wybierz edycję pliku, zmień treść i zapisz commit na gałęzi `main`. Workflow sprawdzi składnię JSON i JavaScript, a następnie opublikuje stronę. Jeśli sprawdzenie się nie powiedzie, popraw błąd wskazany w zakładce **Actions** i zapisz kolejny commit.

Najczęściej zmieniane pola:

- `title`, `subtitle` — tytuł i opis strony.
- `case` — fikcyjny profil klienta i jego potrzeby.
- `agenda` — godziny, nazwy punktów i odnośniki do modułów. Wartość `target` musi wskazywać istniejący identyfikator modułu.
- `modules` — zawartość modułów. W każdym module można zmienić `title`, `time`, `duration`, `objective`, `problem`, `content`, `steps` i `takeaway`.
- `entry`, `output`, `criteria` — wejście, wynik przekazywany dalej i obserwowalne kryteria sukcesu etapu. `output` włącza pole karty szansy dla modułów 1–10.
- `case.mission`, `case.workingRules` — wspólny cel i rytm pracy w trójkach.
- `trainer` — podpowiedzi widoczne po włączeniu trybu trenera.

Elementy `steps` są listą. Każdy krok może mieć `title`, `body` i `prompt`; wzoruj nowy krok na sąsiednim elemencie w tym samym module. Nie zmieniaj nazw kluczy ani identyfikatorów `id`, jeśli nie aktualizujesz wszystkich powiązanych odnośników.

## Zmiana plików do pobrania

Pliki ćwiczeniowe są w `materials/`, a wyniki przykładowe w `fallback/`. Możesz podmienić plik przez przesłanie nowej wersji w GitHubie. Zachowaj jego nazwę i ścieżkę, bo odwołuje się do nich treść strony. Jeśli zmieniasz nazwę, popraw także pole `downloads` w odpowiednim module pliku `source/training_content.json`.

Karty ról i ujawnianie zdarzeń są opisane w `docs/trainer-flow.md` oraz `materials/budmax_client_cards.md`. Zmieniając fakt, popraw wszystkie odpowiadające mu karty i materiały. Nie podmieniaj rezultatów uczestników gotowymi odpowiedziami z poprzedniego programu. Czasy kroków muszą sumować się do długości modułu, a agenda powinna zachować ciągłość.

Wszystkie przykłady szkoleniowe mają pozostać fikcyjne. Nie wstawiaj rzeczywistych danych klientów ani warunków handlowych MHC.

## Zmiana wyglądu lub działania

Do układu służy `index.html`, do kolorów i typografii `assets/css/site.css`, a do interakcji `assets/js/app.js`. Po zmianie kodu sprawdź stronę lokalnie:

```sh
python3 -m http.server 8000
```

Otwórz `http://localhost:8000`. Zatrzymaj serwer skrótem `Ctrl+C`. Strony nie należy uruchamiać przez bezpośrednie otwarcie pliku `index.html`, bo pobiera wspólny plik treści przez HTTP.

## Publikacja

Każdy commit do `main` uruchamia publikację. Postęp sprawdzisz w zakładce **Actions** repozytorium. Po udanym przebiegu GitHub Pages zaktualizuje stronę automatycznie. Nie ma ręcznego buildu ani zależności do instalowania.
