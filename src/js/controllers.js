/**
 * Created by dell on 2016/4/19.
 */
angular.module('appController',[])
    .controller('ModulesController',
        ['$scope','$location',function($scope,$location){
            $("td").height($("td").width());
            $("#table").delegate('td','click',function(){
                $scope.url = $(this).attr('id');
                $scope.$apply(function(){
                    $location.path('/modules/'+$scope.url);
                });
            });

        }]
    )
    .controller('LoginController',
        ['$scope','$http','$location',function($scope,$http,$location){
            $scope.verific = function(){
                console.log($scope.user.name);
                if($scope.user.name=="123@163.com"){
                    $location.path('/modules');
                }else{
                    $scope.validateTip = 'ERROR';
                }
            }
        }]
    )
    .controller('Test1Controller',
        ['$scope',function($scope){

        }])
    .controller('Test2Controller',
        ['$scope',function($scope){

        }])
    .controller('Test3Controller',
        ['$scope',function($scope){

        }])
    .controller('Test4Controller',
        ['$scope',function($scope){

        }]
    );