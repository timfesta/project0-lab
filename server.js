// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// seed data
var ishList = [
	{
		id: 1,
		description: "I know how hard it is for you to put food on your family.",
		name: "George Bush",
		badge: 14
	},
	{
		id: 2,
		description: "When someone comes up and says something like, 'I am a god,' everybody says 'Who does he think he is?' I just told you who I thought I was. A god. I just told you",
		name: "Kanye",
		badge: 14
	},
	{
		id:3,
		description: "There has got to be more to life than just being really, really, really ridiculously good looking",
		name: "Derek Zoolander",
		badge: 14
	}
];

app.get('/',function(req,res){
	res.sendFile(__dirname + '/public/views/index.html')
})

app.get('/api/index', function (req, res) {
	res.json(phrases);
})

// ---- create new post
app.post('api/index', function (req, res) {
	var newIsh = req.body;

	ishList.push(newIsh);

	res.json(newIsh);
})
// listen on port 3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});