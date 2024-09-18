
function convert(choice) {
	// alert("in convert with " + choice);
	conversion_of = choice;
	localStorage.setItem("conversionOf", choice);
	var nextHtml = "conversion.html";
	if (choice == "Currency") {
		nextHtml = "conversionOfCurrency.html";
	}	
	let menuAnchor = document.createElement('a');
   document.body.appendChild(menuAnchor);
   menuAnchor.style.display = 'none';
   menuAnchor.href = nextHtml;
   menuAnchor.click();
}
