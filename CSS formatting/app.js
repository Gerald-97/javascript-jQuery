$(document).ready(function(){
    $('#color').on('click', function(){
        $(".secondItem").siblings().css('color', 'mediumpurple');
        $(".secondItem").next().css('color', 'blue');
        $(".ref").nextAll().css('background-color', 'pink');
    });
    $('button').on('click', function(){
        let sampleData = {name: 'Gerald', age: 22};
        $("#text").load("sample.txt", sampleData);
    })
})
// https://jsonplaceholder.typicode.com/posts