var events = require('events');
var util = require('util');

util.inherits(ScoreTable, events.EventEmitter);
//scoreTable functions

ScoreTable.prototype.addGoal = function (){
	this.goals +=1;
	console.log("good! you score  goal");
	msg+="good! you score  goal\r\n";
	this.emit("numGoalsChanged");
};
ScoreTable.prototype.ownGoal = function(){
	if (this.goals==0) {
		console.log("hwoo own goal");
		msg+="hwoo own goal\r\n";
		console.log("Israel Football Association is applied to you about this goal  :)");
		msg+="Israel Football Association is applied to you about this goal  :) \r\n";
	}
	else{
	console.log("hwoo own goal");
	msg+="hwoo own goal \r\n ";
	}
	if (this.goals > 0){
	 this.goals-=1;
	this.emit("numGoalsChanged");
	}
};

//events
function displayGoal  (){
	msg+="you have " + this.goals +" goals \r\n";
	console.log("you have " + this.goals +" goals");
}
function checkGoal (){
	if (this.goals == 0){
		msg+="you must be Goalkeeper \r\n";
		console.log("you must be Goalkeeper");
	}
}

function ScoreTable(info) {
  this.goals = info;
  events.EventEmitter.call(this);
  this.on("numGoalsChanged",displayGoal);
this.on("numGoalsChanged",checkGoal);
}
module.exports = {
  getInstance: function(info) {
      return new ScoreTable(info);
  }
}
