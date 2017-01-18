var WishView = Backbone.View.extend({
  tagName: 'div',
  className: 'wishes-container',

  render: function() {
    this.collection.forEach(function(wish) {
      var view = new WishItemView({ model: wish});
      this.$el.append(view.render().el);
    }, this);
    return this;
  }
});
