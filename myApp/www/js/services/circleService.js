angular.module('starter.services')

  .service('circleService', function ($q,$http) {
    return {
      list: function (circleObject) {
        var serviceurl = "http://localhost:3000/circleservice/circle";
        return $http.get(serviceurl, circleObject);
      },

      registerUser: function (userObject) {
        var serviceurl = "http://localhost:3000/auth/signup";
        return $http.post(serviceurl, userObject);
      }
    }
  })
