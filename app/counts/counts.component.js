'use strict';

angular.module('quickNotes')
.component('counts', {
  templateUrl: 'counts/counts.template.html',
  bindings: {
      notes: '<'
  }
});
