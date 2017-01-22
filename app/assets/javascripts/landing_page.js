
$(document).ready(function(){

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

});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - $(".navbar-default").height()
        }, 1000);
        return false;
      }
    }
  });
});






// Open overlay
function openOverlay() {
  var settings = {
      url: '/charities',
      method: 'get',
      dataType: 'json'
  }

  $.ajax(settings).done(function(response) {
    $('#overlay-content').empty();
    var firstFifteenResults = _.first(response, 15);
    firstFifteenResults.forEach(function(charity){
      var toAppend = "<li><a href='http://" + charity["charity_website"] + "'>" + charity["charity_name"] + "<br><span class='type'>" + charity["cause"] + "</span></a><li>"
      $("#overlay-content").append(toAppend);
    })
    $(".overlay").css('height', '100%');
  });
};

// Close overlay
function closeOverlay() {
    $(".overlay").css('height', '0');
}
