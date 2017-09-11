function ClozeCard(text, cloze) {
	if (!(this instanceof ClozeCard)) { 
		return new ClozeCard(text, cloze);
	}
	this.cloze = cloze;
	this.fullText = text;
	this.partial = text.replace(this.cloze,'...');
}

ClozeCard.prototype.printPartialText = function() {
	console.log("\nPartial Text - " + this.partial);
}

ClozeCard.prototype.printFullText = function() {
	console.log("\nFull Text - " + this.fullText);
}

ClozeCard.prototype.printClozeDeletion = function() {
	console.log("\nCloze Deletion - " + this.cloze);
}

module.exports = ClozeCard;