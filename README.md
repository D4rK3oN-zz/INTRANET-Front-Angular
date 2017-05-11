# INTRANET-Front-Angular


### This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Requisitos antes de empezar a desarrollar
 * Instalar [NodeJS]( https://nodejs.org/en/ ) 
 * Instalar Bower ejecutando `npm install -g bower`.
 * Instalar Gulp ejecutando `npm install -g gulp`.
 * Instalar dependencias de NodeJS ejecutando `npm install`.
 * Instalar dependencias de bower ejecutando `bower install`.

### Running
Arrancar localmente ejecutando `npm run serve`
It uses BrowserSync that provides live reload which refresh the application in the browser with any changes produced on the source.   

### Testing

#### Unit testing

`npm run test` o  `npm run test:auto` para lanzar los test unitarios definidos con Jasmine (testing framework) y Karma (test Runner).
  
#### E2E testing
> Note: Es necesario tener instalado el JDK para lanzar el testing E2E
[download](http://www.oracle.com/technetwork/java/javase/downloads)

`npm run protractor`  para lanzar los test end to end con el framework protactor, el web driver de selenium integrado con Angular. 

### Build

`npm run` o `npm run build` compila y optimiza los fuentes en el directorio /dist listo para publicar en *prducción*. Además genera la documentación en la carpeta docs/api.  


#### Configuración de entorno

Están definidos dos entornos de ejecución distintos. `dev y prod`. Cada tarea de gulp permite añadir el perfil de ejecución.

```javascript
npm run serve --dev
npm run serve --pro
npm run serve:dist --dev
npm run serve:dist --pro
npm run build --dev
npm run build --pro
```
En el fichero `conf/app.config.json`, se pueden definir parámetros de cofiguración dependientes del entorno.

## Lista de tareas de gulp

* `npm run` or `npm run build` construye una versión optimizada en `/dist`
* `npm run serve` para levantar el servidor sincronizado con el código fuente.
* `npm run serve:dist` para levantar el servidor con la versión lista para producción.
* `npm run serve:apidoc` para lanzar el servidor web apuntando a la documentación.
* `npm run test` para lanzar los tests unitarios. 		
* `npm run css_test` para lanzar los tests de css. 									
