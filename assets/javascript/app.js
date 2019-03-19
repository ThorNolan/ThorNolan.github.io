// Initiate parallax and scrollspy functionality
$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('input#input_text, textarea#textarea2').characterCounter();
    // this adds the click to toggle class to my floating action button on smaller screen sizes where the hover effect doesn't implement properly
    $( window ).resize(function() {
        if($(window).width() <= 640) $(".actionButton").addClass("click-to-toggle");
    });
});
     