//example1
function showMessage(){
	document.getElementById('msg').innerHTML="Assalamu alaikum";
}

//example2
function showTimeDate(){
	document.getElementById('show_date').innerHTML=Date();
} 

//example3
function showSmile(){
	document.getElementById('emoji').src='images/smile.png';
}
function showSad(){
	document.getElementById('emoji').src='images/sad.png';
}

//example4
function textChange(){
	document.getElementById('t_change').innerHTML="Hello world!";
}

//example5
function colorChange(){
	document.getElementById('c_change').style.color="red";
}

//example6
function fontSizeChange(){
	document.getElementById('fs_change').style.fontSize='50px';
}

//example7
function imageShow(){
	document.getElementById('smile').style.display='block';
}

function imageHide(){
	document.getElementById('smile').style.display='none';
}

//example8
function showSum(){
	document.getElementById('sum').innerHTML=23+7;
}

//example9
function showSub(){
	let a, b;
	a = 23;
	b = 7;
	let c = a-b;
	document.getElementById('sub').innerHTML= c;
}

//example10
function showMul(){
	let a, b;
	a = 23;
	b = 7;
	document.getElementById('mul').innerHTML= a*7;
}

//example11
function showDoc(){
	document.write(20+30);
}

//example12
function showAlert(){
	window.alert("Hello");
}

//example13
function printPage(){
	window.print();
}

//example14
function jsStatements(){
	let x, y, z;  // Statement 1
	x = 5;        // Statement 2
	y = 6;        // Statement 3
	z = x + y;    // Statement 4

	document.getElementById('stmnt').innerHTML ="The value of z is ="+z+"  ";  
}

//example15
function jsStatements1(){
	let x, y, z;  // Statement 1
	x = 5;        // Statement 2
	y = 6;        // Statement 3
	z = x + y;    // Statement 4

	document.getElementById('stmnt1').innerHTML = z;  
}

//example16
function twoMessage(){
	document.getElementById('demo1').innerHTML="Hello ";
	document.getElementById('demo2').innerHTML="How are you? ";
}

//example17
function caseSensitive(){
	let lastname, lastName;
	lastname = "wrong";
	lastName = "right";
	document.getElementById('case').innerHTML=lastName;
}

//example18
function multipleOutput(){
	const pi = 3.14;
	let person = "Are you?";
	let answer = 'Yes I am!';
	document.getElementById('multi').innerHTML = pi + "<br>" + person + "<br>" + answer;
}

//example19
function unDefinedValue(){
	let carName;
	document.getElementById('undefined').innerHTML=carName;
}

//example20
function showError(){
	try {
  		const PI = 3.141592653589793;
  		PI = 3.14;
	}
	catch (err) {
  		document.getElementById('error').innerHTML = err;
	}
}

//example21
function showCarsName(){
	//create array
	const cars = ["Audi", "Toyota", "BMW", "Porsche"];
	//chamge an element
	cars[3] = "Ford"

	//add an element
	cars.push("Mercedes");

	//display array
	document.getElementById('arr').innerHTML = cars;
}

//example22
function arithmeticOperator(){
	let a = 50;
	let b = 60;
	let c = (a*b)/2;
	document.getElementById('a_op').innerHTML=c;
}

//example23
function assignmentOperator(){
	var a = 50;
	a += 50;
	document.getElementById('as_op').innerHTML=a;
}

//example24
function comparisonOperator(){
	let text1 = "A";
	let text2 = "B";
	let result = text1 < text2;
	document.getElementById('com_op').innerHTML="Is A less than B? " + result;
}


//example25
function incrementOperator(){
	let x = 5;
	x++;
	let y = x;
	document.getElementById('in_op').innerHTML=y;
}

//example26
function exponentiationOperator(){
	let x = 9;
	let y = x**2;
	document.getElementById('ex_op').innerHTML=y;
}

//example27
function exponentiationOperatorTwo(){
	let x = 9;
	let y = Math.pow(x,2);
	document.getElementById('ex2_op').innerHTML=y;
}

//example28
function bigintDataType(){
	let x = BigInt("12121212122111212121221112");
	document.getElementById('bigint_datatype').innerHTML=x;
}

//example29
function booleanDataType(){
	let x = 5;
	let y = 5;
	let z = 7;
	document.getElementById('boolean_datatype').innerHTML=(x==y)+"<br>"+(x==z);
}

//example30
function objectDataType(){
	const person = {
  		firstName : "John",
  		lastName  : "Doe",
  		age     : 50,
  		eyeColor  : "blue"
	};
	document.getElementById('ob_datatype').innerHTML= person.firstName + "eye's is" + person.eyeColor ;
}

//example31
function typeofOperator(){
	document.getElementById("type_op").innerHTML = 
	typeof "" + "<br>" +
	typeof "John" + "<br>" + 
	typeof "John Doe";
}

//example32
function typeofNumOperator(){
	document.getElementById("type_op2").innerHTML = 
	typeof 0 + "<br>" + 
	typeof 314 + "<br>" +
	typeof 3.14 + "<br>" +
	typeof (3) + "<br>" +
	typeof (3 + 4);
}

//example33
function myFunction(p1, p2){
	return p1*p2;
}
let result = myFunction(4, 3);
document.getElementById("func").innerHTML = result;

//example34
function jsWindow(){
	document.getElementById('js_win').innerHTML =
	"Browser inner window width: " + window.innerWidth + "px<br>" +
	"Browser inner window height: " + window.innerHeight + "px";
}

//example35
function openNewWindow(){
	document.getElementById('win_open').innerHTML= window.open();
}

//example36
function closeWindow(){
	document.getElementById('win_close').innerHTML= window.close();
}

//example37
function moveWindow(){
	document.getElementById('win_move').innerHTML= window.moveTo();
}

//example38
function resizeWindow(){
	document.getElementById('win_resize').innerHTML= window.resizeTo();
}

//example39
function screenWidth(){
	document.getElementById('sr_width').innerHTML= "Screen width is: " + screen.width;
}

//example40
function screenHeight(){
	document.getElementById('sr_height').innerHTML= "Screen height is: " + screen.height;
}

//example41
function windowLocation(){
	document.getElementById('win_loc').innerHTML= "Current window location is: " + "<br>" + window.location.href;
}

//example42
function pageHostName(){
	document.getElementById('pg_htname').innerHTML= "Page hostname is: " + "<br>" + window.location.hostname;
}

//example43
function locationAssign(){
	document.getElementById('assign_loc').innerHTML= window.location.assign("https://www.w3schools.com");
}

//example44
function goBack(){
	document.getElementById('back').innerHTML=  window.history.back();
}

//example45
function popupConfirmBox() {
  var text;
  if (confirm("Press a button!")) {
    text = "You pressed OK!";
  } else {
    text = "You pressed Cancel!";
  }
  document.getElementById("p_c_box").innerHTML = text;
}

//example46
function promptBox() {
  let text;
  let person = prompt("Please enter your name:", "Sajjad Hossain");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("prmt_box").innerHTML = text;
}

//example47
function creatObject(){
	// Create an Object:
const car = {type:"Fiat", model:"500", color:"white"};

// Display Data from the Object:
document.getElementById("c_obj").innerHTML =
"The car type is " + car.color;
}


//example48
function toCelsius(f) {
  return (5/9) * (f-32);
}

let value = toCelsius(98);
document.getElementById('f_to_c').innerHTML = value;

//example49
function funcAsProperty(){
	const person = {
  firstName: "Sajjad",
  lastName: "Hossain",
  id: 611,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

document.getElementById('f_as_property').innerHTML = person.fullName();
}

//example50
function objectProperties(){
	const person = {
	  firstName: "John",
	  lastName : "Doe",
	  age      :  50
};

let x = "firstName";
let y = "age";
document.getElementById('obj_property').innerHTML = person[x] + " is " + person[y] + " years old.";
}

//example51
function addObjectProperties(){
	const person = {
	  firstname: "John",
	  lastname: "Doe",
	  age: 50,
	  eyecolor: "blue"
};

person.nationality = "English";
document.getElementById('add_property').innerHTML =
person.firstname + " is " + person.nationality + ".";
}

//example52
function deleteObjectProperties(){
	const person = {
	  firstname: "John",
	  lastname: "Doe",
	  age: 50,
	  eyecolor: "blue"
};

delete person.age;
document.getElementById('del_property').innerHTML =
person.firstname + " is " + person.age + " years old.";
}

//example53
function nestedObject(){
	const myObj = {
	  name: "John",
	  age: 30,
	  myCars: {
	    car1: "Ford",
	    car2: "BMW",
	    car3: "Fiat"
  }
}

let p1 = "myCars";
let p2 = "car2";
document.getElementById('nes_obj').innerHTML = myObj.name + " car is " + myObj[p1][p2];
}

//example54
function jsOnProperties(){
	const person = {
	  name: "John",
	  age: 30,
	  city: "New York"
};

// Display JSON
document.getElementById('json_property').innerHTML = JSON.stringify(person);
}

//example55
function arrList(){
	const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ol>";
fruits.forEach(myFunction);
text += "</ol>";

document.getElementById('arr_list').innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
	}
}

//example56
function arrSorting(){
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById('arr_sort1').innerHTML = fruits;

fruits.sort();
document.getElementById('arr_sort2').innerHTML = fruits;
}

//example57
function arrSortingRev(){
	const fruits = ["Banana", "Orange", "Apple", "Mango"];
	const reversed = fruits.toReversed();

	document.getElementById('arr_rev').innerHTML = fruits;

	document.getElementById('arr_rev2').innerHTML = reversed;
}

//example58
function arrIteration(){
	const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById('arr_it').innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>"; 
	}
}

//example59
function mathPower(){
	document.getElementById('math_pow').innerHTML = Math.pow(8,2);
}

//example60
function mathSqrt(){
	document.getElementById('math_sqrt').innerHTML = Math.sqrt(64);
}

//example61
function mathAbs(){
	document.getElementById('math_abs').innerHTML = Math.abs(-4.7);
}

//example62
function mathSin(){
	document.getElementById('math_sin').innerHTML = "The sine value of 90 degrees is " + Math.sin(90 * Math.PI / 180);
}

//example63
function mathMin(){
	document.getElementById('math_min').innerHTML = Math.min(0, 150, 30, 20, -8, -200);
}

//example64
function mathLog(){
	document.getElementById('math_log').innerHTML = Math.log(10);
}

//example65
function logicalOperator(){
	let x = 6;
	let y = 3;

document.getElementById('lg_op').innerHTML = 
(x < 10 && y > 1) + "<br>" + 
(x < 10 && y < 1);
}

//example66
function ternaryOperator(){
	function myFunction() {
  	let age = document.getElementById("age").value;
  	let voteable = (age < 18) ? "Too young":"Old enough";
  document.getElementById('ter_op').innerHTML = voteable + " to vote.";
}

//example67
function dateGetHours(){
	if (new Date().getHours() < 18) {
  document.getElementById('js_if').innerHTML = "Good day!";
	}
}

//example68
function jsSwitchCase() {
	let day;
	switch (new Date().getDay()) {
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday"
		break;
	}

	document.getElementById('switch_cs').innerHTML = "Today is" + day;
}

//example69
function jsForLoop(){
	let text = " ";
	for(let i=0; i<10; i++){
		text += "The number is " + i + "<br>";
	}
	document.getElementById('for_loop').innerHTML = text;
}

//example70
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}