var inputField = document.getElementById('input-temp');
var inputUnitDescription = document.getElementById('input-unit-description');
var fromUnitField = document.getElementById('input-unit');
var toUnitField = document.getElementById('output-unit');
var outputField = document.getElementById('output-temp');
const form = document.getElementById('converter');
var currencyTable;

var currencyListFrom = ["xxx","USD","INR","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","FOK","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KID","KMF","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SLL","SOS","SRD","SSP","STN","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VES","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWL"];

var currencyListTo = ["xxx","INR","USD","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","FOK","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KID","KMF","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SLL","SOS","SRD","SSP","STN","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VES","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWL"];

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

function processInput() {
    const inputValue = parseFloat(inputField.value);
    const fromUnit = fromUnitField.value;
    const toUnit = toUnitField.value;
	localStorage.setItem("fromCurrency", fromUnit);
	localStorage.setItem("toCurrency", toUnit);
	
    inputUnitDescription.value = fromUnit.toUpperCase();
    const outputValue = convertInput(inputValue, fromUnit, toUnit);
   //  alert('outputValue = ' + outputValue);
    outputField.value = outputValue.toFixed(2) + ' ' + toUnit.toUpperCase();
}

function startUp() {
	var choice = 	localStorage.getItem("conversionOf");
	document.getElementById("conversionChoice").innerHTML = choice;
	// alert("choice = " + choice);
	getCurrencyRates();
}

function getCurrencyRates() {
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

function displayResults(currency) {
	// alert("in displayResults");
	currencyTable = currency;
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

form.addEventListener('input', () => {
	processInput();
});
