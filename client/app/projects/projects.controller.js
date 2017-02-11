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
        Angular: 'devicon-angularjs-plain-wordmark colored',
        React: 'devicon-react-original-wordmark colored',
        Node: 'devicon-nodejs-plain-wordmark colored',
        MySQL: 'devicon-mysql-plain-wordmark colored',
        MongoDB: 'devicon-mongodb-plain-wordmark colored'
      };
    }

})();