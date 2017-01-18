var Wishes = Backbone.Collection.extend({
  model: Wish,
  url: window.location.pathname + '/wishlists'
});
