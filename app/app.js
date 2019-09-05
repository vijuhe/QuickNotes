'use strict';

import NotesService from './services/notes.service.js';

// Declare app level module which depends on views, and core components
angular.module('quickNotes', [
  'ngResource' // not needed now with hard-coded data
])

.factory('NotesService', function() {
  return new NotesService();
});
