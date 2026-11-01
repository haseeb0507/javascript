// // // chapter 1

alert("Welcome to our website!");
alert("Error! Please enter a valid password.");
alert("Hello!\nWelcome to our website.");
alert("welcome to js land")
alert("happy coding! \n prevent this page from ")
console.log("hello .. I can run js through my web browser");



// // chapter 2 

var  username =""         
console.log(username)
var myname ="haseeb"
console.log(myname)
var message;message ="hello world"
alert(message)
console.log (message)
var pizza ="PIZZA\nPIZZ\nPIZ\nPI"
alert(pizza)
var email ="hm8872018@gmail.com"
alert(email)
var book ="a smarter way to learn java script"
alert(book)
document.write("yah i can write html content")
var design = "_________________&&________________"
alert(design)
document.write(design)


// chapter 3

var age =17;
alert("I am " + age +"years old")
var visit ="14"
alert("you have visited this app" + visit + "times")
var birthyear =2009
document.write("my birth year is 2009" + "<br>");
document.write("data type of my declared varable is " + typeof birthyear+ "<br><br>")
var visitor = "haseeb";
var product = "T-shirt";
var quantity = 5;

document.write(  visitor + " ordered "+ quantity + " " + product +
   " (s)on xyz clothung store");




// chapter 4


var username = "haseeb" ,age= 17,  city ="karachi";

var myname =""
var age =""

// var 1name=""
// var user-name =""
// var user name=""

document.write("<h3>Rules for naming JS variables</h3>");
document.write("Variable names can only contain , numbers, $ and _. For example : $my_1stVariable<br>");
document.write("Variable must begin with a letter, $ or _. For example : $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords<br>");


// chapter  5



var num1 =10;
var num =20;
var sum = num1 +num
document.write("sum of 10 and 20 is "+sum)

var num1 =10;
var num2 = 20;
document.write("addition" + (num1 + num2));
document.write("<br>")
document.write("subtraction"+(num1 - num2))
document.write("<br>")
document.write("multiplication"+(num1 * num2))



//chapter  6

var a = 10;
document.write("initial value of a is " + a +"<br>")
document.write("initial value ++a is: " + (++a) + "<Br>")

document.write("initial value of a is: " + a + "<br>")
document.write("value of --a is: " +(--a)+ "<br>")

var a =2;
var b =1;
var result= --a  - --b + ++b + b--;
document.write("value of a is:" + a + "<br>")
document.write("value of b is:" + b + "<br>")
document.write("value of result is:"+ result )

var username= prompt("enter your name: ");
alert("hy" + username +"!welcome to JS")

var sub1=prompt("enter subject1");
var sub2=prompt("enter subaject2");
var sub3=prompt("enter subjact3");

var totalmarks = 10;
 
var obtainedmarks1= prompt("enter obtained marks for the first subjaect1 ")



// chapter 7

var result= 3 + 4 *2
document.write("first result: " + result);
document.write("<br>")

var result2 = (3 + 4)*2;
document.write("second result:" + result2);
document.write("<br>")

var result1 =20 - 6/ 2+3* 2;
var result2 = (20 - 6)/ 2 +3* 2;

document.write("first result:" + result1);
document.write("<br>")
document.write("second result:" + result2);
document.write("<br>")


var a=8
var b=4
var c=2

var result1=a + b*c;
var result2 = (a+b) *c;

document.write("first expression:" + result1);
document.write("<br>")
document.write("second expression:" + result2);
document.write("<br>")


var price1 =500;
var price2 =300;

var quantity1=2;
var quantity2 =3;
var shipping=200;
var total=(price1* quantity1)+(price2*quantity2)+shipping;

document.write("<h1>Shoppinng bill</h1>");
document.write("<br>")
document.write("first item: " +(price1*quantity1)+ "PKR")
document.write("<br>")
document.write("second item:"+(price2*quantity2)+"PKR")
document.write("<br>")
document.write("shipping:"+shipping+"PKR")
document.write("<br>")
document.write("total bill:" +total+"PKR")
