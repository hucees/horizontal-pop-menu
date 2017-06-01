// Animation code will go here
$( document ).ready(function() {
  var $toggle = 0;
  $( "#main" ).click(function() {
    if ($toggle==0) {
      $(".b").animate({
        top:"400px"
      },{duration:300, queue: false });
      $(".b").animate({
        left:"33.33%"
      },{duration:300, queue: false });
      $(".c").animate({
        top:"400px"
      },{duration:300, queue: false });
      $(".c").animate({
        left:"66.66%"
      },{duration:300, queue: false });
      $( ".first" ).animate({
        opacity:"1"
      }, { duration: 500, queue: false });
        // Animate class second
      $(".second").animate({
        opacity:"1"
      }, { duration: 1000, queue: false });
        $('li').toggleClass('open');
      $toggle = 1;
    }else{
      $('li').toggleClass('open');
      $( "li:not(#main)" ).animate({
        opacity:"0"
      }, 500, function() {
        // Animation complete.
        $toggle = 0;
      });
    };

  });
});
