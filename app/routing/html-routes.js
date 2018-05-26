var path = require("path");

//build routes to tell which page to deliver based on the url


//i want to pass in the paramater app which refers to express and then when the user hits the url /survey i want to deliver the file "survey.html"
module.exports = function (app) {

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html")); 
    }); 
// create a route for the home page - it is different because we dont have an exact url - if using app and not on a predefined url then go to the home page
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html")); 
    }); 

}

//include out html.route file in our server.js

