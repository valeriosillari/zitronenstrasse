# Zitronenstrasse

#### Romantic Spots in Berlin. YO

[zitronenstrasse.com](https://zitronenstrasse.com/)

## GENERAL INFO

A side project with a list of romantic spots in Berlin.

Based on **Nuxt (VueJS)** and **Google Maps**.

## SETUP

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

- **ENV_ZITRONENSTRASSE_GOOGLE_MAP** : google map api (javascript)

- **ENV_ZITRONENSTRASSE_GOOGLE_ANALYTICS** : google analytics

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
