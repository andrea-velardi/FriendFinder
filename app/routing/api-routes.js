// require in the data from the friends file

var friends = require("../data/friends.js"); 

module.exports = function (app) {
    //build route to view all friends
    app.get("/api/friends", function(req, res){
        res.json(friends); 
    });
    
    app.post("/api/friends", function(req, res){
            var bestMatch = {
        name: "", 
        photo: "", 
        friendDifference: 1000 //track the difference between answer
    }; 

    var userData = req.body; //coming from the user
    var userScores = userData.scores; //scores from user

    //used to calculate between each user
    var totalDifference = 0; 
    //nested for loop
    for (var i = 0; i < friends.length; i++){
        console.log(friends[i]); 
        totalDifference = 0; 

        for (var j = 0; j < friends[i].scores[j]; j++) {
            //if it is negative it turns it positive, and when we run through the loop and our total differene is less than the friend difference re-assign the name and photo to that current friend
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j])); 

            if (totalDifference <= bestMatch.friendDifference){
                bestMatch.name = friends[i].name; 
                bestMatch.photo = friends[i].photo; 
                bestMatch.friendDifference = totalDifference; 
            }
        }
    }
    //we need to do this after the loop so we dont pick the user as their own best friends
    friends.push(userData); 
    //return the best match to the user application in json format
    res.json(bestMatch); 
    }); 
}