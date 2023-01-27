# Todo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Understanding Entry point

Specifically there is no entry point in an angular application.However, while the application first loads/runs it starts from main.ts[Where it bootstraps the first declaration mentioned in the ngModule of app.module.ts] >> app.Module.ts[From here,it finds the class and its appropriate selector from the following file]  >>  app.component.ts[from here,it finds the selector and associated templateurl's and css and goes to the following file]  >>  index.html[the selector name from the app.component.ts file is found here and associated content is loaded as a html page]  >>  app.component.html [Here,you can specify as many components as needed and also style the html in the css file mentioned in the @component decorator] 

What parts of the application will be compiled is being determined by your main.ts file, and mostly the line

platformBrowserDynamic().bootstrapModule(AppModule)

which defines the AppModule to be the "entry point" of your application.
