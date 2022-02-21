### Innlevering med tilbakemelding: React og express på Heroku

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

* [ ] Få en Parcel til å bygge en React applikasjon
* [ ] Få React Router til å navigere rundt i applikasjonen
* [ ] Få React til å hente og lagre informasjon til et API
* [] Få Github Actions til å kjøre Jest-testene og publisere coverage til Coveralls

* [ ] Få Heroku til å publisere websidene
Express-server skal ha følgende API:

GET /api/question - returnerer et tilfeldig spørsmål med { id, category, question, answers }
POST /api/question - tar inn { id, answer } og returnerer "true" eller "false"

# Kommentarer:

Vi ønsker tilbakemelding på hvordan vi har lagt opp testing, med presets og dependcies for hele prosjektet. Har vi gjort det på en god nok måte eller kunne det ha vært mer effektivt?