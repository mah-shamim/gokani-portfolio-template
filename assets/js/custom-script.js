$( document ).ready(function() {
  
  $(window).scroll(function() { 
    if ($(window).scrollTop() > 100) {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
    }
  });
  $('header').on( 'click', '.menu-action', function() {   
    $('.menu-list').toggleClass('open')
  });
  if($(window).width() < 992){   
    $('.submenu-list').slideUp();       
    $('header ').on( 'click', '.menu-item', function() {     
      $(this).parent('.menu-list').toggleClass('open')
    });   
  }

  


  // slider js
  $('.slide-5').slick({
      infinite: false,
      speed: 350,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      responsive: [
        {
          breakpoint:992,
          settings: {
            slidesToShow:4,
          }
        },
        {
          breakpoint:768,
          settings: {
            slidesToShow: 3,
          }
        },{
          breakpoint:420,
          settings: {
            slidesToShow: 2,
          }
        }     
      ]
    });
  $('.slide-3').slick({
      infinite: true,
      speed: 350,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      responsive: [
        {
          breakpoint:992,
          settings: {
            slidesToShow:2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }     
      ]
    });
   $('.slide-2').slick({
      infinite: true,
      speed: 350,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      responsive: [
        {
          breakpoint:992,
          settings: {
            slidesToShow:2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }     
      ]
    });

  $('.slide-1').slick({
      infinite: true,
      speed: 350,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,  
      fade:true,
    });


  // Our Portfolio  
  
  $('.tab-list').on( 'click', 'li', function() {   
    $(this).addClass('active')
    $(this).siblings().removeClass('active')   
  });


// counter
$(window).on("load resize",function() {
    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 4);
    }
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
});



//*** Back To Top
$(window).scroll(function() {
  if ($(window).scrollTop() > 450) {
    $('.taptoscroll-top').addClass('show');
  } else {
    $('.taptoscroll-top').removeClass('show');
  } 
});
$(document).ready(function(){
  $(document).on("click",'.taptoscroll-top',function(){    
    $('html, body').animate({scrollTop:0}, '450');
  });
});


// wow js
wow = new WOW({
  mobile: false,
});
wow.init();   



});


$(document).on("click", function(event){
  //***Action Menu
  var $trigger = $(".menu-action, .menu-list");
  if($trigger !== event.target && !$trigger.has(event.target).length){        
    $(".menu-list").removeClass("open");
  }          
}); 


function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.marginBottom = "15px";
  error_message.style.padding = "10px";
  
  var text;
  if(name.length <2){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(phone.length > 15){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 5){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 50){
    text = "Please Enter More Than 100 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Your Form Is Successfully Submitted!");
  return true;
}