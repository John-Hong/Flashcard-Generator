//Basic Function

function BasicCard (front, back) {
	this.front = front;
	this.back = back;
}

BasicCard.prototype.showQuestion = function () {
	console.log("Front: " + this.front);
}

BasicCard.prototype.showAnswer = function () {
	console.log("Back: " + this.back);
}

BasicCard.prototype.printCard = function() {
	this.showQuestion();
	this.showAnswer();
}

var card1 = new BasicCard("Which '80s band was made up of five members, three of whom shared the last name 'Taylor', although none were related?", "Duran Duran");

//card1.showQuestion();
//card1.showAnswer();

module.exports = BasicCard;