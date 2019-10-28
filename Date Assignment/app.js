var today = new Date();
var future = new Date('Apr 16, 2020 15:45:00');
var difference = future - today;
console.log(difference)
// Therefore, everyday the value of difference would reduce
difference = Math.floor(difference/(1000*60*60*24));
console.log(difference);
document.write('Its '+ difference +' days and counting until we will see John again')