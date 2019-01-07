// JavaScript Document
//The below function will calculate the amount of hours worked and will also work them out if they are night shifts
function calculateIfMon(){
var monStrtHrs = document.getElementById("1").value;
var monStrtMins = document.getElementById("2").value;
var monStrt = parseInt(monStrtHrs, 10) + (parseInt(monStrtMins, 10)/60);
var monFinHrs = document.getElementById("3").value;
var monFinMins = document.getElementById("monFinish").value;
var monFin = parseInt(monFinHrs, 10) + (parseInt(monFinMins, 10)/60);
var monTotal;

if(parseInt(monFin, 10)<parseInt(monStrt, 10)){
	 monTotal = (monFin+24)-monStrt;
} else {
		 monTotal = monFin-monStrt;
	}
	document.getElementById("ResultMon").value = monTotal;
}


//This is the same as above, to calculate the hours. It is also the same for all of the other functions with a similar name-->
function calculateIfTue() {
var tueStrtHrs = document.getElementById("tueStrtHrs").value;
var tueStrtMins = document.getElementById("tueStrtMins").value;
var tueStrt = parseInt(tueStrtHrs, 10) + (parseInt(tueStrtMins, 10)/60);
var tueFinHrs = document.getElementById("tueFinHrs").value;
var tueFinMins = document.getElementById("tueFinMins").value;
var tueFin = parseInt(tueFinHrs, 10) + (parseInt(tueFinMins, 10)/60);
	
	var tueTotal;
	
if(parseInt(tueFin, 10)<parseInt(tueStrt, 10)){
	tueTotal = (tueFin+24)-tueStrt;
	}	else {
		tueTotal = tueFin-tueStrt;
	}
	document.getElementById("ResultTue").value = tueTotal;
}

function calculateIfWed() {

var wedStrtHrs = document.getElementById("wedStrtHrs").value;
var wedStrtMins = document.getElementById("wedStrtMins").value;
var wedStrt = parseInt(wedStrtHrs, 10) + (parseInt(wedStrtMins, 10)/60);
var wedFinHrs = document.getElementById("wedFinHrs").value;
var wedFinMins = document.getElementById("wedFinMins").value;
var wedFin = parseInt(wedFinHrs, 10) + (parseInt(wedFinMins, 10)/60);

	var wedTotal;
	
if(parseInt(wedFin, 10)<parseInt(wedStrt, 10)){
	wedTotal = (wedFin+24)-wedStrt;
}	else {
		wedTotal = wedFin - wedStrt;
	}
	document.getElementById("ResultWed").value = wedTotal;
}

function calculateIfThu() {

var thuStrtHrs = document.getElementById("thuStrtHrs").value;
var thuStrtMins = document.getElementById("thuStrtMins").value;
var thuStrt = parseInt(thuStrtHrs, 10) + (parseInt(thuStrtMins, 10)/60);
var thuFinHrs = document.getElementById("thuFinHrs").value;
var thuFinMins = document.getElementById("thuFinMins").value;
var thuFin = parseInt(thuFinHrs, 10) + (parseInt(thuFinMins, 10)/60);

	var thuTotal;
	
if(parseInt(thuFin, 10)<parseInt(thuStrt, 10)){
	thuTotal = (thuFin+24) - thuStrt;
}	else {
		thuTotal = thuFin - thuStrt;
	}
	document.getElementById("ResultThu").value = thuTotal;
}

function calculateIfFri() {	
var friStrtHrs = document.getElementById("friStrtHrs").value;
var friStrtMins = document.getElementById("friStrtMins").value;
var friStrt = parseInt(friStrtHrs, 10) + (parseInt(friStrtMins, 10)/60);
var friFinHrs = document.getElementById("friFinHrs").value;
var friFinMins = document.getElementById("friFinMins").value;
var friFin = parseInt(friFinHrs, 10) + (parseInt(friFinMins, 10)/60);

	var friTotal;
	
if(parseInt(friFin, 10)<parseInt(friStrt, 10)){
	friTotal = (friFin+24)-friStrt;
	}	else {
		 friTotal = friFin-friStrt;
	}
	document.getElementById("ResultFri").value = friTotal;
}

function calculateIfSat() {
var satStrtHrs = document.getElementById("satStrtHrs").value;
var satStrtMins = document.getElementById("satStrtMins").value;
var satStrt = parseInt(satStrtHrs, 10) + (parseInt(satStrtMins, 10)/60);
var satFinHrs = document.getElementById("satFinHrs").value;
var satFinMins = document.getElementById("satFinMins").value;
var satFin = parseInt(satFinHrs, 10) + (parseInt(satFinMins, 10)/60);
	var satTotal;
if(parseInt(satFin, 10)<parseInt(satStrt, 10)) {
	satTotal = (satFin + 24)-satStrt;
	}	else {
		 satTotal = satFin-satStrt;
	}
		document.getElementById("ResultSat").value = satTotal;
}

function calculateIfSun() {
var sunStrtHrs = document.getElementById("sunStrtHrs").value;
var sunStrtMins = document.getElementById("sunStrtMins").value;
var sunStrt = parseInt(sunStrtHrs, 10) + (parseInt(sunStrtMins, 10)/60);
var sunFinHrs = document.getElementById("sunFinHrs").value;
var sunFinMins = document.getElementById("sunFinMins").value;
var sunFin = parseInt(sunFinHrs, 10) + (parseInt(sunFinMins, 10)/60);
	var sunTotal;
if(parseInt(sunFin, 10)<parseInt(sunStrt, 10)){
	 sunTotal = (sunFin+24)-sunStrt;
	 }	else {
		 sunTotal = sunFin-sunStrt;
	}
	document.getElementById("ResultSun").value = sunTotal;
}

//This function gets the total by adding all of the results together
function showTotal() {
var monHoursTot = document.getElementById("ResultMon").value;
var monday;
var tuesday;
var wednesday;
var thursday;
var friday;
var saturday;
var sunday;
	
	if(monHoursTot > 0) {
		monday = monHoursTot;
	}
		else {
		monday = 0;
		}

	var tueHoursTot = document.getElementById("ResultTue").value;
	
	if(tueHoursTot > 0) {
		 tuesday = tueHoursTot;
	}
		else {
		 tuesday = 0;
		}

	
	var wedHoursTot = document.getElementById("ResultWed").value;
	
	if(wedHoursTot > 0) {
		 wednesday = wedHoursTot;
	}
		else {
		 wednesday = 0;
		}

	
	var thuHoursTot = document.getElementById("ResultThu").value;

	if(thuHoursTot > 0) {
		 thursday = thuHoursTot;
	}
		else {
		 thursday = 0;
		}


	var friHoursTot = document.getElementById("ResultFri").value;

	if(friHoursTot > 0) {
		 friday = friHoursTot;
	}
		else {
		 friday = 0;
		}


	var satHoursTot = document.getElementById("ResultSat").value;

	if(satHoursTot > 0) {
		 saturday = satHoursTot;
	}
		else {
		 saturday = 0;
		}


	var sunHoursTot = document.getElementById("ResultSun").value;
 

	if(sunHoursTot > 0) {
		 sunday = sunHoursTot;
	}
		else {
		 sunday = 0;
		}

	var totalHours = parseFloat(monday, 10) + parseFloat(tuesday, 10) + parseFloat(wednesday, 10) + parseFloat(thursday, 10) + parseFloat(friday, 10) + parseFloat(saturday, 10) + parseFloat(sunday, 10);
	 
	 totalHours = parseFloat(totalHours, 10).toFixed(2);
	 
	 

	document.getElementById("Result").value = totalHours;
	
}

//This function runs all opf the required functions in one bundle
function calculateAll() {
	calculateIfMon();
	calculateIfTue();
	calculateIfWed();
	calculateIfThu();
	calculateIfFri();
	calculateIfSat();
	calculateIfSun();
	showTotal();
	calculatePayment();
}

//this function is used to save the users data in HTML 5 local storage
function saveUserData() {
	
	
	if(document.getElementById("rateOfPay").value == null) {
		
		window.alert("No rate of pay entered");
	} else {
	
		localStorage.setItem("rate_of_pay", document.getElementById("rateOfPay").value);
		localStorage.setItem("tax_rate", document.getElementById("taxFlipswitch").value);
		window.alert("Succesfully Changed!");
		window.location.reload();
	}
}

/*function getLocal() {	
	document.getElementById("display").innerHTML = 
	localStorage.getItem("rate_of_pay")+"<br/>"+localStorage.getItem("tax_rate");
	var rate_of_pay1 = localStorage.getItem("rate_of_pay");
		
}
*/

//This function enables the user to save their own theme choice
function selectTheme() {
localStorage.setItem("theme", document.getElementById("flipswitchTheme").value);
window.location.reload();

	}

//This function analysis if the user has entered data and gives outcomes depending	
function calculatePayment() {
var ROP = localStorage.getItem("rate_of_pay");
 
	 if(localStorage.getItem("rate_of_pay") == "")
	  {
		 window.alert("No rate of pay entered");
	 }	 else {
			fillResults();
			saveResults();

	 }
}

//This function fills the results section with the calculations
function fillResults() {
	var totPay;	
	var weekStart = document.getElementById("Datepicker1").value;
	if(weekStart == "Select week start date") {
		document.getElementById("weekDate").value = "Not Selected";
	}	else {
			document.getElementById("weekDate").value = weekStart;
	}
	var totHours = document.getElementById("Result").value;
	document.getElementById("hours").value = totHours;
	var TR = document.getElementById("resultsTax").value == "none";
	
	
if(document.getElementById("resultsTax").value === "none") {
 totPay = document.getElementById("Result").value * localStorage.getItem("rate_of_pay");
  totPay = totPay.toFixed(2);
	document.getElementById("totalPay").value = "£" + totPay;
	document.getElementById("paymentField").value = "£" + totPay;

} else if(document.getElementById("resultsTax").value === "20") {
 totPay = (document.getElementById("Result").value * localStorage.getItem("rate_of_pay"))*0.8;
 totPay = totPay.toFixed(2);
	document.getElementById("res1").value = "£" + totPay;
	document.getElementById("paymentField").value = "£" + totPay + " (tax applied)";
}}

//This function saves the calculations in HTML5 local storage and fills them anytime the user reloads the app to avoid corruption
function saveResults() { 
localStorage.setItem("WeekBegin", document.getElementById("weekDate").value);
localStorage.setItem("totHrs", document.getElementById("hours").value);
localStorage.setItem("payment", document.getElementById("paymentField").value);
}