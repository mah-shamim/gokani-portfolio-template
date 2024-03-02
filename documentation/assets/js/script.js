$( document ).ready(function() { 
  $(window).scroll(function() { 
    if ($(window).scrollTop() > 100) {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
    }
  }); 

  // sidebar 
  $('.dock-header').on( 'click', '.menu-action', function() {
    $('.cdx-sidebar').toggleClass("active");     
    $('.cdx-layer').toggleClass('active');
  }); 
  $('.cdx-sidebar .menu-item a , .cdx-layer').click(function(){
    $('.cdx-sidebar').removeClass("active");
    $('.cdx-layer').removeClass('active');
  })

});


$(document).on("click", function(event){
  //***Action Menu
  var $trigger = $(".menu-action,.cdx-sidebar");
  if($trigger !== event.target && !$trigger.has(event.target).length){        
    $(".cdx-sidebar").removeClass('active');
    $('.cdx-layer').removeClass("active");
  }          
});  



// sidebar menu active
$('.menu-item a').bind('click', function(e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $('html, body').stop().animate({
        scrollTop: $(target).offset().top
    });
    return false;
});
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();   
      $('section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.menu-item a.active').removeClass('active');
            $('.menu-item a').eq(i).addClass('active');
        }
    });
}).scroll();