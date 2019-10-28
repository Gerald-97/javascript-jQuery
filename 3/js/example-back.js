(function(){
    
    var snack = {
        name: 'Cakes & Creams',
        bunRate: 200,
        discount: 50,
        offerPrice: function(){
            var offerRate = this.bunRate * ((100 - this.discount) * 100);
            return offerRate;
        }
    };

    var snackName, bunRate, specialRate;
    snackName = document.getElementById("hotelName");
    bunRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    snackName.textContent = snack.name;
    bunRate.textContent = '$' + snack.bunRate;
    specialRate.textContent = '$' + snack.offerPrice();

    var expMsg, today, elEnds;
    function offerExpires(today){
        var dayFromToday, day, date, month, year, dayNames, monthNames;

        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
        dayFromToday = new Date('November 1, 2019 15:45:00');
        

    }
})