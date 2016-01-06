var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';

  $scope.posts = [
      {title:'post 1', upvote: 5},
      {title:'post 2', upvote: 3},
      {title:'post 3', upvote: 0},
      {title:'post 4', upvote: 10},
      {title:'post 5', upvote: 8}
    ];

  $scope.addPost = function(){
    $scope.posts.push({title: 'A new post!', upvotes: 0});
  };

}]);