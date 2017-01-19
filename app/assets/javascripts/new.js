$(document).ready(function(){

  $(".cause li").click(function(){

        $("#cause:first-child").text($(this).text());
        $("#cause:first-child").val($(this).text());

     });

  $(".location li").click(function(){

        $("#location:first-child").text($(this).text());
        $("#location:first-child").val($(this).text());

      });

})
