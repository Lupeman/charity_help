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
      var $charityNameVal = $('#charity-name').val();
      var $causeVal = $('#cause').val();
      var $descriptionVal = $('#description').val();
      var $locationVal = $('#location').val();
      var $shippingAddrVal = $('#shipping-addr').val();

      // check if the user fields are empty
      var isInvalidUser = _.isEmpty($usernameVal) || _.isEmpty($passwordVal);

      // check if the donor fields are empty
      var isInvalidDonor;

      if ($('#donor-radio').is(':checked')) {
        isInvalidDonor = _.isEmpty($firstNameVal) || _.isEmpty($lastNameVal);
      } else {
        isInvalidDonor = false;
      }

      // check if the charity fields are empty
      var isInvalidCharity;

      if ($('#charity-radio').is(':checked')) {
        isInvalidCharity = _.isEmpty($charityNameVal) || _.isEmpty($causeVal) || _.isEmpty($descriptionVal) || _.isEmpty($locationVal) || _.isEmpty($shippingAddrVal);
      } else {
        isInvalidCharity = false;
      }


      if (isInvalidUser || isInvalidDonor || isInvalidCharity) {
        $('#error-msg').removeClass('hide');
      } else {
        $('#error-msg').addClass('hide');
        registerUser();
      }
    };

    var registerUser = function() {

        // create user
        var json = {
            "user": {
                "username": $('#username').val(),
                "password": $('#password').val()
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
        if ($('#donor-radio').is(':checked')) {
            // create donor
            var json = {
                "donor": {
                    "user_id": response.id,
                    "first_name": $('#first-name').val(),
                    "last_name": $('#last-name').val(),
                    "company_name": $('#company-name').val()
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
            // formData.append("charity[logo]", $('#logo')[0].files[0]);
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
            $.ajax(settings)
            .done(function(response) {
                $('#success-msg').removeClass('hide');
                window.location = '/charities/' + response.id
            })
        }
    });
};

$('#charity-radio').on('click', showCharity); $('#donor-radio').on('click', showDonor); $('#register-button').on('click', validateFields);

});
