$(document).ready(function(){

  var showCharityWithCause = function(){
    var cause = event.target.innerHTML;
    var settings = {
      url: '/charities.json',
      method: 'get'
      // dataType: 'json',
      // data: {cause: cause}
    }

  $.ajax(settings).done(function(response) {
    console.log(response);
    var charities = response
  });

  }


  $('.dropdown-menu').on('click', showCharityWithCause)







  // var select = event.target;
  // debugger
  // var charities = Charities.all
  // _.each(charities, function(charity){
  //   console.log(charity);
  //   console.log(charity_name);
  // })


})
