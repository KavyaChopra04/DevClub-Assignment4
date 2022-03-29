const { EFAULT } = require("constants");
const http = require("http");
const { getDefaultSettings } = require("http2");

var SECRET = "CIGAR"; // You can set any word as the secret answer

function myFunction(req, res) {
	// console.log({req}); // You can uncomment this to see the request object
	console.log(req.url);
	if(req.url=='/favicon.ico')
	{
		return
	}
	let arr = req.url.split('?q=')
    const guess = arr[1]; // Write logic to parse the word which the user guessed from the URL string
	console.log(guess)
	let feedback = ""; // Write logic to compare the word with the secret, and generate the feedback string
	for(let i=0; i<5;i++)
	{
		if(guess[i]==SECRET[i])
		{
			feedback+='g'
		}
		else if(guess[i]!=SECRET[i]&&SECRET.includes(guess[i]))
		{
			feedback+='y'
		}
		else{
			feedback+='b'
		}
	}
	res.write(feedback);
	res.end();
}
http.createServer(myFunction).listen(8080);
