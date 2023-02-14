var current = prompt("Please enter the number of money");
var dollar = parseInt(current);
y=(current-dollar)*100;

var quarters =parseInt(y/25);
var dimes=Math.floor((y%25)/10);
var nickels =Math.floor((((y % 25) % 10) / 5));

var cents =Math.floor((((y % 25) % 10) % 5));

alert(current + " is comprised of:" + dollar + " dollrs(s)"
 + quarters + " quarter(s)"  + dimes + " dimes"+ nickels + " nickel(s) "+cents+"cent(s)" );