// Initiate parallax, scrollspy, and sidenav functionality
$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
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
});
     