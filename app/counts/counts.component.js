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
        $scope.completed = this.getLength(this.notes, 'Completed');
        $scope.notCompleted = this.getLength(this.notes, 'Not completed');
    }

    this.getLength = function(array, status) {
        return array.filter(function(item) { return item.status === status; }).length;
    }
  }
});
