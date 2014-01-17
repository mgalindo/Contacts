'use strict';


var controllersModule = angular.module('contactApp.controllers', []);
var servicesModule = angular.module('contactApp.services', []);

// Declare app level module which depends on filters, and services
angular.module('contactApp', [
  'ngRoute',
  'contactApp.filters',
  'contactApp.services',
  'contactApp.directives',
  'contactApp.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/list.html',
                controller: 'ListController'
            })
            .when('/edit', {
                templateUrl: 'partials/edit.html',
                controller: 'EditController'
            })
            .when('/edit/:id', {
                templateUrl: 'partials/edit.html',
                controller: 'EditController'
            })
            ;

}]).run(function ($rootScope, ContactService) {
        ContactService.retrieveAll();
    });
