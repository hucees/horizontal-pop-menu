// Animation code will go here
$( document ).ready(function() {
  // Function expands the menu items.
  function expand(){
    // Expand Li Animate
    $(".b, .c").animate({
      top:"400px"
    },{duration:1000, queue: false });
    $( "li:not(#main)" ).animate({
      opacity:"1"
    }, {duration: 1000, queue: false});
    $('li').toggleClass('open');
    return this;
  };

  // Function collapses the menu items.
  function collapse(){
    // Collapse Li Animate
      $(".b, .c").animate({
        top:"-400pxpx"
      },{duration:300, queue: false });
      return this;
  };

  var $toggle = 0; //This variable will be used to tell what state the menu is in after multiple clicks.

  $( "#main" ).click(function() { //Function occurs on main menu button click.
    if ($toggle==0) {
      expand(); // Expand Li Animate
      $toggle = 1;
    }else{
      $('li').toggleClass('open');
      $( "li:not(#main)" ).animate({
        opacity:"0"
      }, {duration: 1000, queue: false});
      $toggle = 0;
    };
  });
});
