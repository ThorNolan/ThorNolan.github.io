// Initiate parallax, scrollspy, and sidenav functionality
$(document).ready(function () {
  $('.scrollspy').scrollSpy();
  $('.collapsible').collapsible();
  $('.button-collapse').sideNav({
    menuWidth: 180,
    closeOnClick: true,
    edge: 'left'
  });

  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 64
    }, 500);
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  });

  resizeParallax();

  /* resize the parallax image on page resize */
	$(window).on('resize', function(){
		resizeParallax();
	});

	function resizeParallax() {
		var div_id = 'p1';
		var img_w = 1000; /* the width of your image, in pixels */
		var img_h = 864; /* the height of your image, in pixels */
		resize_parallax(div_id,img_w,img_h);
	}

	/* this resizes the parallax image down to an appropriate size for the viewport */
	function resizeParallax(div_id,img_w,img_h) {
		var div = $('#' + div_id);
		var divwidth = div.width();
		if (divwidth < 769) { var pct = (img_h/img_w) * 105; } /* show full image, plus a little padding, if on static mobile view */
		else { var pct = 60; } /* this is the HEIGHT as percentage of the current div WIDTH. you can change it to show more (or less) of your image */
		var newheight = Math.round(divwidth * (pct/100));
		newheight = newheight  + 'px';
		div.height(newheight);
	}

  // preloader will fade out once page is loaded
  $(window).on("load",function(){
    $(".loader-container").fadeOut("slow");
  });

  // this adds the click to toggle class to my floating action button on smaller screen sizes where the hover effect can't implement properly
  $(window).resize(function () {
    if ($(window).width() <= 640) $(".actionButton").addClass("click-to-toggle");
  });

  // reveal ordering with ScrollReveal library
  $(window).on("load",function(){
    ScrollReveal().reveal('#firstName', {
      delay: 100,
      scale: 0.85,
      origin: 'left',
      easing: 'ease-in'
    });

    ScrollReveal().reveal('#lastName', { 
      delay: 500, 
      scale: 0.85,
      origin: 'right',
      easing: 'ease-in'
    });

    ScrollReveal().reveal('.resume-container', { 
      delay: 350, 
      easing: 'ease-in'
    });

    ScrollReveal().reveal('.card', {  
      easing: 'ease-in',
      scale: 0.9,
      interval: 175
    });

    ScrollReveal().reveal('.back-to-top', {  
      easing: 'ease-in',
      scale: 0.85,
      delay: 150,
      reset: true
    });
  });

  // Copy email address to clipboard by clicking on floating action button email icon	
  let clipboard = new ClipboardJS('#email');

  // store my email button and tooltip text in variables
  let anchorElement = $('#email');
  let tooltipText = $(('.material-tooltip span'));

  // triggers on successful copy to clipboard and alters text within the tooltip to indicate success
  clipboard.on('success', function (e) {

    tooltipText.html('Copied to your clipboard ✅');

    // Reset tooltip message after a timeout
    anchorElement.mouseleave(function () {

      setTimeout(function () {
        tooltipText.html('Copy my email to your clipboard!');
      }, 3000);
    });

    e.clearSelection();
  });

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 290,
        "density": {
          "enable": true,
          "value_area": 4008.530152163807
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 4
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.4734885849793636,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.7192807192807193,
          "opacity_min": 0.5674325674325674,
          "sync": true
        }
      },
      "size": {
        "value": 2.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 7.192807192807193,
          "size_min": 0.7992007992007992,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 64.13648243462092,
        "color": "#fff",
        "opacity": 0.33933348590187723,
        "width": 1.4204657549380908
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 2446.3576890600452,
          "rotateY": 236.7442924896818
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true,
        "onresize": {
          "enable": true,
          "density_auto": true,
          "density_area": 400 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
        }
      },
      "modes": {
        "grab": {
          "distance": 263.73626373626377,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 121.81158184520176,
          "size": 27.972027972027973,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 0,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  // Enable parallax scene for landing area
  var scene = $('#scene').get(0);
  var parallaxInstance = new Parallax(scene);
  
});
