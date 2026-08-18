# Strona ślubna — 09.01.2027

Minimalna strona ślubna przygotowana do wdrożenia na Railway.

## Uruchomienie lokalne

Wymagany Node.js 20 lub nowszy.

```bash
npm start
```

Następnie otwórz:

```text
http://localhost:3000
```

## Wdrożenie na Railway

1. Utwórz repozytorium na GitHubie.
2. Wrzuć do niego całą zawartość tego folderu.
3. W Railway utwórz nowy projekt i wybierz wdrożenie z repozytorium GitHub.
4. Wybierz swoje repozytorium.
5. Railway wykryje aplikację Node.js i uruchomi skrypt `npm start`.
6. W ustawieniach usługi przejdź do `Networking` i wygeneruj publiczną domenę.

Serwer korzysta z `process.env.PORT`, czyli portu przekazywanego przez Railway.

## Edycja strony

- `public/index.html` — tekst i zawartość strony
- `public/styles.css` — wygląd, kolory i typografia
- `server.js` — prosty serwer HTTP potrzebny do uruchomienia na Railway
