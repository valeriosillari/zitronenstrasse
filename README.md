# Zitronenstrasse

#### Romantic Spots in Berlin.

[zitronenstrasse.com](https://zitronenstrasse.com/)

## GENERAL INFO

A side project with a list of romantic spots in Berlin.

Based on **[NuxtJS](https://nuxtjs.org/)**, **[Storyblok](https://www.storyblok.com/)**, **[Google Maps](https://www.google.com/maps)**.

## INSTALLATION

1. Create a file in the root for env keys with this exact name: `.env`

2. Copy and past all code from the existing file `.env.example` into the new file `.env`

3. For each empty key `.env` file set the correct keys you will use from third-part services

Now you set the right keys. You're ready to start

## BASIC CLI COMMANDS

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# generate static project
$ yarn deploy
```

For detailed explanation on how Nuxt works, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## ENV OPTIONS

You need to set some CONFIG VAR options locally and on Deploy Server for custom Plugins as Google Map, Analytics etc ...

For detailed explanation on how dotenv work, checkout the [dotenv docs](https://github.com/motdotla/dotenv).

For a list of required keys with right name, check the file in root folder called `.env.example`

## TODO

#### GOOGLE TAGMANAGER

- update to version 4 (gtag)

#### STORYBLOK

- TODO: ERROR for page at generate command (see CLI), but all work anyway ... (?)
- check place as item from storyblok
- add css class to rich text items
- check how many TOKEN / option you need on Storyblok. 1 is enough ?
- add "BACK HOME" at end of privacy page

#### VERCEL

- check vercel secrets logic again

## ISSUES

- **PERFORMANCES**: check speed insight (June 2019)

- **PWA icon**: set on static (icon.png). check how to set custom folder and put it into static/favicons

- **MANIFEST (console log)**: check console log locally, issue on manifest file

## NICE TO HAVE

- **LAZY LOAD MAP?**: load map better (and later), for performance

- **SVG on IE**: we have to check if we see markers custom svg on windows

- **LAZY LOAD IMAGES**: set logic for place images. we have added plugin, but we got issues with images.

- **IMAGES in ASSETS FOLDER**: set all images in asset folder. now in static folder. not quite sure if it is the right place.

## ROAD MAP

- **MAP PAN (movement)**: set it slow and nicer/smoother

- **MAP CUSTOM STYLES**: at map movement it is always flickering cause of image request. is is ok? could we prevent it?

- **FILTERS**: show places sorted by some kind of filter (only bars, only restaurants etc ...). Design + Code need to a concept.

- **SHARE SINGLE PLACES**: suggestion for sharing (on FB, twitter, as link) only a single place on the map. Conceptually possible? we have to check

- **HEADLINE**: on homepage/map set some kind of headline for recognising the website brand
