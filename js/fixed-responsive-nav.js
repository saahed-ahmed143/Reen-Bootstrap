$(window).on('scroll', function(){
  if ($(window).scrollTop()){
    $('nav').addClass('mainheader');
  }
  else 
  {
    $('nav').removeClass('mainheader');
  }
})