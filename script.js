 var playerName = prompt("What is your name?");
        console.log(playerName);
    	function runQuestionOne() {
			var guess1 = prompt("Have I been to Denmark?").toLowerCase();
			console.log(guess1);
			if(guess1 == "yes" || guess1 == "y") {
				document.getElementById('denmark').innerHTML = "Nice job " + playerName + " you got it! I spent a semester in Denmark in 2010!";
			}
			else {
				document.getElementById('denmark').innerHTML = "You're wrong " + playerName + " I studied in Denmark in 2010.";
			runQuestionOne();
			}
		}
		runQuestionOne();
		function runQuestionTwo() {
			var guess2 = prompt("Do I have a pet fish?").toLowerCase();
			console.log(guess2);
			if(guess2 == "no" || guess2 == "n") {
			document.getElementById('fish').innerHTML = "Nice job " + playerName + " you got it! I don't have any pets at the moment.";
			}
			else {
			document.getElementById('fish').innerHTML = "You're wrong " + playerName + " I don't have any pets right now.";
			runQuestionTwo();
			}
		}
        runQuestionTwo();
		function runQuestionThree() {
			var guess3 = prompt("What state am I from?").toLowerCase();
			console.log(guess3);
			switch(guess3) {
				case'california':
					document.getElementById('myState').innerHTML = "Nice job " + playerName + " you got it! I grew up in Southern California.";
					break;
				case'ca':
					document.getElementById('myState').innerHTML = "Nice job " + playerName + " you got it! I grew up in Southern California.";
					break;
				case'oregon':
					document.getElementById('myState').innerHTML = "HINT: Close, but it's one state further South.";
					runQuestionThree();
					break;
				case'washington':
					document.getElementById('myState').innerHTML = "HINT: Nope, my home state is further South.";
					runQuestionThree();
					break;
				default:
					document.getElementById('myState').innerHTML = "HINT: It's a state on the West Coast.";
					runQuestionThree();
			}
		}
		runQuestionThree();

		function runQuestionFour() {
			var guess4 = prompt("How old am I?").toLowerCase();
			console.log(guess4);
			console.log(parseInt(guess4));
			if (guess4 == 26 || guess4 == "twenty six" || guess4 == "twenty-six" || guess4 == "twentysix") {
				document.getElementById('age').innerHTML = "You got it! I'm 26 years old!";
				var integerCheck = parseInt(guess4);
				console.log(integerCheck);
			}
			else if (guess4 < 26) {
				document.getElementById('age').innerHTML = "I'm older than that!";
				runQuestionFour();
			}	
			else if (guess4 > 26) {
				document.getElementById('age').innerHTML = "I'm younger than that!";
				runQuestionFour();
			}
			else if (integerCheck !== true) {
				document.getElementById('age').innerHTML = "Please enter a number!";
				runQuestionFour();
			}
		}
		runQuestionFour();
		function runQuestionFive() {
			var guess5 = prompt("Do I love tacos?").toLowerCase();
			if (guess5 == "yes" || guess5 == "y") {
				document.getElementById('tacos').innerHTML = "Yes! Tacos are amazing!";
			}
			else {
				document.getElementById('tacos').innerHTML = "Wrong! Try again.";
				runQuestionFive();
			}
		}
		runQuestionFive();
		    function runQuestionSix() {
			var guess6 = prompt("How many US states have I been to?").toLowerCase();
			console.log(guess6);
			console.log(parseInt(guess6));
			if (guess6 == 44 || guess6 == "forty four" || guess6 == "forty-four" || guess6 == "fortyfour") {
				document.getElementById('states').innerHTML = "You got it! I've been to 44 states!";
				var integerCheckTwo = parseInt(guess6);
				console.log(integerCheckTwo);
			}
			else if (guess6 < 44) {
				document.getElementById('states').innerHTML = "I've been to more states than that!";
				runQuestionSix();
			}	
			else if (guess6 > 44) {
				document.getElementById('states').innerHTML = "I haven't been to that many states!";
				runQuestionSix();
			}
            else if (integerCheckTwo !== true) {
    			document.getElementById('states').innerHTML = "Please enter a number!";
				runQuestionSix();
            }
		}
		runQuestionSix();