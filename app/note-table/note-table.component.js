'use strict';

angular.module('quickNotes')
.component('noteTable', {
  templateUrl: 'note-table/note-table.template.html',
  bindings: {
    notes: '<'
}
});
