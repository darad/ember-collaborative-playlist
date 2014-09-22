window.Cplist = Ember.Application.create();

Cplist.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://cplaylist.firebaseio.com")
});