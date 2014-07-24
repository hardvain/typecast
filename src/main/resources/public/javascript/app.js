var app = angular.module('typecast',['ngRoute'])

app.config(function($routeProvider){
    $routeProvider.
        when("/",{
            templateUrl : "views/dashboard.html"
        }).
        when("/aboutme",{
            templateUrl : "views/aboutme.html"
        }).
        otherwise({
            redirectTo : "/"
        })
});

app.controller('AppController', function($scope, $location){
    if($location.$$path == "/"){
        $scope.pageStyle="index";
    } else{
        $scope.pageStyle ="segment"
    }
})