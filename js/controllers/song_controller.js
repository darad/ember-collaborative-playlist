Cplist.SongController = Ember.ObjectController.extend({
  actions: {
    editSong: function() {
      this.set('isEditing', true);
    }
  },
  
  isEditing: false
});