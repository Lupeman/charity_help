var charityDetails = [];
var storeCharityWithCause = [];
// var storeCharityWithLocation = [];
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
    var charities = response;
    _.each(charities, function(charity){
      if(cause == charity.cause){
        storeCharityWithCause.push(charity)
      }
    });
    if(storeCharityWithCause.length == 0){
      $('#error-message').toggleClass('error')
    }
  });
}


var findCharityWithLocation = function(e){
  var location = e.target.innerHTML;
  charityDetails.push(location);
    // var settings = {
    //   url: '/charities.json',
    //   method: 'get'
    // }
  //
  // $.ajax(settings).done(function(response) {
  //   var charities = response;
  //   _.each(charities, function(charity){
  //     if(location == charity.location){
  //       storeCharityWithLocation.push(charity)
  //     }
  //   });
  //   if(storeCharityWithLocation.length == 0){
  //     $('#error-message').toggleClass('error')
  //   }
  // });
}

var showResults = function(){
  var target = $('.results');
  $('html, body').animate({
            scrollTop: target.offset().top - $(".navbar-default").height()
          }, 500);
}

var findCharityMatch = function(){
  var frag = $(document.createDocumentFragment());
  _.each(storeCharityWithCause, function(charity){
    if(charity.location == charityDetails[1]){
      var html = Handlebars.templates.charity({
        id: charity.id,
        name: charity.charity_name,
        description: charity.description,
        url: charity.logo.url
      })
      frag.append(html);
    }
  });
  $('#charities-results').append(frag);
}

  $('.charity_search_btn').on('click', findCharityMatch);
  $('.charity_search_btn').on('click', showResults);


  $('#cause_search').closest('div').find('ul').on('click', findCharityWithCause);
  $('#location_search').closest('div').find('ul').on('click', findCharityWithLocation);



  $(".cause_search li").click(function(){

        $("#cause_search").text($(this).text());
        $("#cause_search").val($(this).text());

     });

  $(".location_search li").click(function(){

        $("#location_search").text($(this).text());
        $("#location_search").val($(this).text());

      });

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
