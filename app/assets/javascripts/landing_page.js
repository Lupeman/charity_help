$(document).ready(function(){
  var scrollToTop = function(){
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

  $('.scrollUp').on('click', scrollToTop);

  $(window).scroll(function(){
      $(".jumbo-text").css("opacity", 1 - $(window).scrollTop() / 250);
    });

  var showContactInfo = function(){
    $('#contact-info').removeClass('hidden');
    $('#enquire-now').addClass('hidden');
  }

  var showEnquireNow = function(){
    $('#contact-info').addClass('hidden');
    $('#enquire-now').removeClass('hidden');
  }

  $('#contact-info-tab').on('click', showContactInfo);
  $('#enquire-now-tab').on('click', showEnquireNow);

})

// Open overlay
function openOverlay() {

  var settings = {
      url: '/charities',
      method: 'get',
      dataType: 'json'
  };

  $.ajax(settings).done(function(response) {
    $('#overlay-content').empty();
    var firstFifteenResults = _.first(response, 15);
    firstFifteenResults.forEach(function(charity){
    var toAppend = "<li><a href='http://" + charity["charity_website"] + "'>" + charity["charity_name"] + "<br><span class='type'>" + charity["cause"] + "</span></a><li>"
    $("#overlay-content").append(toAppend);
    })
    document.getElementById("charity-overlay").style.height = "100%";
  });
};

// Close overlay
function closeOverlay() {
    document.getElementById("charity-overlay").style.height = "0%";
}
