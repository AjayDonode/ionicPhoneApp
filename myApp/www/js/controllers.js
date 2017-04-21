angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal,$ionicPopup, $timeout, loginService) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};
    $scope.isLogIn = false;
    $scope.user = {};


    //$scope.registerFrm.username = "Enter Username here ";


    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.loginModal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.loginModal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.loginModal.show();
    };

    $ionicModal.fromTemplateUrl('templates/register.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.registerModal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeRegister = function () {
      $scope.registerModal.hide();
    };

    // Open the login modal
    $scope.showRegister = function () {
      $scope.registerModal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);
      loginService.loginUser($scope.loginData).then(function (data) {
        $scope.user = data.user;

        $scope.$broadcast('loginEvent', {
          isLogin: true // send whatever you want
        });

        $timeout(function () {
          $scope.closeLogin();
        }, 1000);
      }).catch(function () {
        showAlert();
        $scope.error = 'unable to get the user';
      });
      $scope.loginData = {};
      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system

    };

    $scope.switchRegister = function () {
      $scope.closeLogin();
      $scope.isLogIn = true;
      console.log('Doing Register', $scope.user);
      $scope.showRegister();
    };

    $scope.doRegister = function () {
      loginService.registerUser($scope.user)
        .success(function(result) {
          $scope.user = result.user;
          console.log("Result is "+$scope.result);
          $scope.closeRegister();
      });
    };

    var showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Error !',
        template: 'Incorrect Username or Password'
      });

      alertPopup.then(function(res) {
        console.log('Handle clear ');
      });
    }

    $timeout(function(){
      console.log("Log "+$scope.isLogIn);
      if(!$scope.isLogIn){
        $scope.loginModal.show();
      }
    },500);
  });

