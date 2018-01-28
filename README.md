# Zitronenstrasse

#### Romantic Spots in Berlin.

[zitronenstrasse.com](http://www.zitronenstrasse.com/)

[ ![Codeship Status for valeriosillari/zitronenstrasse](https://app.codeship.com/projects/45f42180-b923-0135-4183-366309507115/status?branch=master)](https://app.codeship.com/projects/259131)


## GENERAL INFO

A side project with a list of romantic spots in Berlin.

Based on **VueJS (Nuxt)**, **Google Maps** and **Express Server**.


## Setup

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


## DEPLOY INFO

We deploying on **Heroku**, using **Codeship**.


#### ENV OPTIONS

You need to set some CONFIG VAR options locally and on Heroku for custom Plugins as Google Map, Analytics and New Relic.

You can find which ones in the ENV example file:

``` html
# example file for CONFIG KEYS required. Based on dotenv package
./env_variables/env_keys_example
```

For detailed explanation on how dotenv work, checkout the [dotenv docs](https://github.com/motdotla/dotenv).


#### SERVER OPTIONS

We use Express as server.

For setting more server options for the application, we use Nuxt with Express.

Check the server.js file and documentation for more info.


#### Heroku CLI SHORTCUTS

**Login**: enter with your credentials in CLI

https://devcenter.heroku.com/articles/heroku-cli

```
heroku login
```

**CLI deploy**: when logged in, push your commits to heroku master for starting the deploy

https://devcenter.heroku.com/articles/git

```
git push heroku master
```

If you need to connect the local repo to the origin one (maybe from another machine), type this on CLI

```
heroku git:remote -a zitronenstrasse
```

**CLI show logs**: first command to run for seeing error on server.

```
heroku logs --tail --app zitronenstrasse
```

CLI Heroku: **re-start server**

```
heroku restart --app zitronenstrasse
```

CLI Heroku: **start a node command** on heroku server (as it was locally)

```
heroku run XXXyourcommandXXX
```


## ROAD MAP

#### TODO

- **NO JS message**: if browser has NO-JS set ...

- **SWITCH PAGE VIA BROWSER**: logic for reset map works if you click our navi. But NOT via browser arrows

- **ERROR PAGE**: set logic for reset map (if you switch page via browser arrow 'before' and 'after')

- **PERFORMANCE**: async / defere js as external JS has some issues. check nuxt option for async external js of Google Map.

#### NICE TO HAVE

- **MAP COMPONENT**: set the JS code more modular, using methods

- **MAP VUE PLUGIN**: check if possible to use it with place ID

- **CONTACT PAGE**: set node mailer and all the logic for form mailer
