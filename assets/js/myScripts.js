$(window).scroll(function() {

if ($(this).scrollTop() > 100){  
    $('#header').addClass("navbar-default-white");
    $('#header').removeClass("navbar-default-blue");
  }
  else{
    $('#header').addClass("navbar-default-blue");
    $('#header').removeClass("navbar-default-white");
  }
});