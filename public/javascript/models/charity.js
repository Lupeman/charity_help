var Charity = Backbone.Model.extend({

  updateProps: function(element) {
    this.set(element.className, element.textContent);
    this.save();
  }
});
