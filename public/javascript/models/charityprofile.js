var Charityprofile = Backbone.Model.extend({
  urlRoot: '/charities',

  updateProps: function(element) {
    this.set(element.id, element.textContent);
    this.save();
  }

});
