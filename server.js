//set up server

var express = require('express'); 
var app = express() 
var bodyParser = require('body-parser'); 

var PORT = process.env.PORT || 8080; 

//create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true})); 

// parse various custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/vnd.custom-type' }))

// parse HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

//tell it to pass the app in this file (express) into the module exports function that we created
require("./app/routing/api-routes.js")(app); 
require("./app/routing/html-routes.js")(app); 

app.listen(PORT, function() {
    console.log('app listening on PORT:' + PORT); 
})



