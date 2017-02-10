(function () {
  'use strict';

  angular
    .module('app')
    .controller('AboutController', AboutController);

    AboutController.$inject = ['$timeout'];

    function AboutController ($timeout) {
      var vm = this;
      vm.skills = {};
      vm.skills._one = window.skills.one;
      vm.skills._two = window.skills.two;
      $timeout(() => progressBars(vm.skills));


      function progressBars (skills) {
        skills._one.forEach(skill => {
          var progress = new ProgressBar.Line('#' + skill.id, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 2500,
            color: skill.color,
            trailColor: '#8e8e8e',
            trailWidth: 1,
          });
          progress.animate(skill.percentage * 0.01);
        });
        skills._two.forEach(skill => {
          var progress = new ProgressBar.Line('#' + skill.id, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 2500,
            color: skill.color,
            trailColor: '#8e8e8e',
            trailWidth: 1,
          });
          progress.animate(skill.percentage * 0.01);
        });
      }
    }

})();