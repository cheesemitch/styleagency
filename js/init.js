(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.slider').slider({full_width: true, height: 500});
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.materialboxed').materialbox();
    $('.tooltipped').tooltip({delay: 50});
      
    //Smooth Scroll
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href')).offset().top
        },800)});
      
  }); // end of document ready
})(jQuery); // end of jQuery name space