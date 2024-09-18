var inputField = document.getElementById('input-temp');
var inputUnitDescription = document.getElementById('input-unit-description');
var fromUnitField = document.getElementById('input-unit');
var toUnitField = document.getElementById('output-unit');
var outputField = document.getElementById('output-temp');
const form = document.getElementById('converter');
var option_text_1 = 'x';
var option_text_2 = 'x';
var conversionChoice = "xxx";

const formulas =[ 
                             ['Distance', 'Miles', 'Kms', 0, 1.609, 0] ,
							 ['Length', 'cms', 'inches', 0, 1/2.54, 0],
                             ['Temperature', 'Celsius', 'Fahrenheit', 0, 9/5, 32],
                             ['Volume', 'Liters', 'US Gallons', 0, 0.264172, 0],
                             ['Weight', 'Kgs', 'Lbs', 0, 2.2046, 0]
							 ];

function convertInput(value, fromUnit, toUnit) {
	// alert('in convertInput with ' + value + ', ' + fromUnit + ', ' + toUnit);
	// alert("conversionChoice = " + conversionChoice);
	localStorage.setItem(conversionChoice + "From", fromUnit);
	localStorage.setItem(conversionChoice + "To", toUnit);
    for (let i=0; i < formulas.length; i++) {
        if (fromUnit === formulas[i][1]) {
			return ( ( (formulas[i][3] + value) * formulas[i][4] ) + formulas[i][5]);
		} else if (fromUnit === formulas[i][2]) {
			return (((value - formulas[i][5]) / formulas[i][4]) - formulas[i][3]);
		}
	}
	return 0;
}	

function startUp() {
	conversionChoice = localStorage.getItem("conversionOf");
	// alert("conversionChoice = " + conversionChoice);
	document.getElementById("conversionChoice").innerHTML = conversionChoice;
	for (let i=0; i < formulas.length; i++) {
        if (conversionChoice === formulas[i][0]) {
			var conversionChoiceFrom = localStorage.getItem(conversionChoice + "From");
			var conversionChoiceTo     = localStorage.getItem(conversionChoice + "To");
			// alert("from and to units are " + conversionChoiceFrom + ", " + conversionChoiceTo);
			if (conversionChoiceFrom && conversionChoiceTo) {
			} else {
				conversionChoiceFrom = formulas[i][1];
				conversionChoiceTo    = formulas[i][2];
			}	
            add_options(conversionChoiceFrom, conversionChoiceTo);
			break;
		}
	}
}


fromUnitField.addEventListener("change", (event) => {
	// alert('in fromUnitField change with ' + document.getElementById('input-unit').value);
	fromUnitSelected = document.getElementById('input-unit').value;
	if (fromUnitSelected === option_text_1) {
		toUnitField.value = option_text_2;
	} else {
		toUnitField.value = option_text_1;
    }		
	inputField.value = 1;
	processInput();
});
var conversion_of = 'x';

function add_options(p_option_text_1, p_option_text_2) {
	// alert("in add_options with " + p_option_text_1 + ", " + p_option_text_2);
	option_text_1 = p_option_text_1;
	option_text_2 = p_option_text_2;
    document.getElementById('input-unit').options.length = 0;
	var x = document.getElementById('input-unit');
    var option_1 = document.createElement("option");
	option_1.text = option_text_1;
	option_1.value = option_text_1;
    x.add(option_1);
    var option_2 = document.createElement("option");
	option_2.text = option_text_2;
	option_2.value - option_text_2;
    x.add(option_2);
	toUnitField.value = option_text_2;
    inputField.value = 1.00;
    fromUnitField.value = option_text_1;
    processInput();
}

function processInput() {
    var inputValueStr = inputField.value;
//	alert("in processInput with inputValue = " + inputValueStr);
	let r = /[a-z]/gi;
//	alert('value of r = ' + r);
//    if(r.test(inputValue)) {
    inputValueStr = inputValueStr.replace(r, "");
    var inputValue = parseFloat(inputValueStr);
 	inputField.value = inputValueStr;
    const fromUnit = fromUnitField.value;
    const toUnit = toUnitField.value;
    inputUnitDescription.value = fromUnit.toUpperCase();
    const outputValue = convertInput(inputValue, fromUnit, toUnit);
   // alert('outputValue = ' + outputValue);
    outputField.value = outputValue.toFixed(2) + ' ' + toUnit.toUpperCase();
}

form.addEventListener('input', () => {
	processInput();
});
