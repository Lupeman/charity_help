$(document).ready(function(){

// var $animation_elements = $('.main-container');
// var $window = $(window);
//
// $window.on('scroll', check_if_in_view);
//
// $window.trigger('scroll');
//
// function check_if_in_view() {
//   var window_height = $window.height();
//   var window_top_position = $window.scrollTop();
//   var window_bottom_position = (window_top_position + window_height);
//
//   $.each($animation_elements, function() {
//     var $element = $(this);
//     var element_height = $element.outerHeight();
//     var element_top_position = $element.offset().top;
//     var element_bottom_position = (element_top_position + element_height);
//
//     //check to see if this current container is within viewport
//     if ((element_bottom_position >= window_top_position) &&
//         (element_top_position <= window_bottom_position)) {
//       $element.addClass('in-view');
//     } else {
//       $element.removeClass('in-view');
//     }
//   });
// }

  $('.scrollUp').on('click', scrollToTop);

  var scrollToTop = function(){
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }
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
