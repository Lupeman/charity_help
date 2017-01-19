var view = new WishView({
    collection: wishes
});

var profileview = new CharityprofileView({
    model: charityprofile
});

Handlebars.registerHelper( "isProfileEditable", function (block){
    return profileEditableString;
});

$('#list-container').html(view.render().el);


function addWish() {
    var wishlist = {
        charity_id: $('#charity_id').val(),
        item_name: $('#item_name').val(),
        item_url: $('#item_url').val(),
        estimated_price: $('#estimated_price').val()
    };
    wishes.create({ wishlist });
}



$('#removefromwishlistbutton').click(function() {
    var inputVal = $("input[name='wish']:checked").val();
    var selectedWish = wishes.get(inputVal);
    selectedWish.destroy();
});


$('#addwishlistbutton').on('click', addWish);

function hideWishlist() {
  if (profileEditable === false) {
    $('#wishlist-add-table').addClass("hidden");
  }
}

hideWishlist();

function hidePurchasing() {
  if (donorView === false) {
    $('#removefromwishlistbutton').addClass('hidden');
    $('input:radio').hide();
  }
}

hidePurchasing();
