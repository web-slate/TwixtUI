# Angular UI Components.

```
ng new ng-twixt-app --create-application=false --directory=.
ng generate library ng-twixt
cd angular

ng generate component input-single-line --project=ng-twixt
ng generate component twixt-alert --project=ng-twixt --prefix=twixt
ng generate component twixt-button --project=ng-twixt --prefix=twixt
ng generate component twixt-checkbox --project=ng-twixt --prefix=twixt
ng generate component twixt-dialog --project=ng-twixt --prefix=twixt
ng generate component twixt-header --project=ng-twixt --prefix=twixt

ng build ng-twixt
```

## Build Library

```
cd angular/projects/ng-twixt
ng build ng-twixt
zip -r ng-twixt-dist.zip .
```