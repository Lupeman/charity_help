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
    var json = {"user":{"username": $('#username').val(), "password_digest": $('#password').val()}}
    var settings = {
      url: '/users',
      method: 'post',
      dataType: 'json',
      data: json
    };

    // execute ajax post to create user
    $.ajax(settings).done(function(response){

      // once the user is created - I want to create a donor or charity
      var json = {"donor":{"user_id":response.id, "first_name": "Joe", "last_name": "Blogs", "company_name": "Joe's Burgers"}}
      var settings = {
        url: '/donors',
        method: 'post',
        dataType: 'json',
        data: json
      };

      // execute ajax to create donor
      $.ajax(settings);
    });
  }

  $('#options-radios1').on('click', showCharity);
  $('#options-radios2').on('click', showDonor);
  $('#register-button').on('click', registerUser);
});
