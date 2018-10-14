// "use strict";

$(document).ready(function(){
	// ....
  
  //add defer if its not in script tag  
  $('script').each(function(){
  	if( !$(this).attr('defer') || $(this).attr('defer', '') ) {
       $(this).attr('defer', 'defer');
    }
  });
  //end 
  	
});


$(window).load(function(){
	// ....
});


$(window).resize(function(){
	// ....
});






// if window width
$(document).ready(function () {
  breakLine();  
});
                  
$(window).on('resize', function(){
  breakLine();    
});

function breakLine() {
  if( $(window).width() > 1201 || $(window).width() < 1873 ) {  
    $(".my-element h3:contains('Essentials')").html(function(_, html) {
       return html.replace(/(Essentials)/g, '<div class="line-break">$1</div>');
    });
  }  
}









// FUNCTIONS
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// function description
var functionName = function(){

}

// function description
function myFunction(p1, p2) {
    return p1 * p2;
}


// fadeto and .hover/.hoverout
varname.hover(function(){
  $(this).stop().fadeTo(1000, 0.5);
}, (function(){
  $(this).stop().fadeTo(1000, 1);
});


// call back
$('box1').fadeTo(1000, 0.2, function() { 
  // animation done // now // do something else here
});



// function / arg
function greet(who) {
document.write("Hello " + who);
}
greet("Harry");

// function const
const power = function(base, exponent) {
let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
return result;
}
document.write(power(2, 4));

// arrow function
const myFnc = () => {
  // for const, => is necessary
}

// arrow function wih arg
const printMyName = (name) => {
  console.log(name);
  // name is argumaent here
}
printMyName('Max');

const printMyName = name => {
  console.log(name);
  // name is argumaent here
  // you can omit () from above name argumaent but in case of one argument
}
printMyName('Max');

const printMyName = () => {
  console.log('Max');
}
printMyName();

const printMyName = (name, age) => {
  console.log(name, age);
  // name is argumaent here
  // you can omit () from above name argumaent but in case of one argument
}
printMyName('Max', 28);

const multiply = (number) => {
  return number * 2;
}
console.log(multiply(2));

const multiply = (number) => number * 2;
console.log(multiply(2));




// chaining and delay
$('box3').delay(1000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();

$('button').click(function(){
  $('.saved').slideDown().delay(1000).slideUp();
});



// concatination

var z = a + " is greater than " + b + " some more text ";

// x+=y
x=x+y; 
// is equal to
x+=y;



// INNER-HTML
document.getElementById("demo").innerHTML = myvar;

// VALUE
document.getElementById("demo").value = "some name";

$('input').val();




//Increment/Decrement
Pre Increment ++x
Post increment x++
Pre decrement --x
Post decrement x--

//Comparison Operators
==  equal to
=== equal value and equal type
!=  not equal
!== not equal value or not equal type
> greater than
< less than
>=  greater than or equal to
<=  less than or equal to


//Logical Operators
&&  and
||  or
! not >>>>>>>> !(x == y)







// object
var person = {
  firstName:"John", 
  lastName:"Doe", 
  age:50, 
  eyeColor:"blue"
};
person['firstName'];
//or
person.firstName



var person = {
  firstName:"John", 
  age:50,
  show:function(){
    alert( this.age );
  }
};



// object constructor
function Person(firstName, lastName){
    this.firstName =  firstName;
    this.lastName = lastName;        
}  
var Saad = new Person("Saad", "Mousliki");

// self calling function
(function(){
// some private code that will be executed automatically
})();
// example
(function(a,b){
    var result = a+b;
    return result;
})(10,20);

// if its a number
function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}
if( isNumber(9) == true ) { 
  console.log("yep its a number"); 
} else {
  console.log("not a number"); 
}

// empty an array
var myArray = [12 , 222 , 1000 ]; 
myArray.length = 0;

// Rounding number to N decimal place
var num =2.443242342;
num = num.toFixed(4);  // num will be equal to 2.4432

Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4
Math.pow(8, 2);      // returns 64
Math.sqrt(64);      // returns 8
Math.abs(-4.7);     // returns 4.7
Math.ceil(4.4);     // returns 5
Math.floor(4.7);    // returns 4

var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656

var x = 123;
x.toString(); 




// convert to number
var someVar;
var toNumber = parseInt(someVar);
var divTop = parseInt( $('.scroller').css('top') );

// query selector
var navright = document.querySelector('#right');

// json parse and strinify
var stringFromPerson = JSON.stringify(person); 
var personFromString = JSON.parse(stringFromPerson);



// loops

var sum = 0;  
for (var i in arrayNumbers) {  
    sum += arrayNumbers[i];  
}
// better
var sum = 0;  
for (var i = 0, len = arrayNumbers.length; i < len; i++) {  
    sum += arrayNumbers[i];  
}

//or
var arr = ['john', 'jane', 'jim'];
for (var prop in arr) {
  console.log(prop + ' ' + arr[prop]);
}



// js way
var x = document.querySelectorAll(".example");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
}

// Add Class and Id to all images via loop
for (x=0;x<$(".img-viewer").children('img').length;x++){
    var thisImg = $(".img-viewer").children('img')[x];
    thisImg.id = x+1;
    var newClass = thisImg.id;
    $(thisImg).addClass(newClass);
}
//<div class="img-viewer">
//  <img ...>
//  <img ...>
//  <img ...>
//</div>

//add clas and number, unique identifier to each element
$('li').addClass(function(index) {
  $(this).addClass("item-" + index);
});




// animate
$('.box').animate({ 'margin-left': '+=200px' });
$('.box').animate({ 'margin-left': '+=200px' }, 1000 );
$('.box').animate({ 'margin-left': '+=200px', 'opacity': '0.5' }, 1000 );
// if you dont want to use '' then you have to use camelcase in properties without -
$('.box').animate({ marginLeft: '200px' });



var cars = ["BMW", "Volvo", "Ford", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}
document.write(text);


// For loop, if statement and Break
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    document.write(current);
    break;
  }
}


// while loop
var number = 0;
while (number <= 12) {
document.write(number + " ");
number = number + 2;
}

// simple array values loop
var myObj, i, x = "";
myObj = {
    "name":"John",
    "age":30,
    "cars":[ "Ford", "BMW", "Fiat" ]
};
for (i = 0; i < myObj.cars.length; i++) {
    x += myObj.cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = x;




// time // set interval or set timeout
setInterval('doSomethingPeriodically()', 1000);  
setTimeout('doSomethingAfterFiveSeconds()', 5000);
// or

function fnRandom(){
  alert("Hello World");
}
setTimeout(fnRandom, 5000);

// or
setTimeout(function(){
  alert("Hello World");
}, 5000);


//repeat after every one second
setInterval(time,1000);
function time(){
$('div').text( $.now() );
}

// loop repeat after few seconds
function toggleDiv() {
    setTimeout(function () {
        $("#myDiv").hide();
        setTimeout(function () {
            $("#myDiv").show();
            toggleDiv();
        }, 3000);
    }, 1000);
}
toggleDiv();


// hide after few seconds
setInterval(function() { 
    setTimeout(function() {     
       $("#myDiv").hide(); 
},3000); 
});




// switch
function getCategory(age) {  
  var category = "";  
  switch (true) {  
      case isNaN(age):  
          category = "not an age";  
          break;  
      case (age >= 50):  
          category = "Old";  
          break;  
      case (age <= 20):  
          category = "Baby";  
          break;  
      default:  
          category = "Young";  
          break;  
  };  
  return category;  
}  
getCategory(5);  // will return "Baby"


// try, catch
var object = ['foo', 'bar'], i;  
try { 
    for (i = 0, len = object.length; i <len; i++) {  
        // do something that throws an exception 
    } 
} 
catch (e) {   
    // handle exception  
} 

// if else
// ternary operator
var ifelseResult = a < b ? a : b;
// if x is greater than 4 return 1 else return 0
var result = (x > 4) ? 1 : 0;

// get absolute url // domain url
var getAbsoluteUrl = (function() {
  var a;
  return function(url) {
    if(!a) a = document.createElement('a');
    a.href = url;
    return a.href;
  };
})();
// Usage
getAbsoluteUrl('/something');
getAbsoluteUrl('/');

.push()
.indexOf()
.forEach()

.each()
$('.col-shift-right-js').each(function() {
    $(this).parent('.row').find('.col-shift-left-js').insertAfter(this);
});

.concat()
.map()

newvalue = varname.trim();

// replace
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

toUpperCase();
text1.toUpperCase();
toLowerCase();
// length
var sln = txt.length;

// number of items in array
var myarr = ["a","b","c"];
console.log( myarr.length );


// if else
var x = 4;
if( x != 5  )
{
  //   
}
else if(   )
{
  // 
}
else
{
  //
}

// case
textString.toLowerCase().capitalize();

////////////////////
// js event listener
document.addEventListener("DOMContentLoaded", function(event){
  // document.querySelector("input[name='sender']").addEventListener('click', function(){
  //     makeRequest();
  // });
  // or
  document.querySelector("input[name='sender']").addEventListener('click',makeRequest);
});
function makeRequest() {
  console.log("it worked...");
}
////////////////////



// query selectors
//select first match
document.querySelector(".example");
document.querySelector("p");
//select all matches
var x = document.querySelectorAll("p");




// find in array
var array1 = [5, 12, 8, 130, 44];
var found = array1.find(function(element) {
  return element > 10;
});
console.log(found);
// expected output: 12


// filter from array
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

// swap image on image hover
var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}
$(function () {
    $('img.xyz').hover(sourceSwap, sourceSwap);
});
// <img class='xyz' data-alt-src='http://cdn1.iconfinder.com/data/icons/fatcow/32/accept.png' src='http://cdn1.iconfinder.com/data/icons/fatcow/32/cancel.png'>

// On Link Hover Change Target Image Source
$("a").hover(function(){
 var newImage = $(this).attr("data-img");
 $("#targetImg").attr("src",newImage);
});
//<a href="#" data-img="img1.png">Plane 1</a>
//<img src="img1.png" id="targetImg">


// js class
class Person {
    constructor () {
      this.name = 'Max';
      this.age = 20;
      this.education = 'BCS';
      this.height = 5;
    }
}
const person = new Person();
console.log(person.name);
console.log(person.height);
console.log(person.age);




// options loop
var alphas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for(var i=0; i < alphas.length; i++) {
 // uncomment below two lines
 // $('select').append('<option value="+alphas[i]+">"+alphas[i]+"</option>');
 // $('.another-custom-select').append('<option value="+alphas[i]+">"+alphas[i]+"</option>');
}




// collapsable widgets // with single function
$('.widget-expandable .title a').on('click', function(event){
  event.preventDefault();
  $(this).closest('.widget-expandable').find('.w-body').stop().slideToggle('fast');
  $(this).closest('.widget-expandable').find('.title a i').stop().toggleClass('fa-minus fa-plus');
});


// array > each > append
var fruits = ['Apple','Bananna', 'Grapes'];
  // run the function
  show();
  function show() {
    jQuery.each(fruits, function(index,fruit){
      $('ul').append("<li>" + fruit + "</li>");
    });
  }


//center align tagline with title width
function alignCenterTagLineToTitle(){
  var mainTitleWidth = $('.title').width();
  $('.tagline').css({'min-width': mainTitleWidth+'px'});
}


// check options and radio with toggle
$('.choose-engraving-wrap .typo-box').click(function(){
    $('.choose-engraving-wrap .typo-box').not(this).removeClass('active');
    $(this).toggleClass('active');
    
    if ( $(this).find('.typo-check').is(':checked') ) {
      $(this).find('.typo-check').prop("checked", false);  
      $('.selected-typo').text("");
    } else {
      $(this).find('.typo-check').prop("checked", true);
      $('.selected-typo').text("Typography: " + $(this).find('.typo-check').val() );
    }
  });




// animate numbers // count number to its original value // number counter // number animator
// just add .counter class to a div / span that contains a number
$('.counter').each(function(){
    $(this).prop('NumberUp', 0).animate({
      NumberUp: $(this).text()
    }, {
      duration: 2000,
      easing: 'easeOutExpo', 
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
});



// easing
// easeOutCirc
// easeInOutExpo
// div.animate({ top: '-=100px' }, 600, 'easeOutCirc', function () { … })
// http://gsgd.co.uk/sandbox/jquery/easing/
//https://easings.net
//
  $('.down').click(function(event){
    event.preventDefault();
    $('.slide1').slideDown(800, 'easeInOutExpo');
  });



// if item contains some text wrap in div
$(document).ready(function () {
  breakLine();  
});
$(window).on('resize', function(){
  breakLine();    
});
function breakLine() {
  if( $(window).width() > 1201 || $(window).width() < 1873 ) {  
    $(".my-element h3:contains('Essentials')").html(function(_, html) {
       return html.replace(/(Essentials)/g, '<div class="line-break">$1</div>');
    });
  }  
}






// increment decrement
pageID = parseInt(pageID)+1;

$('.sections-control .next').click(function(){
    var currentProgress = $('.sections-control .progress-control').val();
    if(currentProgress < 4) {
      var newProgress = parseInt(currentProgress) + 1;
      $('.sections-control .progress-control').val(newProgress);
      updateProgress();
    }
  });

  $('.sections-control .back').click(function(){
    var currentProgress = $('.sections-control .progress-control').val();
    if(currentProgress > 1) {
      var newProgress = parseInt(currentProgress) - 1;
      $('.sections-control .progress-control').val(newProgress);
      updateProgress();
    }
  });






// this toggleclass / not this remove class
// remove class from siblings that not not quite siblings but toggle class on this
$('.choose-metal-wrap .metal-box').click(function(){
    $('.choose-metal-wrap .metal-box').not(this).removeClass('active');
    $(this).toggleClass('active');
});




//scroll to top
scrollTop();
//returns the position from top
// position from top of window for p in px
('p').css('top')
/////
$(document).ready(function(){
  // get initial top position of div without px
  var initialTop = parseInt( $('.moving-block').css('top') );
  $(window).scroll(function(){
    var windowTop = $(this).scrollTop();
    $('.moving-block').css('top',windowTop+initialTop);
  });
});

// or
$('.top').click(function(event){
    event.preventDefault();
    $('body,html').animate({ scrollTop:0 }, 800, 'easeOutExpo');
});
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>




// smooth load
$(window).on('load', function(){
  $('body').fadeIn();
});





// selections
$('p:first').hide();
$('ul li:first').hide();
$('ul li:first-child').hide();
//select link
$('[href]').hide();
//select button
$(':button').hide();

$('tr:even').hide();
$('tr:odd').hide();

$('tr:even').css('background-color','#eee');

//select next
$('input').next('span').css('','');

$('input').focus(function(){
  $(this).next('span').css('','');
});

$('input[type=text]').focus(function(){
  $(this).next('span').css('','');
});




//inline CSS
$( "a" ).css( "color", "red" );











// concept
//////////////////////////////
$('.btn').click(response);
function response() {
  // do something
}
////////////////
done(function(){
  output();
});
// above is same as
done(output);
//////////////////////////////


// traversing
.parent()
.children()
.siblings()
.next()
.prev()
.filter()
.not()
.has()
.is()
.each()


// which key pressed
$("html").keydown(function(event) {
   console.log(event.which);
});

// width // height
var windowHeight = $(window).height();
var windowWidth = $(window).width();


// global variable
// remove var from a variable and it becomes global variable and u can use global variable inside a function and access it outside function
// 




// no jquery js codes // http://youmightnotneedjquery.com
// work in progress




