Cplist.Router.map(function() {
  this.resource('cplist', { path: '/'});
});


Cplist.CplistRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('song');
  }
});