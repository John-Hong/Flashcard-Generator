function ClozeCard (text, cloze) {
	this.text = text;
	this.cloze = cloze;
}

ClozeCard.prototype.showQuestion = function() {
	var partial = this.text.replace(this.cloze, "...");
	console.log("Front: " + partial);
}

ClozeCard.prototype.showAnswer = function() {
	console.log("Back: " + this.cloze);
}

ClozeCard.prototype.showFullText = function() {
	console.log(this.text);
}

ClozeCard.prototype.printCard = function() {
	this.showQuestion();
	this.showAnswer();
}

var card1 = new ClozeCard("80s popstars Duran Duran was made up of five members, three of whom shared the last name 'Taylor', although none were related.", "Duran Duran");

//card1.createPartial();


module.exports = ClozeCard;