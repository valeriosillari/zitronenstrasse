# Zitronenstrasse

### Romantic Spots in Berlin.

[ ![Codeship Status for valeriosillari/zitronenstrasse](https://app.codeship.com/projects/45f42180-b923-0135-4183-366309507115/status?branch=master)](https://app.codeship.com/projects/259131)

### Usage (Nuxt Logic)

A side project with a list of romantic spots in Berlin.

Based on VueJS (Nuxt) and Google Maps.


### Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how Nuxt work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


### Heroku Deploy Info

##### You need to set some CONFIG VAR options on Heroku.

You can find which ones in the ENV example file:

``` html
# example file for CONFIG KEYS required. Based on dotenv package
./env_variables/env_keys_example
```

##### We use EXPRESS as server on Heroku.

For setting more server options for the application, we use Nuxt with Express.

Check the server.js file and documentation for more info.
