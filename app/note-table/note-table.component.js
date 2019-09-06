'use strict';

angular.module('quickNotes')
.component('noteTable', {
  templateUrl: 'note-table/note-table.template.html',
  bindings: {
    notes: '<'
  },

  controller: function($scope, $uibModal) {
    this.$onInit = function() {
      $scope.selectAll = false;
      $scope.noteSelections = new Array(this.notes.length);
      $scope.notes = this.notes;
      $scope.sort = {
        column: "id",
        descending: false
      };
    }

    $scope.toggleSelectAll = function() {
      this.noteSelections.fill(this.selectAll);
    }

    $scope.changeSorting = function(column) {
      if (this.sort.column === column) {
        this.sort.descending = !this.sort.descending;
      }
      else {
        this.sort.column = column;
        this.sort.descending = false;
      }
    }

    $scope.openAddNoteDialog = function() {
      let addDialog = $uibModal.open({
        templateUrl: "note-table/add-note-dialog.html",
        controller: "AddNoteController"
      });
    }
  }
})

.controller("AddNoteController", ['$scope', '$uibModalInstance', 'NoteService', function($scope, $uibModalInstance, noteService) {
  $scope.saveNote = function() {
    if ($scope.newNoteForm.$valid) {
      noteService.addNote({
        title: $scope.title,
        content: $scope.content
      });
      $uibModalInstance.close("Ok");
    }
  }

  $scope.cancel = function() {
    $uibModalInstance.dismiss();
  }
}]);
