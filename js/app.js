/**
 * Created by Syed-Sabir on 5/28/2015.
 */

var scatchApp  = angular.module('scatchApp',['ngRoute']);

    scatchApp.config([$routeProvider,function($routeProvider){
        $routeProvider

            .when('/class',{
                templateUrl:'Quiz7cls.html'
            })
            .when('/eng',{
                templateUrl:'QuizEng.html'
            })
    }])