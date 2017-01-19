var WishView = Backbone.View.extend({

  render: function() {
    this.$el.html('');
    this.collection.forEach(function(wish) {
      var view = new WishItemView({ model: wish});
      this.$el.append(view.render().el);
    }, this);
    return this;
  },

  initialize: function() {
    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'destroy', this.render);
  }

});
