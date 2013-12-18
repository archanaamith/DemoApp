/**
 * Created by Archana on 12/17/13.
 */
var bulletinApp=angular.module('bulletinApp',['ngResource']);

bulletinApp.controller('PostsCtrl',['$scope','Post',function($scope,Post){
    $scope.heading='Bulletin Board';
    $scope.posts=Post.query();

}]);

bulletinApp.factory('Post',['$resource', function($resource){
    return $resource('/posts' );
}]);


