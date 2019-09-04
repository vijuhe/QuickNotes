'use strict';

// Declare app level module which depends on views, and core components
angular.module('quickNotes', [
  'ngRoute',
  'quickNotes.mainView'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
}]);
