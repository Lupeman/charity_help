$(document).ready(function() {

    function addEntryToWishlist() {
        var requestData = {
            "wishlist": {
                charity_id: $('#charity_id').val(),
                item_name: $('#item_name').val(),
                item_url: $('#item_url').val(),
                estimated_price: $('#estimated_price').val()
            }
        };
        var settings = {
            url: window.location.pathname + '/wishlists',
            method: 'post',
            data: requestData,
            dataType: 'json'
        };
        $.ajax(settings).done(function(response) {
        });
    }

    $('#addwishlistbutton').on('click', addEntryToWishlist);

});
