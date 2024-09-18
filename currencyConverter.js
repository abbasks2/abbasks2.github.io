var inputField = document.getElementById('input-temp');
var inputUnitDescription = document.getElementById('input-unit-description');
var fromUnitField = document.getElementById('input-unit');
var toUnitField = document.getElementById('output-unit');
var outputField = document.getElementById('output-temp');
var dateOfRatesField = document.getElementById('dateOfRates');
const form = document.getElementById('converter');

// Your API Key: d5ca6d7af7d630285fe1c6a1
// Example Request: https://v6.exchangerate-api.com/v6/d5ca6d7af7d630285fe1c6a1/latest/USD

var currencyTableOriginal = {"provider":"https://www.exchangerate-api.com","WARNING_UPGRADE_TO_V6":"https://www.exchangerate-api.com/docs/free","terms":"https://www.exchangerate-api.com/terms","base":"USD","date":"2024-09-17","time_last_updated":1726531201,"rates":{"USD":1,"AED":3.67,"AFN":69.48,"ALL":89.6,"AMD":387.26,"ANG":1.79,"AOA":939.73,"ARS":962.08,"AUD":1.48,"AWG":1.79,"AZN":1.7,"BAM":1.76,"BBD":2,"BDT":119.51,"BGN":1.76,"BHD":0.376,"BIF":2903.07,"BMD":1,"BND":1.3,"BOB":6.92,"BRL":5.55,"BSD":1,"BTN":83.89,"BWP":13.28,"BYN":3.27,"BZD":2,"CAD":1.36,"CDF":2847.32,"CHF":0.845,"CLP":926.09,"CNY":7.09,"COP":4179.92,"CRC":518.55,"CUP":24,"CVE":99.16,"CZK":22.6,"DJF":177.72,"DKK":6.72,"DOP":59.97,"DZD":132.29,"EGP":48.42,"ERN":15,"ETB":114.05,"EUR":0.899,"FJD":2.22,"FKP":0.757,"FOK":6.72,"GBP":0.757,"GEL":2.69,"GGP":0.757,"GHS":15.95,"GIP":0.757,"GMD":70.63,"GNF":8672.07,"GTQ":7.73,"GYD":209.23,"HKD":7.79,"HNL":24.79,"HRK":6.78,"HTG":131.79,"HUF":354.36,"IDR":15399.96,"ILS":3.74,"IMP":0.757,"INR":83.89,"IQD":1308.46,"IRR":42045.68,"ISK":136.96,"JEP":0.757,"JMD":157.53,"JOD":0.709,"JPY":140.59,"KES":129.14,"KGS":84.49,"KHR":4064.71,"KID":1.48,"KMF":442.43,"KRW":1319.96,"KWD":0.305,"KYD":0.833,"KZT":480.23,"LAK":21944.5,"LBP":89500,"LKR":301.55,"LRD":199.82,"LSL":17.63,"LYD":4.77,"MAD":9.76,"MDL":17.46,"MGA":4547.63,"MKD":55.55,"MMK":2100.81,"MNT":3386.55,"MOP":8.03,"MRU":39.77,"MUR":45.86,"MVR":15.42,"MWK":1742.65,"MXN":19.24,"MYR":4.3,"MZN":63.92,"NAD":17.63,"NGN":1642.4,"NIO":36.8,"NOK":10.6,"NPR":134.22,"NZD":1.62,"OMR":0.384,"PAB":1,"PEN":3.78,"PGK":3.94,"PHP":55.79,"PKR":278.54,"PLN":3.85,"PYG":7793.02,"QAR":3.64,"RON":4.47,"RSD":105.31,"RUB":90.56,"RWF":1353.51,"SAR":3.75,"SBD":8.31,"SCR":13.44,"SDG":454.05,"SEK":10.18,"SGD":1.3,"SHP":0.757,"SLE":22.6,"SLL":22599.88,"SOS":571.93,"SRD":29.56,"SSP":3243.83,"STN":22.03,"SYP":13139.55,"SZL":17.63,"THB":33.23,"TJS":10.63,"TMT":3.5,"TND":3.03,"TOP":2.32,"TRY":34.01,"TTD":6.77,"TVD":1.48,"TWD":31.85,"TZS":2707.92,"UAH":41.41,"UGX":3715.88,"UYU":41.04,"UZS":12723.36,"VES":36.78,"VND":24545.29,"VUV":117.87,"WST":2.71,"XAF":589.91,"XCD":2.7,"XDR":0.739,"XOF":589.91,"XPF":107.32,"YER":250.27,"ZAR":17.63,"ZMW":26.46,"ZWL":13.96}};

var currencyListFrom = ["xxx","USD","INR","EUR","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","FJD","FKP","FOK","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KID","KMF","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SLL","SOS","SRD","SSP","STN","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VES","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWL"];

var currencyListTo = ["xxx","INR","USD","EUR","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","FJD","FKP","FOK","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KID","KMF","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SLL","SOS","SRD","SSP","STN","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VES","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWL"];

fromUnitField.addEventListener("change", (event) => {
	fromUnitSelected = document.getElementById('input-unit').value;
	inputField.value = 1;
	processInput();
});
var conversion_of = 'x';

function add_options_from() {
	// alert("in add_options_from()");
	document.getElementById('input-unit').options.length = 0;
    var x = document.getElementById('input-unit');
	for (let i=0; i < currencyListFrom.length; i++) {
		if (currencyListFrom[i] == "xxx") {
			continue;
		}
		if (i > 0) {
			if (currencyListFrom[i] == currencyListFrom[0]) {
				continue;
			}
		}
        var option_1 = document.createElement("option");
	    option_1.text = currencyListFrom[i];
	    option_1.value = currencyListFrom[i];;
        x.add(option_1);
	}
}

function add_options_to() {
	// alert("in add_options_to()");
	document.getElementById('output-unit').options.length = 0;
    var x = document.getElementById('output-unit');
	for (let i=0; i < currencyListTo.length; i++) {
    	if (currencyListTo[i] == "xxx") {
			continue;
		}
		if (i > 0) {
			if (currencyListTo[i] == currencyListTo[0]) {
				continue;
			}
		}
        var option_1 = document.createElement("option");
	    option_1.text = currencyListTo[i];
	    option_1.value = currencyListTo[i];;
        x.add(option_1);
	}
}

function convertInput(value, fromUnit, toUnit) {
	// alert('in convertInput with ' + value + ', ' + fromUnit + ', ' + toUnit);
	// alert('currencyRate = ' + currencyRate);
	var fromRate = currencyTable.rates[fromUnit];
	var toRate = currencyTable.rates[toUnit];
	// alert('in convertInput with value, toRate, fromRate ' + value + ', ' + toRate + ', ' + fromRate);
	return (value * toRate / fromRate);
}	

var savedFromUnit = "xxx";
var savedToUnit = "xxx";

function processInput() {
    var inputValueStr = inputField.value;
   	let r = /[a-z]/gi;
    inputValueStr = inputValueStr.replace(r, "");
    var inputValue = parseFloat(inputValueStr);
 	inputField.value = inputValueStr;
   const fromUnit = fromUnitField.value;
    const toUnit = toUnitField.value;
	if (fromUnit == savedFromUnit && toUnit == savedToUnit) {
	} else {
		// alert("saving currency choices!");
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
	// alert("in startUp() with date = " + currencyTableOriginal.date);
	getCurrencyRates();
}

async function getCurrencyRates() {
	// async function getData() {
    const url = "https://api.exchangerate-api.com/v4/latest/USD";
	try{
        const response = await fetch(url);
        if (!response.ok) {
		    // alert("response not OK");
            // throw new Error(`Response status: ${response.status}`);
			var currencyTableOld = localStorage.getItem("currencyTable");
	        if (!currencyTableOld) {
		         // alert("referencing original currencyTable of app");
		         currencyTableOld = currencyTableOriginal;
	        }
	        displayResults(currencyTableOld);
            return;
        }
        const json = await response.json();
        displayResults(json);
  } catch (error) {
     // alert("error in getCurrencyRates " + error.message);
	 var currencyTableOld = localStorage.getItem("currencyTable");
	 if (!currencyTableOld) {
		 // alert("referencing original currencyTable of app");
		 currencyTableOld = currencyTableOriginal;
	 }
	 displayResults(currencyTableOld);
  }
}
	
var dateOfRatesValues = "xxx";

function displayResults(currency) {
	// alert("in displayResults");
	localStorage.setItem("currencyTable", currency);
	currencyTable = currency;
	dateOfRates = currencyTable.date;
	 // const isoDate = "2023-11-10T11:00:00"; 
	 const dateObject = new Date(dateOfRates); 
	 const date = dateObject. toLocaleString('en-US', {month: 'short', day: 'numeric', year: 'numeric'});
	// alert("date of Rates " + dateOfRates);
	dateOfRatesField.value = dateOfRatesField.value + date + " UTC)";

	var fromCurrency = localStorage.getItem("fromCurrency");
	if (!fromCurrency) {
	} else {
	    currencyListFrom[0] = fromCurrency;
	    var toCurrency     = localStorage.getItem("toCurrency");
	    currencyListTo[0] = toCurrency;
	}
	// alert("fromCurrency and toCurrency = " + fromCurrency + ", " + toCurrency);
    add_options_from();
	add_options_to();
	processInput();
}

function getCurrencyRatesOld() {
	// Include api for currency change
	// alert("in getCurrencyRates");
    const api = "https://api.exchangerate-api.com/v4/latest/USD";
    fetch(`${api}`)
        .then(currency => {
			// alert("before return of currency.json()");
            return currency.json();
        }).then(displayResults);
    // Display results after conversion
}    

form.addEventListener('input', () => {
	processInput();
});
