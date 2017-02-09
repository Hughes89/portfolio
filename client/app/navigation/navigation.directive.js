(function () {
  'use strict';

  angular
    .module('app')
    .directive('navigation', Navigation);

    function Navigation () {
      return {
        restrict: 'AE',
        replace: true,
        scope: true,
        templateUrl: 'app/navigation/navigation.html'
      };
    }

})();