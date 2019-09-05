$(function() {
  
  // Initiate collapsible nav menu for medium and smaller screens
  $('.collapsible').collapsible();
  $('.button-collapse').sideNav({
    menuWidth: 180,
    closeOnClick: true,
    edge: 'left'
  });

  // Reveal ordering with ScrollReveal library
  $(window).on("load",function(){

    // On initial page load, home section will be set to active by default
    $('.top-nav.active').removeClass('active');
    $("#default").addClass('active');
    
    // preloader will fade out once page is loaded
    $(".loader-container").fadeOut("slow");
    
    ScrollReveal().reveal('.resume-container', { 
      delay: 250, 
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

  // Grab all navigation elements with the class of "scroll", contextualized for performance
  const scrollLink = $('#links, #mobile-nav').find('.scroll'); 
  
  // Smooth scrolling offset by height of top nav element minus a few pixels
  scrollLink.click(function(e) {
    e.preventDefault();

    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 63
    }, 500);
  });

  // Assign active class to nav links based on scroll position
  $(window).scroll(function() {
		let scrollDistance = $(window).scrollTop();

	$('.page-content').each(function(i) {
		if ($(this).position().top - 350 <= scrollDistance) {
			$('.top-nav.active').removeClass('active');
			$('.top-nav').eq(i).addClass('active');
		}});
  }).scroll();

  // this adds the click to toggle class to my floating action button on smaller screen sizes where the hover effect can't implement properly
  $(window).resize(function () {
    if ($(window).width() <= 640) $("#floater").addClass("click-to-toggle");
  });

  // Copy email address to clipboard by clicking on floating action button email icon	
  const clipboard = new ClipboardJS('#email');

  // store my email button and tooltip text in variables
  const anchorElement = $('#email');
  const tooltipText = $('span:contains(Copy)');

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
