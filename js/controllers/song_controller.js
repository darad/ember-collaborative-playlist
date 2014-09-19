Cplist.SongController = Ember.ObjectController.extend({
  actions: {
    editSong: function() {
      this.set('isEditing', true);
    },
    acceptChanges: function() {
      this.set('isEditing', false);
      
      if (Ember.isEmpty(this.get('model.artist')) || Ember.isEmpty(this.get('model.title'))) {
        this.send('removeSong');
      } else {
        var model = this.get('model');
        var fullName = this.get('fullName')
        
        // parse the artist name and the title of the song
        var artist = fullName.split(" - ")[0]
        var title  = fullName.split(" - ")[1]
        
        model.set('artist', artist);
        model.set('title', title);
        model.save();
      }                        
    },
  
    removeSong: function() {
      var song = this.get('model');
      song.deleteRecord();
      song.save();
    }
  },
  
  isEditing: false
});