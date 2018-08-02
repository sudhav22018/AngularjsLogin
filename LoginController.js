var app = angular.module("loginApp");

app.controller("LoginController",function($cope,$rootscope,$location,$stateParams,$state,LoginService){
    $rootscope.title ="Angular JS Login Example - coming from Login Controller";

    $scope.formSubmit = function(){
        if(LoginService.login($scope.username,$scope.password)){
            $rootscope.username = $scope.username;
            $scope.error ="";
            $scope.username="";
            $scope.password="";
            $state.transitionTo("home");

        }
        else{
            $scope.error ="Invalid username and password..!"
        }
    };
});