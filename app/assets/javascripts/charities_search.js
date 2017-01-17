var charityDetails = [];
var storeCharityWithCause = [];
var storeCharityWithLocation = [];
var charitySearchResults = [];

$(document).ready(function(){

var findCharityWithCause = function(e){
  var cause = e.target.innerHTML;
  charityDetails.push(cause);
  var settings = {
    url: '/charities.json',
    method: 'get'
  }

  $.ajax(settings).done(function(response) {
    debugger
    var charities = response;
    _.each(charities, function(charity){
      if(cause == charity.cause){
        storeCharityWithCause.push(charity)
      }
    });
    if(storeCharityWithCause.length == 0){
      $('.error-message').toggleClass('error')
    }
  });
}


var findCharityWithLocation = function(e){
  var location = e.target.innerHTML;
    charityDetails.push(location);
    var settings = {
      url: '/charities.json',
      method: 'get'
    }

  $.ajax(settings).done(function(response) {
    var charities = response;
    _.each(charities, function(charity){
      if(location == charity.location){
        storeCharityWithLocation.push(charity)
      }
    });
    if(storeCharityWithLocation.length = 0){
      $('.error-message').toggleClass('error')
    }
  });
}


$('#cause').on('click', findCharityWithCause);
$('#location').on('click', findCharityWithLocation);
});

// if(charity.cause == charityDetails[0] && charity.location == charityDetails[1]){ charitySearchResults.push(charity)
// }else{
//   $('.charities-results').innerHTML("We could not find a charity to match that criteria. Please search again!");
// }



  // var select = event.target;
  // debugger
  // var charities = Charities.all
  // _.each(charities, function(charity){
  //   console.log(charity);
  //   console.log(charity_name);
  // })
