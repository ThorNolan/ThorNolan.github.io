$(function() {
  // Initiate parallax, scrollspy, and sidenav functionality
  $('.scrollspy').scrollSpy();
  $('.collapsible').collapsible();
  $('.button-collapse').sideNav({
    menuWidth: 180,
    closeOnClick: true,
    edge: 'left'
  });

  const scrollLink = $('.scroll');
  
  // Smooth scrolling offset by height of top nav element
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 64
    }, 500);
  });

	function resizeParallax() {
		var div_id = 'divider-img';
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
  
  resizeParallax();

  /* resize the parallax image on page resize */
	$(window).on('resize', function(){
		resizeParallax();
	});

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
        "value": 420,
        "density": {
          "enable": true,
          "value_area": 2550
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1998,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 13,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.75,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 1499,
          "rotateY": 1499
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 4.2,
          "duration": 1.25,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 105,
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
