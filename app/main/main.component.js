'use strict';

angular.module('quickNotes')
.component('main', {
  templateUrl: 'main/main.template.html',
  controller: ['NoteService', function(noteService) {
    this.$onInit = function() {
      this.notes = noteService.getNotes();
    };
  }]
});
