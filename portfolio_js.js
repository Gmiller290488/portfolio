$(window).on('scroll', function() {
    $('.navdiv').each(function() {
    if($(window).scrollTop() >= ($(this).position().top)){
       var id = $(this).attr('id');
       $('#mainNav a').removeClass('active');
       $('#mainNav a[href="#'+id+'"]').addClass('active');
       }
   });
});
