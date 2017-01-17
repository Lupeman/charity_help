$( document ).ready(function() {
  var showCharity = function() {
    $('#charity-form').removeClass('hide');
    $('#donor-form').addClass('hide');
  };

  var showDonor = function() {
    $('#donor-form').removeClass('hide');
    $('#charity-form').addClass('hide');
  };

  var registerUser = function() {

    // create user
    var json = {"user":{"username": $('#username').val(), "password": $('#password').val()}};
    var settings = {
      url: '/users',
      method: 'post',
      dataType: 'json',
      data: json
    };

    // execute ajax post to create user
    $.ajax(settings).done(function(response){

      // once the user is created - I want to create a donor or charity
      if($('#options-radios2').is(':checked')) {
        // create donor
        var json = {"donor":{"user_id":response.id, "first_name": $('#first-name').val(), "last_name": $('#last-name').val(), "company_name": $('#company-name').val()}};
        var settings = {
          url: '/donors',
          method: 'post',
          dataType: 'json',
          data: json
        };

        // execute ajax to create donor
        $.ajax(settings).done(function() {
          $('#success-msg').removeClass('hide');
        });

    } else {

      // create charity
      var formData = new FormData();
      formData.append("charity[user_id]", response.id);
      formData.append("charity[charity_name]", $('#charity-name').val());
      formData.append("charity[cause]", $('#cause').val());
      formData.append("charity[description]", $('#description').val());
      formData.append("charity[location]", $('#location').val());
      formData.append("charity[logo]", $('#logo')[0].files[0]);
      formData.append("charity[url]", $('#url').val());
      formData.append("charity[shipping_address]", $('#shipping-addr').val());
      // {"charity":{"user_id":response.id, "charity_name": $('#charity-name').val(),
      // "cause": $('#cause').val(), "description": $('#description').val(), "location": $('#location').val(),
      // "logo": $('#logo')[0].files[0], "url": $('#url').val(), "shipping_address": $('#shipping-addr').val()}};
      var settings = {
        url: '/charities',
        method: 'post',
        data: formData,
        contentType: false,
        processData: false
      };
      // execute ajax to create charity
      $.ajax(settings).done(function() {
        $('#success-msg').removeClass('hide');
      });
    }
  });
};

  $('#options-radios1').on('click', showCharity);
  $('#options-radios2').on('click', showDonor);
  $('#register-button').on('click', registerUser);

});
