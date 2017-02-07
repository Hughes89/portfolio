(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

    function config ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/home/home.html',
          controller: 'HomeController',
          controllerAs: 'home'
        });
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true); //Remove the '#' from URL.
    }

  })();