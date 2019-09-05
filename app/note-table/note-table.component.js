'use strict';

angular.module('quickNotes')
.component('noteTable', {
  templateUrl: 'note-table/note-table.template.html',
  bindings: {
    notes: '<'
  },

  controller: function($scope) {
    this.$onInit = function() {
      $scope.selectAll = false;
      $scope.noteSelections = new Array(this.notes.length);
      $scope.notes = this.notes;
    }

    $scope.toggleSelectAll = function() {
      this.noteSelections.fill(this.selectAll);
    }
  }
});
