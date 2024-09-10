
function convert(choice) {
	// alert("in convert with " + choice);
	conversion_of = choice;
	localStorage.setItem("conversionOf", choice);
	var nextHtml = "conversion.html";
	if (choice == "Currency") {
		nextHtml = "conversionOfCurrency.html";
	}	
	let loginAnchor = document.createElement('a');
   document.body.appendChild(loginAnchor);
   loginAnchor.style.display = 'none';
   loginAnchor.href = nextHtml;
   loginAnchor.click();
//	if (choice == "Currency") {
//    	window.location.href = "file:///C:/1_Professional/PWA/EasyConverterV2/conversionOfCurrency.html";
//	} else {
//    	window.location.href = "file:///C:/1_Professional/PWA/EasyConverterV2/conversion.html";
//	}	
}

document.getElementById('logIn').onclick = function() {
  let loginAnchor = document.createElement('a');
  document.body.appendChild(loginAnchor);
  loginAnchor.style.display = 'none';
  loginAnchor.href = 'login.html';
  loginAnchor.click();
}