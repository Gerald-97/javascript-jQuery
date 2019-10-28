$(document).ready(function(){
    // $('button').click(function(){
    //     $('span:last').hide("fast", function(){
    //         $(this).prev().hide("slow", arguments.callee);
    //     });
    // });
    $('.hide').click(function(){
        $('h1').toggle(2000, 'swing', function(){
            $('.hide').text("Show Content");
        });
    });
});
