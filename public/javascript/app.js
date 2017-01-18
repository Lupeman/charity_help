var view = new WishView({
  collection: wishes
});


$('#list').append(view.render().el);
