$('.item').on('click',function(e){
    $(this).parents().find('.wrapper').addClass('wrapper-active');
    $(this).addClass('active');
    
    
});

$('.close').on('click',function(e){
    console.log(e);
    e.stopPropagation();
    $(this).parents().find('.item').removeClass('active');
    $(this).parents().find('.wrapper').removeClass('wrapper-active');
});