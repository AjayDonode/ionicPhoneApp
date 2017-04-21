angular.module('starter.controllers')
  .controller('CirclesCtrl', function ($scope, circleService) {

    $scope.data = {
      grid: false
    };

    $scope.$on('loginEvent', function (event, data) {
      console.log("From login event "+data); // 'Data to send'

        loadCircles();

    });

    function loadCircles() {
       circleService.list().success(function(data) {
        console.log("Loaded " + data);
        $scope.circles  = data;
      }).error(function(status, data) {
        console.log(status);
        console.log(data);
      });
    }

})
