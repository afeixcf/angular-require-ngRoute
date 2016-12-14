define(['angular','text!module2/tpl.html'], function (angular, tpl) {
    return {
        controller: function ($scope, $http, $interval) {
            $scope.info = 'hahaha';
            //$scope.module1Path = 'index.html#/module1';
        },
        tpl: tpl
    }
});