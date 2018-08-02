var app = angular.module("loginApp");

app.controller("HomeController",function($scope,$rootscope,$state,$stateparams,LoginService){
    $scope.user = $rootscope.username;
});