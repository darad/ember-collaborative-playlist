Cplist.Song = DS.Model.extend({
  artist:      DS.attr('string'),
  title:      DS.attr('string')
});

Cplist.Song.FIXTURES = [
  {
    id: 1,
    artist: "U2",
    title:  "Vertigo"
  },
  {
    id: 2,
    artist: "Miles Davis",
    title:  "Blue In Green"
  }
];