(
    function(){
        var app = angular.module("loginApp",["ui.router"]);

        app.run(function($rootScope, $location, $state, LoginService){
            console.clear();
            console.log("Running from app.js run method..!")
            alert("am in run");
            alert(LoginService.isAuthenticated());
            if(!LoginService.isAuthenticated()){
                $state.transitionTo("login");
            }
        });

        app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
            alert("am in config");
            var loginState = 
            {
                name:"login",
                url:"/login",
                templateurl: "login.html",
                controller: "LoginController"
            };
        var homeState =
        {name:"home",
            url:"/home",
            templateurl:"home.html",
            controller:"HomeController"
        };
    $stateProvider.state(loginState);
    $stateProvider.state(homeState);

    $urlRouterProvider.otherwise("/login");

        }]);

   
    })();