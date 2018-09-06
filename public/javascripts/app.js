var routerApp = angular.module('if', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('welcome');

    $stateProvider

        .state('welcome', {
          url: "/welcome",
          templateUrl: "views/welcome.html"
        })

        .state('home', {
          url: "/home",
          templateUrl: "views/search.html",
          controller: "FeedController"
        })

        .state('clients', {
          url: '/clients?k',
          templateUrl: 'views/result.html'
        })

        .state('newclient', {
          url: '/new-client',
          templateUrl: 'views/newclient.html'
        })

        .state('newproduct', {
          url: '/new-product',
          templateUrl: 'views/newproduct.html'
        })

        .state('products', {
          url: '/products?k',
          templateUrl: 'views/result.html'
        })

        .state('sales', {
          url: '/sales?k',
          templateUrl: 'views/result.html'
        })

        .state('newsale', {
          url: '/new-sale',
          templateUrl: 'views/newsale.html'
        })

        .state('error', {
          url: '/error',
          templateUrl: '404.html'
        })

});
