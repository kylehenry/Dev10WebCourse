function clearErrors() {
	for (var loopCounter = 0;
		 loopCounter < document.forms["evensForm"].elements.length;
		 loopCounter++) {
			 
		if (document.forms["evensForm"].elements[loopCounter].parentElement
			.className.indexOf("has-") != -1) {
		
			document.forms["evensForm"].elements[loopCounter].parentElement
				.className = "form-group";
		}
	}
}

function findEvens(startingNumber, endingNumber, step) {
	var evens = [];
	var current = Number(startingNumber);
	
	while (current <= endingNumber) {
		if (current % 2 == 0) {
			evens.push(current);
		}
		current += Number(step);
	}
	return evens;
}

function validateItems() {
	clearErrors();
	var startingNumber = document.forms["evensForm"]["startingNumber"].value;
	var endingNumber = document.forms["evensForm"]["endingNumber"].value;
	var step = document.forms["evensForm"]["step"].value;
	
	if (startingNumber == "" || isNaN(startingNumber)) {
		alert("Starting Number must be filled in with a number.");
		document.forms["evensForm"]["startingNumber"].parentElement.className = "form-group has-error";
		document.forms["evensForm"]["startingNumber"].focus();
		return false;
	}
	
	if (endingNumber == "" || isNaN(endingNumber)) {
		alert("Ending Number must be filled in with a number.");
		document.forms["evensForm"]["endingNumber"].parentElement.className = "form-group has-error";
		document.forms["evensForm"]["endingNumber"].focus();
		return false;
	}
	
	if (step == "" || isNaN(step)) {
		alert("Step must be filled in with a number.");
		document.forms["evensForm"]["step"].parentElement.className = "form-group has-error";
		document.forms["evensForm"]["step"].focus();
		return false;
	}
	
	var evens = findEvens(startingNumber, endingNumber, step);
	var resultsElement = document.getElementById("results");
	var resultsString = "Here are the even numbers between " + startingNumber + " and " + endingNumber + " by " + step + "'s:\n";
	for (var i = 0; i < evens.length; i++) {
		var numString = evens[i] + "\n";
		resultsString += numString;
	}
	resultsElement.innerText = resultsString;
	
	return false;
}