
var app = angular.module("oha.routes", ['ui.router', 'ngAnimate']);

/*
* Configurations for states for ui-router.
*
*/

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('list');

    $stateProvider
    .state('list', {
      url: '/list',
      views: {
        '' : {
          templateUrl: 'static/components/listings/listings_wrapper.html',
        },
        'table@list' : {
          templateUrl: 'static/components/listings/listings_table.html',
        },
      },
      })

    .state('visualizer', {
      url: '/visualizer',
      views: {
        '' : {
          templateUrl: 'static/components/visualizer/visualizer_wrapper.html',
        },
        'plot@visualizer' : {
          templateUrl: 'static/components/visualizer/visualizer_plot.html',
        },
      },
      })

    });
