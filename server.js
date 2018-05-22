//set up server

var express = require('express'); 
var app = express() 
var bodyParser = require('body-parser'); 

var PORT = process.env.PORT || 8080; 

//create the application parser
var jsonParser = bodyParser.json()

//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false})

// parse various custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/vnd.custom-type' }))

// parse HTML body into a string
app,use(bodyParser.text({ type: 'text/html' }))

app.listen(PORT, function() {
    console.log('app listening on PORT:' + PORT); 
})



