// Initiate parallax, scrollspy, and sidenav functionality
$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav({
        menuWidth: 180,
        closeOnClick: true,
        edge: 'left'
    });
    $('input#input_text, textarea#textarea2').characterCounter();

    // this adds the click to toggle class to my floating action button on smaller screen sizes where the hover effect can't implement properly
    $( window ).resize(function() {
        if($(window).width() <= 640) $(".actionButton").addClass("click-to-toggle");
    });

    // navbar opacity feature
    // $(window).scroll( function() {
    //     // apply css classes based on scroll positioning
    //     if ($(".topNav").offset().top > 100) {
    //       $(".topNav").addClass("navbar-scrolled");
    //     } else {
    //       $(".topNav").removeClass("navbar-scrolled");
    //     }
    // });

    // Copy email address to clipboard by clicking on floating action button email icon	
    var clipboard = new ClipboardJS('#email');

    // store my email button and tooltip text in variables
    var anchorElement = $('#email');
    var tooltipText = $('.material-tooltip span')

    // triggers on successful copy to clipboard and alters text within the tooltip to indicate success
	clipboard.on('success', function(e) {

        tooltipText.html('Copied to your clipboard ✅')

	    // Reset tooltip message after a timeout
	    anchorElement.mouseleave(function() {

		    setTimeout(function(){
                tooltipText.html('Copy my email to your clipboard!');
			}, 3000);
		});

	    e.clearSelection();
	});
});


     