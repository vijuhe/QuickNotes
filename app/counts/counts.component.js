'use strict';

angular.module('quickNotes')
.component('counts', {
  templateUrl: 'counts/counts.template.html',
  bindings: {
      notes: '<'
  },
  
  controller: function($scope) {
    this.$onInit = function() {
        $scope.notes = this.notes;
    }

    $scope.getNoteCount = function(status) {
        return this.notes.filter(function(item) { return item.status === status; }).length;
    }
  }
});
