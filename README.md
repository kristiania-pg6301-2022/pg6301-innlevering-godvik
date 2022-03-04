[![Test is](https://github.com/kristiania-pg6301-2022/pg6301-innlevering-godvik/actions/workflows/test.yml/badge.svg)](https://github.com/kristiania-pg6301-2022/pg6301-innlevering-godvik/actions/workflows/test.yml)
[![Coverage Status](https://coveralls.io/repos/github/kristiania-pg6301-2022/pg6301-innlevering-godvik/badge.svg?branch=main)](https://coveralls.io/github/kristiania-pg6301-2022/pg6301-innlevering-godvik?branch=main)
### Innlevering med tilbakemelding: React og express på Heroku

#### Heroku deployment
https://greatest-quiz-app-of-all-time.herokuapp.com

Applikasjonen skal vise at dere behersker:

* Parcel
* React
* React Router
* Jest
* Github Actions
* Coveralls
* Express
* Heroku

# Oppsummert:

* [x] Få en Parcel til å bygge en React applikasjon
* [x] Få React Router til å navigere rundt i applikasjonen
* [x] Få React til å hente og lagre informasjon til et API
* [x] Få Github Actions til å kjøre Jest-testene og publisere coverage til Coveralls
* [x] Få Heroku til å publisere websidene
Express-server skal ha følgende API:

GET /api/question - returnerer et tilfeldig spørsmål med { id, category, question, answers }
POST /api/question - tar inn { id, answer } og returnerer "true" eller "false"

# Kommentarer:
Vi har også implementert cookies i DE branchen, men servertestene sluttet og fungere. HTTP request og testing i browser oppnådde ønsket resultat, men testene feiler altså.
Fordi testene feilet valgte vi og ikke merge til main for å sende coverage ned.
Vi ønsker tilbakemelding på hvordan vi har lagt opp testing, med presets og dependecies for hele prosjektet. Har vi gjort det på en god nok måte eller kunne det ha vært mer effektivt?
