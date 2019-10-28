$(document).ready(function(){
    $('.accordions > p').hide();
    $('.accordions > h1').on('click', function(){
        $(this).next('.accordions > p').toggle();
            // .next('.accordions > p')
            // .not(':animated')
            // .slideToggle();
    })
})