(function () {
  'use strict';

  angular
    .module('app')
    .controller('ProjectsController', ProjectsController);

    ProjectsController.$inject = [];

    function ProjectsController () {
      var vm = this;
      vm.projects = window.projects;
      vm.techIcons = {
        Angular: 'devicon-angularjs-plain-wordmark',
        React: 'devicon-react-original-wordmark',
        Node: 'devicon-nodejs-plain-wordmark',
        MySQL: 'devicon-mysql-plain-wordmark',
        MongoDB: 'devicon-mongodb-plain-wordmark'
      };
    }

})();