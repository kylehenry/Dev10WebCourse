function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function validateItems() {
	var startingBet = Number(document.forms["luckyForm"]["startingBet"].value);
	
	if (startingBet <= 0) {
		alert("Starting bet must be greater than zero");
		return false;
	}
	
	var currMoney = Number(startingBet);
	var numRolls = 0;
	var maxMoney = Number(startingBet);
	var rollsWhenHeldMost = 0;
	
	while (currMoney > 0) {
		// Roll two dice.
		var roll = rollDice() + rollDice();
		numRolls++;
		if (roll == 7) {  // Win
			currMoney += 4;
			if (currMoney > maxMoney) {  // New maximum.
				maxMoney = currMoney;
				rollsWhenHeldMost = numRolls;
			}
		} else {  // Lose
			currMoney--;
		}
	}
	
	document.getElementById("results").style.display = "block";
	document.getElementById("startingBetResult").innerText = startingBet;
	document.getElementById("totalRolls").innerText = numRolls;
	document.getElementById("highestAmount").innerText = "$" + maxMoney;
	document.getElementById("rollCountAtHighest").innerText = rollsWhenHeldMost;
	
	return false;
}