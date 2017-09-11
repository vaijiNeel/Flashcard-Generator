
function BasicCard(front, back) {
	if (!(this instanceof BasicCard)) { 
		return new BasicCard(front, back);
	}
	this.front = front;
	this.back = back;
}

BasicCard.prototype.printQuestion = function() {
	console.log("\nQuestion - " + this.front);
}

BasicCard.prototype.printAnswer = function() {
	console.log("\nAnswer - " + this.back);
}

module.exports = BasicCard;