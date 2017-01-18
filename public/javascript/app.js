var view = new WishView({
  collection: wishes
});

var profileview = new CharityprofileView({
  model: charityprofile
});

$('#list').append(view.render().el);
