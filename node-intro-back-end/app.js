console.log('Hello world from Node!')

console.log(__dirname)

let fs = require('fs')
let colors = require('colors')
let http = require('http')

fs.readFile(__dirname + '/message.txt', {encoding: 'utf-8'}, (err, data) => {
	console.log('got file!'.rainbow.bgYellow)
	console.log(err, data)
});

let curseWords = [
	'fuck',
	'shit',
	'bitch',
	'damn',
	'hell',
	'goddamnit',
	'sunnuvabitch',
	'motherfucker',
	'the C word',
	'pompous haughty ass daddyfucker',
	'ass',
	'dick',
	'wanker'
]

let pgWords = [
	'blockhead',
	'butt',
	'stupid',
	'idiot',
	'doodoohead',
	'bootybutt',
	'stupidhead',
	'ugly',
	'dummy',
	'stinky'
]

http.createServer(function (req, res) {
	//req and res stand for request and respond
	
	console.log('got a request on port 1337!!!!'.red)
	// console.log(req)
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.writeHead(200, {"content-type": "text/html"})

	let word = curseWords[Math.floor(Math.random()*curseWords.length)]

	if (req.url === "/pg13") {
		word = pgWords[Math.floor(Math.random()*pgWords.length)]
		
	}

	res.end(word)

}).listen(1337)
