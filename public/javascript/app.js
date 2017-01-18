var view = new WishView({
    collection: wishes
});

var profileview = new CharityprofileView({
    model: charityprofile
});

$('#list').append(view.render().el);


function addWish() {
    var wishlist = {
        charity_id: $('#charity_id').val(),
        item_name: $('#item_name').val(),
        item_url: $('#item_url').val(),
        estimated_price: $('#estimated_price').val()
    };    
    wishes.create({ wishlist });
}


$('#addwishlistbutton').on('click', addWish);
