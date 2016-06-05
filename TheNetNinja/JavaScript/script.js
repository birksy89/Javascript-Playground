function getAverage (a,b){
  var avg = a+b /2;

  console.log(avg);
  return avg;
}

//var myResult = getAverage(65,45);
//console.log("My Return =" + myResult);

var x = "5"; //String
//var x = 5; //Number
var y = 32;

console.log(typeof(x+y) + " " + (x+y) );

//Numbers
console.log(Math.PI);

console.log(Math.round(5.4));
console.log(Math.round(5.5));

console.log(Math.floor(5.4));
console.log(Math.ceil(5.4));

console.log(Math.max(5.4,5.5,7,7.2,9.5));
console.log(Math.min(5.4,5.5,7,7.2,9.5,Math.PI));

//NaN
//var a = "apple";
var a = 43;
var b = 5;

if(isNaN(a)){
  console.log( a +  " - This is not a number");
}
else{
    console.log( a +  " - This IS a number");
}


//strings

var myString =  "I am a string";
console.log(myString);

//Escaping Characters
//var myString =  "I'm a string";
var myString =  'I\'m also a string';
console.log(myString);

//String Properties / Methods(Functions)
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.indexOf("also")); //Finds when 'also' starts
console.log(myString.indexOf("ninja")); //Returns -1 as can't find

if(myString.indexOf("ninja")===-1){
  console.log("Can't find this word")
}

//Comparing Numbers
var string1 = "abc";
var string2 = "xyz";
console.log(string1 === string2);

var string1 = "abc";
var string2 = "ABC";
console.log(string1 === string2);

var string1 = "abc";
var string2 = "ABC";
console.log(string1.toLowerCase() === string2.toLowerCase());

var string1 = "abc";
var string2 = "bcd";
console.log(string1 < string2);
//This is true as b < a in the alphabet

var string1 = "abc";
var string2 = "Bcd";
console.log(string1 < string2);
//This is false because uppercase letters come before lowercase



//Splitting and Slicing strings
var str = "hello world";

//Slice
var str2 = str.slice(2);
console.log(str2); //"llo world"

var str3 = str.slice(2,9);
console.log(str3);//"llo wor"


//Splitting
var tags = "hello,world,this,is,a,bunch,of,csv"

var mySplitted = tags.split(",");
console.log(mySplitted);



//Arrays

var myArray = []; //Empty Array

myArray[0] = 25; //Add to first position
myArray[1] = "A String!";
myArray[2] = 76;
myArray[3] = 4;
console.log(myArray[0]); //Call back first item
console.log(myArray); //Call back whole array

//Updating Values in the array
myArray[1] = "Changing the string value";
console.log(myArray); //Call back whole array

//Making an array with things in it
var myArray2 = [2,4,6,8,10];

//Create an array with a set number of slots
var myArray3 = new Array(12);


//Array Properties & Methods
console.log(myArray2.length);
console.log(myArray3.length); //Even though it's empty it says "12"

console.log(myArray2.sort());



//Objects
console.log("////////OBJECTS//////////");

//Existing Objects within JS
var myStringObj = new String();
myStringObj = "hello";

console.log(myStringObj.length);
console.log(myStringObj.toUpperCase());

//New Objects
var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Andrew";

console.log(myCar.driver);

//Functions / Methods - Objects

myCar.drive = function(){
  console.log("Curruently Driving...");
};

myCar.drive();

//Different Notation - "Shorthand Notation"

var myCar2={
  maxSpeed:60,
  driver:"Rhiannon",
  drive: function(speed,time){
    console.log("You have travelled " + (speed*time) + " miles");
  }
};

console.log(myCar2.driver);
myCar2.drive(50,2); // 50pmh for 2 hours


//The "THIS" Keyword

console.log(this); //This refers to the window Object

var myCar3={
  maxSpeed:90,
  driver:"Max Power",
  drive: function(speed,time){
    console.log("You have travelled " + (speed*time) + " miles");
  },
  test: function(){
    console.log(this); //"This" logs out the object you are in.
  },
  logDriver: function(){
    console.log("The Driver for this car is: " + this.driver);
  }
};

myCar3.test(); //"This" logs out the object you are in.
myCar3.logDriver();


//Constructor function

//Existing Objects
var myArray = new Array();
var myString = new String();

//Creating a new Object using Constructor Function
var Car = function(maxSpeed,driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed,time){
      console.log("You have travelled " + (speed*time) + " miles");
    },
    this.logDriver = function(){
      console.log("The Driver for this car is: " + this.driver);
    }
}

//Now we can create this object like others (string, array, etc)
var myCar = new Car();

//And populate them quickly
var myCarA = new Car(70,"John");
var myCarB = new Car(120,"Paul");
var myCarC = new Car(30,"Peter");

myCarC.logDriver();


//Date Object

//Now
var myDate = new Date();
console.log(myDate);

//Past
var myPastDate = new Date(1545, 9,2);
console.log(myPastDate);

//Future
var myFutureDate = new Date(2145, 9,2);
console.log(myFutureDate);

//With Time
var myFutureDateTime = new Date(2145, 9,2,10,35,15);
console.log(myFutureDateTime);

var birthday = new Date(1989,9,2,11,15)
console.log(birthday);
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime()); //Number miliseconds sinde Jan 1970

//Using Get Time to compare dates

//Andrew testing what happends when you compare any Objects
var myCarX = new Car(120,"Same");
var myCarY = new Car(120,"Same");

if (myCarX == myCarY){
  console.log("the same");
}
else{
  console.log("not the same");
}
// Ok, so it turns out that objects aren't the same when you compare them.

//Comparing dateTime objects will also mean they aren't the same.

//We use the getTime method to return milliseconds, which then CAN be compared.


//Javascript Timers

function showDate(){
  console.log(myDate);
}

//setTimeout
setTimeout(showDate, 3000); //Waits 3secs then fires function

//setInterval
//setInterval(showDate,1000); //Fires the function every 1sec

var body = document.body;
var colors = ["red","green","yellow","blue"];
var i = 0;

function changeColor(){

  if(i >= colors.length){
    i = 0;
  }

  body.style.background = colors[i]
    console.log("Changed bg to " +colors[i]);
  i++;
}

//setInterval(changeColor,1000); //Fires the function every 1sec

var myTimer = setInterval(changeColor,1000);

body.onclick = function(){
  clearInterval(myTimer);
  console.log("stopped timer");
}
