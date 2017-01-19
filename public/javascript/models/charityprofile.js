var Charityprofile = Backbone.Model.extend({
  urlRoot: '/charities',

  updateProps: function(element) {
    this.set(element.className, element.textContent);
    this.save();
  }

});
