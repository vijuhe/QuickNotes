'use strict';

angular.module('quickNotes')
.component('main', {
  templateUrl: 'main/main.template.html',
  controller: ['NotesService', function(notesService) {
    this.$onInit = function() {
      this.notes = notesService.getNotes();
    };
  }]
});
