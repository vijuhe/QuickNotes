'use strict';

import NoteService from './services/note.service.js';

// Declare app level module which depends on views, and core components
angular.module('quickNotes', [
  'ui.bootstrap',
  'ngResource' // not needed now with hard-coded data
])

.factory('NoteService', function() {
  return new NoteService();
});
