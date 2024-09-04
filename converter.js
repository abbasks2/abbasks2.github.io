const inputField = document.getElementById('input-temp');
const inputUnitDescription = document.getElementById('input-unit-description');
const fromUnitField = document.getElementById('input-unit');
const toUnitField = document.getElementById('output-unit');
const outputField = document.getElementById('output-temp');
const form = document.getElementById('converter');
const selectElement = document.querySelector("input-unit");
// const result = document.querySelector(".result");

fromUnitField.addEventListener("change", (event) => {
});
var conversion_of = 'x';

function add_options(element_id, option_value_1, option_text_1, option_value_2, option_text_2) {
    document.getElementById(element_id).options.length = 0;
	var x = document.getElementById(element_id);
    var option_1 = document.createElement("option");
	option_1.value = option_text_1;  // option_value_1;
	option_1.text = option_text_1;
    x.add(option_1);
    var option_2 = document.createElement("option");
	option_2.value = option_text_2;  // option_value_2;
	option_2.text = option_text_2;
    x.add(option_2);
}

function add_temperature_options() {
	add_options('input-unit', 'f', 'Fahrenheit', 'c', 'Celsius');
	add_options('output-unit', 'c', 'Celsius', 'f', 'Fahrenheit');
}

function add_distance_options() {
	add_options('input-unit', 'k', 'Kms', 'm', 'Miles');
	add_options('output-unit', 'm', 'Miles', 'k', 'Kms');
}


function add_length_options() {
	add_options('input-unit', 'c', 'cms', 'i', 'inches');
	add_options('output-unit', 'i', 'inches', 'c', 'cms');
}

function convert(choice) {
		conversion_of = choice;
		if (choice == 'Temperature') {
			add_temperature_options();
		} else if (choice == 'Distance') {
			add_distance_options();
		} else if (choice == 'Length') {
			add_length_options();
		}
}
	
const formulas =[ ['Celsius', 'Fahrenheit', 0, 9/5, 32],
                             ['Miles', 'Kms', 0, 1.609, 0] ,
                             ['USD', 'INR', 0, 85, 0] ,
							 ['cms', 'inches', 0, 1/2.54, 0] ];

function convertInput(value, fromUnit, toUnit) {
	alert('in convertInput with ' + value + ', ' + fromUnit + ', ' + toUnit);
    for (let i=0; i < formulas.length; i++) {
        if (fromUnit === formulas[i][0]) {
			alert('fromUnit found');
			return ( ( (formulas[i][2] + value) * formulas[i][3] ) + formulas[i][4]);
		} else if (fromUnit === formulas[i][1]) {
			return (((value - formulas[i][4]) / formulas[i][3]) - formulas[i][2]);
		}
	}
	return 0;
}	

form.addEventListener('input', () => {
  //	alert('in form.addEventListener');
  const inputValue = parseFloat(inputField.value);
  const fromUnit = fromUnitField.value;
  const toUnit = toUnitField.value;
  inputUnitDescription.value = fromUnit.toUpperCase();
  const outputValue = convertInput(inputValue, fromUnit, toUnit);
   alert('outputValue = ' + outputValue);
  outputField.value = outputValue.toFixed(2) + ' ' + toUnit.toUpperCase();
});
