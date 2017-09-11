var inquirer = require("inquirer");
//load modules
var cloze = require("./ClozeCard.js");
var basic = require("./BasicCard.js");

//Quiz Questions
var questionArr = [
	{"Who was the first president of the United States?", "George Washington"},
	{"What major airline began as a crop-dusting service?", "Delta"},
	{"What was New York called before it was New York?", "New Amsterdam"},
	{"How many stars are there in the American flag?", "50"} ];

var counter = 0;
function quiz() {
	if(counter<questionArr.length){
		var obj;
		if(counter === 0) {
			//create basic card using new keyword
			var basicFlashCard = new BasicCard();
			basicFlashCard.printQuestion();
			obj = basicFlashCard;
		} else if(counter === 1) {
			//create basic card without new keyword
			var basicNoNew = BasicCard();
			basicNoNew.printQuestion();
			obj = basicNoNew;
		} else if(counter === 2) {
			//create cloze card using new keyword
			var clozeFlashCard = new ClozeCard();
			clozeFlashCard.printQuestion();
			obj = clozeFlashCard;
		} else if(counter === 3) {
			//create cloze card without new keyword
			var clozeNoNew = ClozeCard();
			clozeNoNew.printQuestion();
			obj = clozeNoNew;
		}
		//ask user to answer
		inquirer.prompt([
			{
				type: "list",
		      	message: "Do you know the answer or need help?",
		      	choices: ["Answer", "Need help"],
		      	name: "quizAns"
			}
		]).then(function(inquirerResponse) {
			if(inquirerResponse.quizAns === "Answer") {
				inquirer.prompt([
					{
						type: "input",
				      	message: "Enter starting bid:",
				      	name: "startingBid",
				      	validate: function(value) {
				      		return (value === obj.back);
				      	}
					}
				]).then(function(inquirerResponse) {
					result = inquirerResponse.itemName + "," + inquirerResponse.startingBid;
					console.log("insert data" + result);
					createData(result);		
				});
				
			} else if(inquirerResponse.quizAns === "Need help") {
				obj.printAnswer();
			} 
		});
	}
}

quiz();
// In which famous French palace will you find the Hall of Mirrors? Versailles