# Angular UI Components.

```
ng new ng-twixt-app --create-application=false --directory=.
ng generate library ng-twixt
cd angular

ng generate component input-single-line --project=ng-twixt

ng build ng-twixt
```

## Build Library

```
cd angular/projects/ng-twixt
ng build ng-twixt
zip -r ng-twixt-dist.zip .
```