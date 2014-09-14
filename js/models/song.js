Cplist.Song = DS.Model.extend({
  soundCloudId: DS.attr('number'),
  rank:         DS.attr('number')
});

Cplist.Song.FIXTURES = [
  {
    soundCloudId: 93280442,
    rank:         1,
  },
  {
    soundCloudId: 18985170,
    rank:         2,
  },
  {
    soundCloudId: 125206899,
    rank:         3,
  },
  {
    soundCloudId: 36507883,
    rank:         4,
  },
];