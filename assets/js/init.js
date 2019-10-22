(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('.carousel').carousel({
    indicators: true
  });

  // $('#deployedbtn').click(function() {
  //       $(this);
  //     });

  $("#deployedBtn").on('click', function(){
    // var selectedImage =  $('.carousel-item.active')
    // console.log($('.carousel-item.active').data('deployed-url'))
    window.open($('.carousel-item.active').data('deployed-url'),'_blank')
    
    
});

$("#gitHubBtn").on('click', function(){

  // console.log($('.carousel-item.active').data('deployed-url'))
  window.open($('.carousel-item.active').data('github-url'), '_blank')
  
});

});

// $(document).ready(function(){
//   $('.sidenav').sidenav();
// });


