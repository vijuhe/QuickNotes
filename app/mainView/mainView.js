'use strict';

angular.module('quickNotes.mainView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'mainView/mainView.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', ['NotesService', function(NotesService) {
  this.notes = NotesService.getNotes();
}]);