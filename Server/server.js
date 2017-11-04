var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
const Clarifai = require('clarifai');

app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());

const clarifaiApp = new Clarifai.App({
	apiKey: 'fd87ab258b3349538f837a7cb36886bb'
});

/*
app.get('/recognition', function(req,res){
	console.log(">>>> "+req.param('img'));
	clarifaiApp.models.predict(Clarifai.FOOD_MODEL, {base64: decodeURIComponent(req.param('img'))}).then( //, {minValue: 0.8, maxConcepts: 5}
		function(response) {
			console.log("---------");
			console.log(response);
			const matchedList = {
				"list": response.outputs[0].data.concepts.map(function(item) { return item['name']; })
			}
			console.log("---------");
			console.log(matchedList);
			console.log("---------");
			res.send(matchedList)
		},
		function(err) {
			console.log(err.message);
			res.send({"list": "An error occurred"});
		}
	);
});
*/

app.post('/recognition', function(req,res){
	console.log(">>>> "+req.body.img);
	
	res.send("Got IT!")
	
	/*
	clarifaiApp.models.predict(Clarifai.FOOD_MODEL, {base64: decodeURIComponent(req.body('img'))}).then( //, {minValue: 0.8, maxConcepts: 5}
		function(response) {
			console.log("---------");
			console.log(response);
			const matchedList = {
				"list": response.outputs[0].data.concepts.map(function(item) { return item['name']; })
			}
			console.log("---------");
			console.log(matchedList);
			console.log("---------");
			res.send(matchedList)
		},
		function(err) {
			console.log(err.message);
			res.send({"list": "An error occurred"});
		}
	);
	*/
});

app.listen(3000, '192.168.137.137', function(){
	console.log('Server running at 192.168.137.137:3000/');
});