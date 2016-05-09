/**
 * Created by dell on 2016/4/18.
 */
angular.module('myApp',
    [
        'ngRoute',
        'ngAnimate',
        'appController'
    ])
    .config(
        ['$routeProvider',function($routeProvider){
            $routeProvider.
                when('/', {
                    controller: 'LoginController',
                    templateUrl: 'modules/login/login.html'
                }).
                when('/modules',{
                    controller: 'ModulesController',
                    templateUrl: 'modules/modules.html'
                }).
                when('/modules/module_1', {
                    controller: 'Test1Controller',
                    templateUrl: 'modules/module_1/module_1.html'
                }).
                when('/modules/module_2', {
                    controller: 'Test2Controller',
                    templateUrl: 'modules/module_2/module_2.html'
                }).
                when('/modules/module_3', {
                    controller: 'Test3Controller',
                    templateUrl: 'modules/module_3/module_3.html'
                }).
                when('/modules/module_4', {
                    controller: 'Test4Controller',
                    templateUrl: 'modules/module_4/module_4.html'
                }).
                when('/modules/module_5', {
                    controller: 'Test4Controller',
                    templateUrl: 'modules/module_5/module_5.html'
                }).
                when('/modules/module_6', {
                    controller: 'Test4Controller',
                    templateUrl: 'modules/module_6/module_6.html'
                }).
                when('/modules/module_7', {
                    controller: 'Test4Controller',
                    templateUrl: 'modules/module_7/module_7.html'
                }).
                when('/modules/module_8', {
                    controller: 'Test4Controller',
                    templateUrl: 'modules/module_8/module_8.html'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]
    );