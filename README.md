# Zitronenstrasse

### Romantic Spots in Berlin.

[zitronenstrasse.com](https://zitronenstrasse.com/)

### GENERAL INFO

A side project with a list of romantic spots in Berlin.

Based on **[NuxtJS](https://nuxt.com/)**, **[Contentful Headless CMS](https://www.contentful.com/)**, **[GraphQL](https://graphql.org/)** and **[Google Maps](https://www.google.com/maps)**.

### INSTALLATION

1. Create a file in the root for env keys with this exact name: `.env`

2. Copy and past all code from the existing file `.env.example` into the new file `.env`

3. For each empty key `.env` file set the correct keys you will use from third-part services

Now you set the right keys. You're ready to start

### BASIC CLI COMMANDS

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8000
$ npm run dev

# generate static project (static website)
$ npm run deploy-generate
```

### TODO

- check graphQL query at CLIENT (click on single spot, get data by IDs)
- google map and consent? start map only after user says all fine?
- space with REM (trick as pixels)?
- split sass variables in more files?
- sass font file with all vars
- transition between pages (improve animations)
- button : 1 component with all logic and styles (now 2: button and button MENU)

### NICE TO HAVE

- error page : 1) use layout, show FOOTER. 2) no transition effect 3) button back with NO js
- filter (where) for data of single page (gql query)
- load data at page switch? cannot pre generated all data? >> REAL STATIC + git hooks?
- check speed insight (June 2019). load map better (and later), for performance

### ROAD MAP

- **FILTERS**: show places sorted by some kind of filter (only bars, only restaurants etc ...). Design + Code needs a concept.

- **SHARE SINGLE PLACES**: suggestion for sharing (on FB, as link) only a single place on the map. Conceptually possible? we have to check
