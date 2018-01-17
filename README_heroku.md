# Heroku Info

### Access Heroku via CLI with heroku Toolbelt

Enter with your credentials in CLI

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
heroku git:remote -a zitronenstrasse
```


### Heroku start checking errors on server

Basic info, not so useful :

https://devcenter.heroku.com/articles/troubleshooting-node-deploys


More info about errors and how to check them:

https://kb.heroku.com/why-am-i-seeing-application-error


First command to run for seeing error on server. here you start

```
heroku logs --tail --app zitronenstrasse
```

### Heroku re-start server

```
heroku restart --app zitronenstrasse
```

### Heroku Start A node command on heroku server (as it was locally)

```
heroku run XXXyourcommandXXX
```
