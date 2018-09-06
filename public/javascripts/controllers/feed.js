angular.module('if').controller('FeedController', function($scope, $http) {
  $http.get("/feed")
    .then(function(response) {
      $scope.items = response.data;
  });
});
