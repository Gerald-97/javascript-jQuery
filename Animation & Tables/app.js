$(document).ready(function(){

    // The hidden secret hides here
    $('#hidden').hide();

    // The greeting function
    $('#greet').click(function(){
        var person = $('input').val();
        $("#greeting").text("Greetings " + person + "!!!, Welcome to this empty site!");
    })

    // Click to reveal the hidden secret
    $(window).click(function(){
        $('#hidden').toggle(2000, 'swing');
    })

    // This section is ust to input the star into the sample movies on the list
    var starRate = `<img src="icon/star.svg" width="15px" height="15px" />`;
    var star3 = starRate+" "+starRate+" "+starRate;
    var star5 = starRate+" "+starRate+" "+starRate+" "+starRate;
    $(".movie2").html(starRate);
    $(".movie1").html(star3);
    $(".movie3").html(star5);

    // Hide the sort button
    $(".sort").hide();

    // The click function and the real magic
    $("#rate").click(
        function movieRating(){
            // First assign the movie names
            var movieName = $("#movieName").val();

            // Creating the star rating icons
            var starHTML = "";
            var starIndex = Number($('option:selected').val());
            for (let i=0; i<starIndex; i++){
                starHTML += 
                `
                    <img src="icon/star.svg" width="15px" height="15px" /> 
                `
            };

            // Now, creating the row to append to the table body
            var newRow = "<tr><td>"+ movieName +"</td><td>"+ starHTML +"</td><td>"+
            "<button class='deleteRow'>Delete</button>"+"</td></tr>";

            // Now include the newly created row into the tbody of the HTML table 
            $(".reviewTable tbody").append(newRow);

            // And then clear themovie title input 
            $("#movieName").val("");

            // Activate the delete button
            $(".deleteRow").click(function(){
                $(this).parents("tr").remove();
            });

            // Creating the sort function
            $(".sort").click(function(){
                var tableRows = $("tbody");
            })
        },
    );
   
    
})