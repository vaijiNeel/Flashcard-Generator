//load modules
var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");

//Basic card with new keyword
var basicFlashC = new BasicCard("Who was the first president of the United States?","George Washington");
basicFlashC.printQuestion();
basicFlashC.printAnswer();
console.log("----------------------------------------------");

//Basic card without new keyword
var basicNoNew = BasicCard("What major airline began as a crop-dusting service?","Delta");
basicNoNew.printQuestion();
basicNoNew.printAnswer();
console.log("----------------------------------------------");

//Cloze card with new keyword
var clozeFlashC = new ClozeCard("New York's old name is New Amsterdam","New Amsterdam");
clozeFlashC.printPartialText();
clozeFlashC.printClozeDeletion();
clozeFlashC.printFullText();
console.log("----------------------------------------------");

//Cloze card without new keyword
var clozeNoNew = ClozeCard("There are 50 stars in the American flag","50");
clozeNoNew.printPartialText();
clozeNoNew.printClozeDeletion();
clozeNoNew.printFullText();
console.log("----------------------------------------------");
