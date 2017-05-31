// Animation code will go here
$( document ).ready(function() {
  var $toggle = 0;
  $( "#main" ).click(function() {
    if ($toggle==0) {
      $( ".first" ).animate({
        opacity:"1"
      }, { duration: 500, queue: false });
        // Animate class second
      $(".second").animate({
        opacity:"1"
      }, { duration: 1000, queue: false });
      $toggle = 1;
    }else{
      $( "li:not(#main)" ).animate({
        opacity:"0"
      }, 500, function() {
        // Animation complete.
        $toggle = 0;
      });
    };

  });
});
