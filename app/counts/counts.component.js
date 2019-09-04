'use strict';

angular.module('quickNotes')
.component('counts', {
  templateUrl: 'counts/counts.template.html',
  bindings: {
      notes: '<'
  },
  
  controller: function($scope) {
    this.$onInit = function() {
        $scope.total = this.notes.length;
        $scope.completed = this.getNoteCount('Completed');
        $scope.notCompleted = this.getNoteCount('Not completed');
    }

    this.getNoteCount = function(status) {
        return this.notes.filter(function(item) { return item.status === status; }).length;
    }
  }
});
