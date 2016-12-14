define(['angular', 'require', 'angular-route'], function (angular, require) {
    var app = angular.module('webapp', ['ngRoute']);

    app.run(['$rootScope',function($rootScope){
        $rootScope.module1Path = 'index.html#/module1';
        $rootScope.module2Path = 'index.html#/module2';
    }]);

    app.config(['$routeProvider', '$controllerProvider', function ($routeProvider, $controllerProvider) {
        $routeProvider
            .when('/module1',{
                template: '',
                controller: 'module1Controller',
                resolve: {
                    keyName: function ($route, $q) {
                        var deferred = $q.defer();
                        require(['module1/module1.js'],function (module) {
                            $controllerProvider.register('module1Controller', module.controller);
                            $route.current.template = module.tpl;
                            deferred.resolve();
                        });

                        return deferred.promise;
                    }
                }
            })
            .when('/module2', {
                template: '',
                controller: 'module2Controller',
                resolve: {
                    keyName: function ($route, $q) {
                        var deferred = $q.defer();
                        require(['module2/module2.js'],function (module) {
                            $controllerProvider.register('module2Controller', module.controller);
                            $route.current.template = module.tpl;
                            deferred.resolve();
                        });

                        return deferred.promise;
                    }
                }
            })
            .otherwise({
                redirectTo: '/module2'
            });
    }]);

    return app;
});