(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('.carousel').carousel();

  // $('#deployedbtn').click(function() {
  //       $(this);
  //     });

  $("#deployedBtn").on('click', function(){
    // var selectedImage =  $('.carousel-item.active')
    // console.log($('.carousel-item.active').data('deployed-url'))
    location.href = $('.carousel-item.active').data('deployed-url')
    
    
});

$("#gitHubBtn").on('click', function(){

  // console.log($('.carousel-item.active').data('deployed-url'))
  location.href = $('.carousel-item.active').data('github-url')
  
});

});


