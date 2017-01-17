$(document).ready(function() {
    var showCharity = function() {
        $('#charity-form').removeClass('hide');
        $('#donor-form').addClass('hide');
    };

    var showDonor = function() {
        $('#donor-form').removeClass('hide');
        $('#charity-form').addClass('hide');
    };

    var validateFields = function() {
      var $usernameVal = $('#username').val();
      var $passwordVal = $('#password').val();
      var $firstNameVal = $('#first-name').val();
      var $lastNameVal = $('#last-name').val();
      var $companyNameVal = $('#company-name').val();

      var isInvalidUser = _.isEmpty($usernameVal) || _.isEmpty($passwordVal);
      // var isInvalidDonor = _.isEmpty($firstNameVal) || _.isEmpty($lastNameVal);

      var isInvalidDonor;

      if ($('#options-radios2').is(':checked')){
        isInvalidDonor = _.isEmpty($firstNameVal) || _.isEmpty($lastNameVal);
      } else {
        isInvalidDonor = false;
      }

      if (isInvalidUser || isInvalidDonor) {
        console.log("Empty fields!")
      } else {
        console.log("Register user!")
        registerUser();
      }
    };

    var registerUser = function() {
      var $usernameVal = $('#username').val();
      var $passwordVal = $('#password').val();
      var $firstNameVal = $('#first-name').val();
      var $lastNameVal = $('#last-name').val();
      var $companyNameVal = $('#company-name').val()

        // create user
        var json = {
            "user": {
                "username": $usernameVal,
                "password": $passwordVal
            }
        };
        var settings = {
            url: '/users',
            method: 'post',
            dataType: 'json',
            data: json
        };

    // execute ajax post to create user
    $.ajax(settings).done(function(response) {

        // once the user is created - I want to create a donor or charity
        if ($('#options-radios2').is(':checked')) {
            // create donor
            var json = {
                "donor": {
                    "user_id": response.id,
                    "first_name": $firstNameVal,
                    "last_name": $lastNameVal,
                    "company_name": $companyNameVal
                }
            };
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

$('#options-radios1').on('click', showCharity); $('#options-radios2').on('click', showDonor); $('#register-button').on('click', validateFields);

});
