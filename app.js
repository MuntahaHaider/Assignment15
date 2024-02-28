
// chap 4 

document.write("<h1><strong><center>Assignment 15</center></strong></h1><hr>")
document.write("<h3>Chap 04 </h3>")
// Q1
var num1 = 10 , num2 = "Jawan Pak" , num3 = "Pakistan" ; 


// Q2
// 5 legal variable names.
// var myName = "Muntaha"
// var my_name = "Muntaha"
// var my12name = "Muntaha"
// var my$name = "Muntaha"
// var myname123 = "Muntaha"
// 5 illegal variable names.
// var 123myvariable = "no word"
// var  my-variable = "no word"
// var my variable = 6
// var my.variable  = 6
// var my!variable = 10


// Q3
document.write("<h1> “Rules for naming JS variables” </h1>")
var one = " letters"
var two = "numbers"
var three = "dollar signs"
var four = "underscores"
var ses = "sensitive"
var key = "keyword"
document.write(" <h2> Variable names can only contain" + "<i><u>" + one + " " + two + " " + three +  "</i></u>" + " " + "and " +  "<i><u>" + four +  "</i></u>"  + "<br>" + "Variables must begin with a " +  "<i><u>" + three + " " + four + " " + one  + "</i></u>"+ "<br>" + "Variable names are case " +  "<i><u>" +  ses + "</i></u>" + "<br>" + "Variable names should not be JS " + "<i><u>" + key + "</i></u>" +  "</h2> <br> <hr>" )





                           // chap 5

document.write("<h3>Chap 05 </h3>")
// Q1 and Q2
var num = 3 ;
var final = num + 5 ;
var minFinal = num - 5 ;
var mulFinal = num * 5 ;
var divfinal = num / 5 ;
var modfinal = num % 5 ;

document.write(" <h2> The sum of  " + num + " " + "and 5 is " + "<i><u>" + final + "</i></u>"  + " <br> The subtraction of " + num + " " + "and 5 is " + "<i><u>" +  minFinal + "</i></u>"  +  " <br> The multiplication of " + num + "and 5 is "  + "<i><u>" +   mulFinal + "</i></u>"   +  " <br> The division of " + num + " " + "and 5 is " + "<i><u>" + divfinal  + "</i></u>"  +  " <br> The modulus of " + num + " and 5 is "  + "<i><u>" +   modfinal  + "</i></u>"  +    "</h2>")


// Q3
var num10 ;
document.write(" <h2> Value after variable declaration is : " + num10   + "</h2>" )
num10 = 5 ;
document.write("<h2> Initial value: " + num10 + "</h2>")
numFinal = ++num10 ;
document.write( " <h2> Value after Increment is : " + numFinal + "</h2>")
numFinal = numFinal + 7 ;
document.write( "<h2> Value after addition is : " + numFinal + "</h2>")
numFinal = --numFinal
document.write("<h2> Value after decrement is: " + numFinal + "</h2>" )
numFinal = numFinal % 3
document.write("<h2> The remainder is : " +  numFinal + "</h2>" )


// Q4
var movie_ticket = 600
movie_ticket = 600 * 5
document.write("<h2> Total cost to buy 5 tickets to movie is " + movie_ticket + "PKR. <br>" )

// Q5
var table = 4 
document.write( "<br> Table of " + table + "<br>" +
table + " * 1 = " + table*1 + "<br>" +
table + " * 2 = " + table*2 + "<br>" +
table + " * 3 = " + table*3 + "<br>" +
table + " * 4 = " + table*4 + "<br>" +
table + " * 5 = " + table*5 + "<br>" +
table + " * 6 = " + table*6 + "<br>" +
table + " * 7 = " + table*7 + "<br>" +
table + " * 8 = " + table*8 + "<br>" +
table + " * 9 = " + table*9 + "<br>" +
table + " * 10 = " + table*10 + "<br>"
)

// Q6
var Celsius_temperature = 25
var Fahrenheit_temperature = 25 
Celsius_temperature =  (Fahrenheit_temperature - 32) * (5/9)
document.write(Celsius_temperature)


// Q7
var priceitem1 = 650 ;
var priceitem2 = 100 ;
var quantityitem1 = 3 ;
var quantityitem2 = 7 ;
var shippingcharges = 100 ;
var totalcost = (priceitem1*quantityitem1) + (priceitem2*quantityitem2) + shippingcharges
document.write("<h2> Price of item 1 is " + priceitem1 + " <br> quantity of item 1 " + quantityitem1 + "<br> Price of item 2 is " + priceitem2 + "<br> Quantity of item 2 is " + quantityitem2 + "<br> Shipping charges " + shippingcharges + "<br><br> The total cost of your order is " + totalcost + "</h2>")


// Q8
var totalMarks = 980
var marksObtained = 804
var percentage = (804/980) * 100
document.write("<br><h1><u>Marks Sheet</u></h1> <h2> Total Marks: " + totalMarks + " <br>Marks Obtained: " + marksObtained + "<br> Percentage: " + percentage + "</h2>")

// Q9
var usDollars = 10 ;
var soudiRiyals = 25 ;
var paksoudiRate = 28  ;
var pakusRate = 104.80 ;
totalPkr = (usDollars*pakusRate) + (soudiRiyals*paksoudiRate)
document.write("<h1><u> Currency in PKR</u> </h1> "   +  "<h2> Total Currency in PKR: " + totalPkr + "</h2>" )

// Q10
var one = 5
total = (++one * 10) / 2 
document.write("<h1>" + total + "</h1>")

// Q11
var current_year = 2016
var birth_year = 1992
var total = current_year - birth_year
document.write( "<h1><u> Age Calculator </u></h1> " + " <h2> Current year: " + current_year + " <br>Birth year: " + birth_year + " <br>Your age: " +  total + "</h2>")

// Q12
var circleRadius = 20
var circumference = (2*3.142*20)
var area = 3.142 * (circleRadius*circleRadius)
document.write( "<h1><u> The Geometrizer </u></h1> " + "<h2> Radius of circle: " + circleRadius + "<br>The circumference is: " + circumference + "<br>The area is: " + area + "</h2>")


// Q13

var favoriteSnacks = "Choclate chip"
var currentAge = 15
var  maximumAge = 65
var snacksPerDay = 3
total = (maximumAge-currentAge)  
var end = total * 365 * snacksPerDay 
document.write("<h1><u>The Lifetime Supply Calculator</u></h1>" + "<h2> favorite snack: " + favoriteSnacks+ "<br>Current age: " + currentAge + "<br> Estimated Maximum age: " + maximumAge + "<br>Amount of snacks per day: " + snacksPerDay + "<br>You will need " + end + " " + favoriteSnacks + " to last you until the ripe old age of " + maximumAge + "." + "</h2> <hr>")




                         // chap 06

 document.write("<h3>Chap 06 </h3>")
// Q1 
var a = 10
document.write("<h1>Result: </h1><h2>The value of a is: " + a  + "</h2>")
var finala = ++a
document.write("<h2>The value of ++a is: "  + finala + "<br>Now the value of a is: " + finala + "</h2><br>")
var a = 11
document.write("<h2>The value of a++ is: "  + a + "<br>Now the value of a is: 12 "+ "</h2><br>")
var finala = a++
document.write("<h2>The value of --a is: " + finala + "<br>Now the value of a is: 11 " + "</h2><br>")
var finala = --a
document.write("<h2>The value of a-- is: " + finala + "<br>Now the value of a is: 10 " + "</h2><br>")
var finala = a--

// Q2
var a = 2
final = --a 
document.write("<h2> value of --a is: " + final + "<h2>")
var a = 2
var b = 1
final = --a - --b;
document.write("<h2> value of --a - --b is: " + final + "<h2>")
var a = 2
var b = 1
final = --a - --b + ++b;
document.write("<h2> value of --a - --b + ++b is: " + final + "<h2>")

var a = 2
var b = 1
final = --a - --b + ++b + b--;
document.write("<h2> value of --a - --b + ++b + b-- is: " + final + "<h2>")
var a = 2
var b = 1
var result = --a - --b + ++b + b-- ;
document.write("<h2>Result <br>" + result + "</h2>")


// Q3
var namee = +prompt("Enter your name")
if(namee = String ){
    alert("! Welcome to the Greeting Program.") ;
}
else(namee !== String)
    {alert("Something went wrong!")}


// Q4
var table = 5
document.write(
    table + " * 1 = " + table*1 + "<br>" +
    table + " * 2 = " + table*2 + "<br>" +
    table + " * 3 = " + table*3 + "<br>" +
    table + " * 4 = " + table*4 + "<br>" +
    table + " * 5 = " + table*5 + "<br>" +
    table + " * 6 = " + table*6 + "<br>" +
    table + " * 7 = " + table*7 + "<br>" +
    table + " * 8 = " + table*8 + "<br>" +
    table + " * 9 = " + table*9 + "<br>" +
    table + " * 10 = " + table*10 + "<br>"  
)
var table = +prompt("Enter any number")
document.write(
    table + " * 1 = " + table*1 + "<br>" +
    table + " * 2 = " + table*2 + "<br>" +
    table + " * 3 = " + table*3 + "<br>" +
    table + " * 4 = " + table*4 + "<br>" +
    table + " * 5 = " + table*5 + "<br>" +
    table + " * 6 = " + table*6 + "<br>" +
    table + " * 7 = " + table*7 + "<br>" +
    table + " * 8 = " + table*8 + "<br>" +
    table + " * 9 = " + table*9 + "<br>" +
    table + " * 10 = " + table*10 + "<br>"  
)


// Q5
var eng = "English"
var urd = "Urdu"
var math = "Maths"
var totalMarks = 100
var obteng = 54
var obturd = 54
var obtmath  = 48
var totalsub = obteng + obtmath + obturd
var pereng = (obteng/totalMarks) * 100
var perurd = (obturd/totalMarks) * 100
var permath = (obtmath/totalMarks) * 100
var totalPercen = (totalsub/300) * 100
document.write("<table><tr><td><h2>subjects</h2></td>" + "<td><h2>total marks</h2></td>" + "<td><h2>obtained marks</h2></td>" + "<td><h2>percentage</h2></td>" +"<tr><td><h3>" + eng + "</h3>" + "<td><h3>" + totalMarks + "</h3></td>" + "<td><h3>" + obteng + "</h3></td>" + "<td><h3>" + pereng + "%</h3></td></tr>" + "<tr> <td><h3>" + urd  + "</h3></td>" + "<td><h3>" + totalMarks + "</h3></td>"  + "<td><h3>" + obturd + "</h3></td>"  +  "<td><h3>" + perurd + "%</h3></td> </tr> "  + "<tr> <td><h3>" + math + "</h3></td>" + "<td><h3>" + totalMarks + "</h3></td>"  +  "<td><h3>" + obtmath + "</h3></td>"  + "<td><h3>" + permath + "%</h3></td> </tr> " + "<tr>"+ "<td><h2> </h2></td>" + "<td><h2>" + totalMarks + "</h2></td>" +  "<td><h2>300</h2></td>"  + "<td><h2>" + totalPercen + "%</h2></td></tr></table>")





                 // chap 06-09

// chap 06
// Q1
var x = 4
var finalValue = x + 1
var finalValue = x++

// Q2
var x = 100
var finalX = --x

// Q3
var x = 50; 
var y = x++
document.write("<h2> The value of y is: " + y + "</h2>")

// Q4
var y = 50
var z = --y
document.write("<h2> The value of z is: " + z + "</h2>")

// Q5
var newNum = --num;

// Q6
var originalValue = 5;
var newValue = originalValue + 1;

// Q7
var myValue = 10
var newValue = ++myValue
alert(newValue)


// chap 07

// Q1
var calculatedNum = 2 + (2 * 6);
// the value of calculatedNum is 14

// Q2
var
calculatedNum = (2 + 2) * 6;
// the value of calculatedNum is 24

// Q3
var calculatedNum = (2 + 2) * (4 + 2);
// the value of calculatedNum is 24

// Q4
var calculatedNum = ((2 + 2) * 4) + 2;
// the value of calculatedNum is 18

// Q5
// 2 + 2 * 4 + 10,
var cost = (2 + (2 * 4) + 10);
// the value of cost is 56


// Q6
// 2 + 2 * 4 + 10,
var units = ((2 + 2) * 4) + 10;
// the value of units is 20

// Q7
// 4 / 2 * 4,
var pressure = (4 / 2) * 4;
// the value of presure is 5

// chap 08

// Q1 
var num = "2" + "2";
// the value of num is 22

// Q2
var message = ("Hellow," + "Dolly")
alert("the value of message is: " + message)

 // Q3
 var message = "33" + 3
 alert("the value of message is: " + message)

// Q4
var firstPart = "Pakistan ";
var secondPart = "Zindabad";
alert(firstPart + secondPart);


// Q5
var myNum = "The number is: " + 10;

// Q6
var firstName = "Hello, ";
var secondName = "world!";
var concatenatedNmae = firstName + secondName;


// chap 09

// Q1
var firstName = prompt("Enter first name:")

// Q2
var country = prompt("Country?", "China");

// Q3
// Correct this statement var yourName = prompt(Enter Your Name");
var yourName = prompt("Enter Your Name");

// Q4
var userInput = prompt("Please enter your favorite color:", "Blue");

// Q5
var Message = "Please enter your favorite food:";
var Response = "Pizza";
var userResponse = prompt(Message, Response);

// Q6
var userResponse = prompt("Please enter your favorite color:", "Blue");
alert("Your favorite color is: " + userResponse);

