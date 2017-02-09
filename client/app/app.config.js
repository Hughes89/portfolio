(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

    function config ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
      $stateProvider
        .state('about', {
          url: '/',
          templateUrl: 'app/about/about.html',
          controller: 'AboutController',
          controllerAs: 'about'
        })
        .state('projects', {
          url: '/projects',
          templateUrl: 'app/projects/projects.html',
          controller: 'ProjectsController',
          controllerAs: 'projects'
        });
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true); //Remove the '#' from URL.
    }

  })();