var WishItemView = Backbone.View.extend({

  initialize: function() {
    // this.listenTo(this.model, 'change:name', this.render);
  },
  render: function() {
    var html = Handlebars.templates.wish(this.model.toJSON());
    this.$el.html(html);

    return this;
  }

});
