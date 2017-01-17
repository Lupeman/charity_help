var Charity = Backbone.Model.extend({
  updateProps: funciton(element) {
    this.set(element.className, element.textContent);
    this.save();
  }
})
