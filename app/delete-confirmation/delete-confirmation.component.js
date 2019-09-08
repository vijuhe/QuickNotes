'use strict';

angular.module('quickNotes')
.component('deleteConfirmation', {
  templateUrl: 'delete-confirmation/delete-confirmation.template.html',
  bindings: {
    notes: '<'
  },

  controller: ['$scope', 'NoteService', function($scope, noteService) {
    this.$onInit = function() {
      $scope.notes = this.notes;
    }

    $scope.areNotesSelected = function() {
      return this.notes.some(function(item) { return item.selected });
    }

    $scope.clearSelections = function() {
      for(let i = 0; i < this.notes.length; i++) {
        this.notes[i].selected = false;
      }
    }

    $scope.removeSelectedNotes = function() {
      noteService.deleteNotes(this.getSelectedNoteIds())
      this.clearSelections();
    }

    $scope.getSelectedNoteIds = function() {
      return this.notes.filter(function(item) { return item.selected }).map(function(item) { return item.id });
    }
  }]
});
