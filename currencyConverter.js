
const debugMode = 0;
var inputField = document.getElementById('input-temp');
var inputUnitDescription = document.getElementById('input-unit-description');
var fromUnitField = document.getElementById('input-unit');
var toUnitField = document.getElementById('output-unit');
var outputField = document.getElementById('output-temp');
var dateOfRatesField = document.getElementById('dateOfRates');
var dateOfRatesValues = "xxx";

const form = document.getElementById('converter');
const api = "https://v6.exchangerate-api.com/v6/d5ca6d7af7d630285fe1c6a1/latest/USD";
// Your API Key: d5ca6d7af7d630285fe1c6a1
// Example Request: https://v6.exchangerate-api.com/v6/d5ca6d7af7d630285fe1c6a1/latest/USD

var currencyTable = {};
var savedFromUnit = "xxx";
var savedToUnit = "xxx";
var currencyTableStored = {
 "result":"success",
 "documentation":"https://www.exchangerate-api.com/docs",
 "terms_of_use":"https://www.exchangerate-api.com/terms",
 "time_last_update_unix":1726531201,
 "time_last_update_utc":"Tue, 17 Sep 2024 00:00:01 +0000",
 "time_next_update_unix":1726617601,
 "time_next_update_utc":"Wed, 18 Sep 2024 00:00:01 +0000",
 "base_code":"USD",
 "conversion_rates":{
  "USD":1,
  "AED":3.6725,
  "AFN":69.4762,
  "ALL":89.5953,
  "AMD":387.2631,
  "ANG":1.7900,
  "AOA":939.7286,
  "ARS":962.0800,
  "AUD":1.4826,
  "AWG":1.7900,
  "AZN":1.7004,
  "BAM":1.7589,
  "BBD":2.0000,
  "BDT":119.5104,
  "BGN":1.7588,
  "BHD":0.3760,
  "BIF":2903.0652,
  "BMD":1.0000,
  "BND":1.2957,
  "BOB":6.9214,
  "BRL":5.5453,
  "BSD":1.0000,
  "BTN":83.8880,
  "BWP":13.2754,
  "BYN":3.2656,
  "BZD":2.0000,
  "CAD":1.3582,
  "CDF":2847.3207,
  "CHF":0.8450,
  "CLP":926.0895,
  "CNY":7.0943,
  "COP":4179.9242,
  "CRC":518.5490,
  "CUP":24.0000,
  "CVE":99.1652,
  "CZK":22.5979,
  "DJF":177.7210,
  "DKK":6.7162,
  "DOP":59.9664,
  "DZD":132.2916,
  "EGP":48.4201,
  "ERN":15.0000,
  "ETB":114.0476,
  "EUR":0.8993,
  "FJD":2.2173,
  "FKP":0.7574,
  "FOK":6.7163,
  "GBP":0.7574,
  "GEL":2.6942,
  "GGP":0.7574,
  "GHS":15.9494,
  "GIP":0.7574,
  "GMD":70.6341,
  "GNF":8672.0691,
  "GTQ":7.7344,
  "GYD":209.2322,
  "HKD":7.7940,
  "HNL":24.7895,
  "HRK":6.7760,
  "HTG":131.7917,
  "HUF":354.3612,
  "IDR":15399.9680,
  "ILS":3.7404,
  "IMP":0.7574,
  "INR":83.8880,
  "IQD":1308.4617,
  "IRR":42045.6895,
  "ISK":136.9553,
  "JEP":0.7574,
  "JMD":157.5271,
  "JOD":0.7090,
  "JPY":140.5925,
  "KES":129.1407,
  "KGS":84.4901,
  "KHR":4064.7101,
  "KID":1.4826,
  "KMF":442.4440,
  "KRW":1319.9619,
  "KWD":0.3049,
  "KYD":0.8333,
  "KZT":480.2325,
  "LAK":21944.5038,
  "LBP":89500.0000,
  "LKR":301.5520,
  "LRD":199.8219,
  "LSL":17.6340,
  "LYD":4.7727,
  "MAD":9.7578,
  "MDL":17.4630,
  "MGA":4547.6259,
  "MKD":55.5510,
  "MMK":2100.8051,
  "MNT":3386.5499,
  "MOP":8.0278,
  "MRU":39.7703,
  "MUR":45.8573,
  "MVR":15.4206,
  "MWK":1742.6511,
  "MXN":19.2416,
  "MYR":4.3012,
  "MZN":63.9165,
  "NAD":17.6340,
  "NGN":1642.4030,
  "NIO":36.7962,
  "NOK":10.5955,
  "NPR":134.2208,
  "NZD":1.6150,
  "OMR":0.3845,
  "PAB":1.0000,
  "PEN":3.7805,
  "PGK":3.9360,
  "PHP":55.7880,
  "PKR":278.5429,
  "PLN":3.8452,
  "PYG":7793.0224,
  "QAR":3.6400,
  "RON":4.4696,
  "RSD":105.3091,
  "RUB":90.5641,
  "RWF":1353.5077,
  "SAR":3.7500,
  "SBD":8.3075,
  "SCR":13.4412,
  "SDG":454.0603,
  "SEK":10.1839,
  "SGD":1.2958,
  "SHP":0.7574,
  "SLE":22.5999,
  "SLL":22599.8778,
  "SOS":571.9336,
  "SRD":29.5610,
  "SSP":3243.8157,
  "STN":22.0337,
  "SYP":13139.5457,
  "SZL":17.6340,
  "THB":33.2299,
  "TJS":10.6288,
  "TMT":3.5000,
  "TND":3.0348,
  "TOP":2.3238,
  "TRY":34.0055,
  "TTD":6.7653,
  "TVD":1.4826,
  "TWD":31.8545,
  "TZS":2707.9226,
  "UAH":41.4089,
  "UGX":3715.8807,
  "UYU":41.0445,
  "UZS":12723.3564,
  "VES":36.7751,
  "VND":24545.2948,
  "VUV":117.8666,
  "WST":2.7136,
  "XAF":589.9254,
  "XCD":2.7000,
  "XDR":0.7394,
  "XOF":589.9254,
  "XPF":107.3195,
  "YER":250.2697,
  "ZAR":17.6340,
  "ZMW":26.4618,
  "ZWL":13.9563
 }
}

var currencyListFrom = ["xxx","USD","INR","EUR","AED","SAR","KWD"];
var currencyListTo     = ["xxx","INR","USD","EUR","AED","SAR","KWD"];

fromUnitField.addEventListener("change", (event) => {
	fromUnitSelected = document.getElementById('input-unit').value;
	inputField.value = 1;
	// alert("in fromUnitField.addEventListener()");
	processInput();
});
var conversion_of = 'x';

function add_currency(element, currency) {
	// alert("in add_currency with " + element + ", " + currency)
	if (currency == 'xxx') {
		return;
	}
    var option_1 = document.createElement("option");
    option_1.text = currency;
	option_1.value = currency;
    element.add(option_1);
}

function add_options(element_id, initial_currency_list) {
    // alert("in add_options() with element_id and initial_currency_list " +element_id + ", " + initial_currency_list );
	document.getElementById(element_id).options.length = 0;
    var x = document.getElementById(element_id);
	add_currency(x, initial_currency_list[0]);
	for (let i=1; i < initial_currency_list.length; i++) {
		if (initial_currency_list[i] == initial_currency_list[0]) {
			continue;
		}
		// alert("i, currency = " + i + ", " + initial_currency_list[i]);
		add_currency(x, initial_currency_list[i]);
    }
    var keys = Object.keys(currencyTableStored.conversion_rates);
	// alert("keys = " + keys);
	// alert("keys[1] = " + keys[1]); 
	for (let i=0; i < keys.length; i++) {
       var c = keys[i];
	   // alert("currency from table is " + c);
		if (initial_currency_list.includes(c)) {
				continue;
		}
		add_currency(x, c);
	}
}

function convertInput(value, fromUnit, toUnit) {
	 // alert('in convertInput with ' + value + ', ' + fromUnit + ', ' + toUnit);
	 // alert('currencyTable = ' + currencyTable);
	if (typeof currencyTable == "string") {
		currencyTable = JSON.parse(currencyTable);
	   // alert("currencyTable was string and is now = " + currencyTable);
	}
	var fromRate = currencyTable.conversion_rates[fromUnit];
	var toRate = currencyTable.conversion_rates[toUnit];
	// alert('in convertInput with value, toRate, fromRate ' + value + ', ' + toRate + ', ' + fromRate);
	return (value * toRate / fromRate);
}	

function processInput() {
    // alert("in function processInput() ");
	var inputValueStr = inputField.value;
   	let r = /[a-z]/gi;
    inputValueStr = inputValueStr.replace(r, "");
    var inputValue = parseFloat(inputValueStr);
 	inputField.value = inputValueStr;
   const fromUnit = fromUnitField.value;
    const toUnit = toUnitField.value;
	if (fromUnit == savedFromUnit && toUnit == savedToUnit) {
	} else {
		// // alert("saving currency choices!");
    	localStorage.setItem("fromCurrency", fromUnit);
	    localStorage.setItem("toCurrency", toUnit);
		savedFromUnit = fromUnit;
		savedToUnit = toUnit;
	}
    inputUnitDescription.value = fromUnit.toUpperCase();
    const outputValue = convertInput(inputValue, fromUnit, toUnit);
   //  alert('outputValue = ' + outputValue);
    outputField.value = outputValue.toFixed(2) + ' ' + toUnit.toUpperCase();
}

function startUp() {
    // alert("in startUp() with date = " + currencyTableStored.time_last_update_utc);
	// alert("debugMode = " + debugMode);
	if (debugMode == 1) {
	    localStorage.clear();
	}
	var currencyTableStr = localStorage.getItem("currencyTableV6");
	// alert("length of currencyTableStr = " + currencyTableStr.length);
	if  ( (!currencyTableStr) || currencyTableStr.length < 10)												  {
		// alert("did not find the stored currency table!"); 
		getCurrencyRates();
		return;
	}
	// alert("in startup2 currencyTableStr = " + currencyTableStr);
	currencyTable = JSON.parse(currencyTableStr);
	if (!currencyTable.time_last_update_utc) {
		// alert("time_last_update_utc not found!");
		getCurrencyRates();
	} else if (!datesSame(currencyTable.time_last_update_utc, getCurrentDate())) {
    	getCurrencyRates();
	}	else {
		displayResults();
	}
}

function datesSame(currencyTableDate, currentDate) {
	// alert("in datesSame");
	var tableDate = currencyTableDate.replace(",", "");
	var sizeOfCurrentDate = currentDate.length;
	tableDate2 = tableDate.substr(0, sizeOfCurrentDate);
	tableDate2Obj = new Date(tableDate2);
	tableDate3 = tableDate2Obj.toDateString();
	// alert("in datesSame check dates " + tableDate3 + ", " + currentDate);
	return (tableDate3 == currentDate);
}

async function getCurrencyRates() {
	// async function getData() {
	// alert("in getCurrencyRates with api: " + api);
	try{
        const response = await fetch(api);
		// alert("in getCurrencyRates() with response: " + response);
        if (!response.ok) {
		    // alert("response not OK");
            // throw new Error(`Response status: ${response.status}`);
			var currencyTableStr = localStorage.getItem("currencyTableV6");
	        if (!currencyTableStr) {
		         // alert("referencing original currencyTable of app");
		         currencyTable = currencyTableStored;
	        } else {
				currencyTable = JSON.parse(currencyTableStr);
			}
			displayResults();
            return;
        }
        const json = await response.json();
        currencyTable = json;
		// alert("fetched currencyTable = " + currencyTable);
        displayResults();
        // displayResults(json);
  } catch (error) {
     // alert("error in getCurrencyRates " + error.message);
	 var currencyTableStr = localStorage.getItem("currencyTableV6");
	 if (!currencyTableStr) {
		 // alert("referencing original currencyTable of app");
		 currencyTable = currencyTableStored;
	 } else {
		 currencyTable = JSON.parse(currencyTableStr);
     }
	 displayResults();
 }
}
	
function getCurrentDate() {
	// alert("in getCurrentDate()");
	 var dateObject = new Date(); 
	 var dateStr = dateObject.toDateString();
	 // alert("dateStr = " + dateStr);
    return dateStr;
}

function displayResults() {
    // alert("in displayResults");
	var currencyTableStr = JSON.stringify(currencyTable);
    // alert("in displayResults, currencyTableStr = " + currencyTableStr);
    // alert("in displayResults, currencyTable = " + currencyTable);
	localStorage.setItem("currencyTableV6", currencyTableStr);
	var date_utc = currencyTable.time_last_update_utc;
	// alert("date_utc = " + date_utc);
	var dateOfRates = date_utc.substr(0, 16) + " UTC";
	dateOfRatesField.value = dateOfRatesField.value + dateOfRates + ")";
	var fromCurrency = localStorage.getItem("fromCurrency");
	if (!fromCurrency) {
	} else {
	    currencyListFrom[0] = fromCurrency;
	    var toCurrency     = localStorage.getItem("toCurrency");
	    currencyListTo[0] = toCurrency;
	}
	// alert("fromCurrency and toCurrency = " + fromCurrency + ", " + toCurrency);
    add_options("input-unit", currencyListFrom);
	add_options("output-unit", currencyListTo);
	processInput();
}

form.addEventListener('input', () => {
	// alert("in form.addEventListener()");
	processInput();
});
