# Angular Gulp Seed

## Instructions

Fork and clone repo
`npm install`
`npm run build`
  - This will create the dist folder containing the app.js and styles.css for the index to use.

### Development

#### Client
- Run `npm run dev-web`
  - This will run the BrowserSync serving your index.html at http://localhost:3000/
  - The BrowserSync server is set to auto reload and build as you work on any of your js, css, or html files.
    - It will concat all .css files in the css folder into one bundled .css file names styles.css in the dist folder
    - It will concat all .js files in the app folder starting with any .module.js files before before moving onto .controller.js, .config.js, etc. they will be bundled into the app.js file inside of dist
  - The BrowserSync server is also set to proxy to the node server (http://localhost:8080/) for any api calls starting with /api
    - Example: 
    ```
    $http({
        method: 'POST',
        url: '/api/signup',
      })
```
 
#### Server
- Run `npm run dev-server`
  - This will run your node server using nodemon 
    - Nodemon allows your server to auto refresh on update

#### Recommended File Structure
  ```
  client/
    app/
      app.module.js
      app.config.js
      home/
          home.controller.js
          home.html
    styles/
      index.css
      home.css
    dist/
      app.js
      styles.css
  ```


#### Notes
- **You must use $inject for everything or else the build will fail!!**
  ```
  angular
    .module('app')
    .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

    function config ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {}
  ```
- The #! or hashbang has already been removed
- As stated above the BrowserSync uses the node server as a proxy for any api calls it is recommended to start any API routes with /api


### Production

- Run `npm build`
- The public/dist folder is git ignored so be cautious when pushing code to your host

