//Use Strict Mode
(function($) {
  "use strict";
var checkClickMenu = 0;

//======= Run on Window Load ============
$(window).on('load',function(){ 

  //Owl Carousel
  // >> Team
  $("#about-team").owlCarousel({
   	navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,      
    responsiveRefreshRate : 200,
  	responsiveBaseWidth: window,
  	items : 4,
  	itemsMobile : [479,1],
  	//autoPlay: 6000,
  	stopOnHover: true,
  	pagination: true,
  	//singleItem: true,
  	navigationText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"]     
  });

  //WAYPOINTS
  $('#main-intro').waypoint(function(direction) {
      if (direction === 'down') {
        $('#header').addClass( 'header-stick');  
        $('#back-to-top').removeClass('back-to-top-hide');

      }
      else {
        $('#header').removeClass( 'header-stick');
         $('#back-to-top').addClass('back-to-top-hide');  
         $('.hd-list-menu a').blur();
      }     
    },
    {
     offset: '-20px'
  });

  

  $('#section-features').waypoint(function(direction) {
      if(checkClickMenu == 0){
        $("a[href='#section-features']").focus();
      }
    },
    {
     offset: '0px'
  });
  $('#section-products').waypoint(function(direction) {
      if(checkClickMenu == 0){
        $("a[href='#section-products']").focus();
      }
    },
    {
     offset: '0px'
  });
  $('#section-team').waypoint(function(direction) {
      if(checkClickMenu == 0){
        $("a[href='#section-team']").focus();
      }
    },
    {
     offset: '0px'
  });
  $('#section-contact').waypoint(function(direction) {
      if(checkClickMenu == 0){
        $("a[href='#section-contact']").focus();
      }
    },
    {
     offset: '0px'
  });


  //Viewport
  var windowHeight = $(window).height();

  function adjustViewport() {
    $('.viewport').css('min-height', windowHeight);
    return false;
  }
  adjustViewport();  
  
  //Runs on window Resize
  $(window).resize(function() {
    windowHeight = $(window).height();
    adjustViewport();
  });

});



//======= Run on Document Ready ============
$(document).ready(function(){

  //Submenus
  $('.hd-list-menu li ul').hide();
  $('.hd-list-menu li').on('mouseenter', function(e){
  	$(this).find('> ul').fadeIn(200);
    return false;
  });
  $('.hd-list-menu li').on('mouseleave', function(e){
  	$(this).find('> ul').fadeOut(200);
    return false;
  });

  //Tabs
  var tabs = '.tabs';
  var tabsButtons = $('.tabs .tabs-buttons a');

  tabsButtons.on('click', function(e)  {
      var currentAttrValue = $(this).attr('href');
      // Show/Hide Tabs
      $('.tabs ' + currentAttrValue).fadeIn(600).siblings().hide();
      // Change/remove current tab to active
      $(this).parent('li').addClass('active').siblings().removeClass('active');
      e.preventDefault();
      return false;
  });

  $('.tab').hide();
  $('#tab1').show();


  //Maps iframe Overlay
  var map = $('#map');
  map.on('click', function () {
      $('#map iframe').css("pointer-events", "auto");
      return false;
  });

  map.on('mouseleave', function () {
      $('#map iframe').css("pointer-events", "none");
      return false;
  });

  //Back to Top Btn
  $('.back-to-top').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 700);
    return false;
  });

  //Anchor Smooth Scroll
   $('.hd-list-menu a[href]').on('click', function () {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          checkClickMenu = 1;
          $('html,body').animate({
            scrollTop: target.offset().top - 30
          }, 1000, function(){
            checkClickMenu = 0;
          });
          return false;
        }
      }
    });


});

//End - Use Strict mode
})(jQuery);