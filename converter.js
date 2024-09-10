var inputField = document.getElementById('input-temp');
var inputUnitDescription = document.getElementById('input-unit-description');
var fromUnitField = document.getElementById('input-unit');
var toUnitField = document.getElementById('output-unit');
var outputField = document.getElementById('output-temp');
const form = document.getElementById('converter');
var option_text_1 = 'x';
var option_text_2 = 'x';

const formulas =[ ['Celsius', 'Fahrenheit', 0, 9/5, 32],
                             ['Miles', 'Kms', 0, 1.609, 0] ,
							 ['cms', 'inches', 0, 1/2.54, 0] ];

function convertInput(value, fromUnit, toUnit) {
	// alert('in convertInput with ' + value + ', ' + fromUnit + ', ' + toUnit);
    for (let i=0; i < formulas.length; i++) {
        if (fromUnit === formulas[i][0]) {
			return ( ( (formulas[i][2] + value) * formulas[i][3] ) + formulas[i][4]);
		} else if (fromUnit === formulas[i][1]) {
			return (((value - formulas[i][4]) / formulas[i][3]) - formulas[i][2]);
		}
	}
	return 0;
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
    const inputValue = parseFloat(inputField.value);
    const fromUnit = fromUnitField.value;
    const toUnit = toUnitField.value;
    inputUnitDescription.value = fromUnit.toUpperCase();
    const outputValue = convertInput(inputValue, fromUnit, toUnit);
   // alert('outputValue = ' + outputValue);
    outputField.value = outputValue.toFixed(2) + ' ' + toUnit.toUpperCase();
}

function startUp() {
	var choice = 	localStorage.getItem("conversionOf");
	document.getElementById("conversionChoice").innerHTML = choice;
	// alert("choice = " + choice);
	if (choice == 'Temperature') {
		add_options('Fahrenheit', 'Celsius');
	} else if (choice == 'Distance') {
		add_options('Kms', 'Miles');
	} else if (choice == 'Length') {
		add_options('cms', 'inches');
	}
}

form.addEventListener('input', () => {
	processInput();
});
