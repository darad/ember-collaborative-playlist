Cplist.CplistController = Ember.ArrayController.extend({
  actions: {
    addSong:  function() {
      // Get the song's artist and title by the "New Song" text field
      var song = this.get('newSong');
      if (!song) { return false; }
      if (!song.trim()) { return ; }
      
      // parse the artist name and the title of the song
      var artist = song.split(" - ")[0]
      var title  = song.split(" - ")[1]
      
      // Create the new Song model
      var song = this.store.createRecord('song', {
        artist: artist,
        title:  title
      });
      
      // Clear the "New Song" text field
      this.set('newSong', '');
      
      // Save the new model
      song.save();
    }
  },
  
  total:  function() {
    return this.get('length');
  }.property('@each'),
  
  inflection: function() {
    var total = this.get('total');
    return total === 1 ? 'song' : 'songs';
  }.property('total')
});