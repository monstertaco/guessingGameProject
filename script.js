 var playerName = prompt("What is your name?");
        console.log(playerName)
		function runQuestionOne() {
			var guess1 = prompt("Have I been to Denmark?").toLowerCase();
			console.log(guess1)
			if(guess1 == "yes" || guess1 == "y") {
				alert("Nice job " + playerName + " you got it! I spent a semester in Denmark in 2010!");
			}
			else {
				alert("You're wrong " + playerName + " I studied in Denmark in 2010.");
			runQuestionOne()
			}
		};
		runQuestionOne()
		function runQuestionTwo() {
			var guess2 = prompt("Do I have a pet fish?").toLowerCase();
			console.log(guess2)
			if(guess2 == "no" || guess2 == "n") {
			alert("Nice job " + playerName + " you got it! I don't have any pets at the moment.")
			}
			else {
			alert("You're wrong " + playerName + " I don't have any pets right now.");
			runQuestionTwo()
			}
		}
        runQuestionTwo()
		function runQuestionThree() {
			var guess3 = prompt("What state am I from?").toLowerCase();
			console.log(guess3)
			switch(guess3) {
				case'california':
					alert("Nice job " + playerName + " you got it! I grew up in Southern California.");
					break;
				case'ca':
					alert("Nice job " + playerName + " you got it! I grew up in Southern California.");
					break;
				case'oregon':
					alert("HINT: Close, but it's one state further South.");
					runQuestionThree();
					break;
				case'washington':
					alert("HINT: Nope, my home state is further South.");
					runQuestionThree();
					break;
				default:
					alert("HINT: It's a state on the West Coast.");
					runQuestionThree();
			};
		};
		runQuestionThree()
		function runQuestionFour() {
			var guess4 = prompt("How old am I?").toLowerCase();
			console.log(guess4)
			console.log(parseInt(guess4))
			if (guess4 == 26 || guess4 == "twenty six" || guess4 == "twenty-six" || guess4 == "twentysix") {
				alert("You got it! I'm 26 years old!")
				var integerCheck = parseInt(guess4);
				console.log(integerCheck);
			}
			else if (integerCheck !== true) {
				alert("Please enter a number!")
				runQuestionFour();
			}
			else if (guess4 < 26) {
				alert("I'm older than that!")
				runQuestionFour();
			}	
			else if (guess4 > 26) {
				alert("I'm younger than that!")
				runQuestionFour();
			};
		};
		runQuestionFour();
		function runQuestionFive() {
			var guess5 = prompt("Do I love tacos?").toLowerCase();
			if (guess5 == "yes" || guess5 == "y") {
				alert("Yes! Tacos are amazing!")
			}
			else {
				alert("Wrong! Try again.")
				runQuestionFive()
			};
		};
		runQuestionFive()