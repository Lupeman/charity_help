var CharityprofileView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    var html = Handlebars.templates.charityprofile(this.model.toJSON());
    this.$el.html(html);

    $('#profile').append(this.el);
  }

});
