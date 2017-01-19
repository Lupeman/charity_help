var CharityprofileView = Backbone.View.extend({

  events: {
  // event on class as per handlebars template
  'focusout .charity_name': 'updateModel',
  'focusout .url': 'updateModel',
  'focusout .description': 'updateModel',
  'focusout .shipping_address': 'updateModel'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var html = Handlebars.templates.charityprofile(this.model.toJSON());
    this.$el.html(html);

    $('#profile').append(this.el);
  },

  updateModel: function(e) {
    this.model.updateProps(e.currentTarget);
  }

});
