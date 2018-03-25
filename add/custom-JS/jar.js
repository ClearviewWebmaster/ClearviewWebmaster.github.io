(function($) {
    "use strict"; // Start of use strict

    // Closes the sidebar menu
    $("#menu-close,.sidebar-nav>li>a").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    //#to-top button appears after scrolling
	$(window).scroll(function() {
    if ($(this).scrollTop() >= 1000) {        
        $('#return-to-top').fadeIn(700);    
    } else {
        $('#return-to-top').fadeOut(700);   
    }
	});
	$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
	});
	})
	//map
	(jQuery);
	var onMapMouseleaveHandler = function(event) {
    var that = $(this);
    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
	}
var onMapClickHandler = function(event) {
        var that = $(this);
        // Disable the click handler until the user leaves the map area
        that.off('click', onMapClickHandler);
        // Enable scrolling zoom
        that.find('iframe').css("pointer-events", "auto");
        // Handle the mouse leave event
        that.on('mouseleave', onMapMouseleaveHandler);
    }
    // Enable map zooming with mouse scroll when the user clicks the map
	$('.map').on('click', onMapClickHandler);
//Header
$(document).scroll(function() {
  var st = $(this).scrollTop();
  $("#header").css({
    "background-position-y": (-st/20)
  })
  $("#headerc").css({
    "top": (-st/5),
    "bottom": (st/5)
  })
});

//animated scrolling
$(document).ready(function() {
	var animation_elements = $(".slide");
	//check to see if any animation containers are currently in view
	function check_if_in_view() {
		var window_height = $(window).height();
		var window_top_position = $(window).scrollTop();
		var window_bottom_position = window_top_position + window_height;
		//iterate through elements to see if its in view
		$.each(animation_elements, function() {
			var element = $(this);
			var element_height = $(element).outerHeight();
			var element_top_position = $(element).offset().top;
			var element_bottom_position = element_top_position + element_height;
			//check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
			if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
				element.addClass("slide--in-view");
			}
		});
	}
 //on resize or scroll, detect elements in view
	$(window).on("scroll resize", function() {
		check_if_in_view();
	});
	//trigger our scroll event on initial load
	$(window).trigger("scroll");
}); 

function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text(".");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1500);
}

$(document).ready(function(){
  // Now to start autoTyping just call the autoType function with the 
  // class of outer div
  // The second paramter is the speed between each letter is typed.   
  autoType(".type-js",150);
});