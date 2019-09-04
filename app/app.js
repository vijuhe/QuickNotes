'use strict';

import NotesService from './services/notes.service.js';

// Declare app level module which depends on views, and core components
angular.module('quickNotes', [
  'ngRoute',
  'ngResource' // not needed now with hard-coded data
])

// .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//   $routeProvider.when('/', {
//     templateUrl: 'mainView/mainView.html',
//     controller: 'MainController'
//   });

// }])

.factory('NotesService', function() {
  return new NotesService();
});
