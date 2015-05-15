var http = require ('http');
var events = require('events');
var util = require('util');
var ScoreTable =require('./goal');

config={

}

//gloabal msg

msg="";

var temp ={
	goals : '0',
}
var scoreTable = ScoreTable.getInstance(0);

//activities
scoreTable.addGoal();
scoreTable.addGoal();
scoreTable.ownGoal();
scoreTable.ownGoal();
scoreTable.ownGoal();

var server = http.createServer(cbServer);
function cbServer(req,res){
	res.writeHead(200,{"contant-Type":"text/plain"})
	res.write(msg);
	res.end()
	}
var port = process.env.PORT || 8008;
server.listen(port);