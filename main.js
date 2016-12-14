require.config({
    paths: {
        'angular': 'lib/angular.min',
        'angular-route': 'lib/angular-route.min',
        'text': 'lib/text'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'ngRouteModule'
        }
    }
});

require(['angular', 'route'], function (angular) {
    angular.bootstrap(document, ['webapp']);
    //console.log(app);
});