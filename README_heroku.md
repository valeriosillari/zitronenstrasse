# Heroku Info

## NOT set any config key on heroku about deployment itself
## The one you need are set in folder "env_variables"

### Access Heroku via CLI with heroku Toolbelt

enter with your credentials

https://devcenter.heroku.com/articles/heroku-cli

```
heroku login
```


### Heroku deploy (pushing)

When logged, push your commits to heroku master for starting the deploy

https://devcenter.heroku.com/articles/git

```
git push heroku master
```


### Heroku connection repo from another computer

If you need to connect the local repo to the origin one (maybe from another machine), type this on CLI

```
heroku git:remote -a nuxt-new-relic
```


### Heroku start checking errors on server

Basic info, not so useful :

https://devcenter.heroku.com/articles/troubleshooting-node-deploys

More info about errors and how to check them:

https://kb.heroku.com/why-am-i-seeing-application-error

First command to run for seeing error on server. here you start

```
heroku logs --tail --app nuxt-new-relic
```


### Heroku re-start server

```
heroku restart --app nuxt-new-relic
```

### Heroku Start A node command on heroku server (as it was locally)

```
heroku run XXXyourcommandXXX
```
