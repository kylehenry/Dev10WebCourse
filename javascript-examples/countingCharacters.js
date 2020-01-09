function countingCharacters(stringToCount) {
	console.log(stringToCount + " has " + stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind) {
	var characterCount = 0;
	for (var characterPosition = 0; characterPosition < stringToCount.length; 
			characterPosition++) {
		if (stringToCount[characterPosition] == characterToFind) {
			characterCount++;
		}
	}
	
	console.log("String to search in: " + stringToCount);
	console.log("Character to find: " + characterToFind);
	console.log("Number of times the character appears: " + characterCount);
}

// str - string to search
// search - characters to find in str
function countingCharacters3(str, search) {
	var count = 0; // number found
	var numChars = search.length;
	var lastIndex = str.length - numChars;
	
	for (var index = 0; index <= lastIndex; index++) {
		var current = str.substring(index, index + numChars); // if the substring matches our series, increase our counter
		if (current == search) {
			count++;
		}
	}
	
	console.log("String to search in: " + str);
	console.log("Character to find: " + search);
	console.log("Number of times the character appears: " + count);
}