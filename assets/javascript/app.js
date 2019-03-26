// Initiate parallax, scrollspy, sidenav, and tooltip functionality
$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.tooltipped').tooltip();

    //$('.sidenav').sidenav();
    $('.button-collapse').sideNav({
        menuWidth: 175,
        closeOnClick: true,
        edge: 'right'
    });
    $('input#input_text, textarea#textarea2').characterCounter();
    // this adds the click to toggle class to my floating action button on smaller screen sizes where the hover effect doesn't implement properly
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

	clipboard.on('success', function(e) {
        var anchorElement = $('#email');
	    anchorElement.attr('data-tooltip', 'Copied to your clipboard ✅');
        anchorElement.addClass('success');
        anchorElement.tooltip();

	    // Reset after a timeout
	    anchorElement.mouseleave(function() {

		    setTimeout( function(){
			    anchorElement.attr('data-tooltip', 'Click to copy my email address to your clipboard!');
                anchorElement.removeClass('success');
                anchorElement.tooltip();
			}, 300);
		});

	    e.clearSelection();
	});
});


     