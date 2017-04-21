angular.module('starter.services', [])

  .service('loginService', function ($q,$http) {
    return {
      loginUser: function (userObject) {
        var serviceurl = "http://localhost:3000/auth/login";
        return $http.post(serviceurl, userObject);
      },

      registerUser: function (userObject) {
        var serviceurl = "http://localhost:3000/auth/signup";
        return $http.post(serviceurl, userObject);
      }
    }
  })
