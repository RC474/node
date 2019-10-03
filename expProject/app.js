var express = require("express");

var app = express();

let users = {
    r474: "Ramesh Chuwan",
    c248: "Shankar Khatri",
    b789: "Ganga Chuwan"
};
// when you go to "/", you get the message: "Hi There!"
app.get("/", function(req, res){
	res.send("Hi there!");
});

//add bye
app.get("/bye", function(req, res){
    res.send("Goodbye!!");
});

//post or change something

app.get("/post", function(req, res){
    res.send("<input type = 'text' placeholder = 'username'><input type = 'password' placeholder = 'Password'> <button>Submit</button>");
});

 app.get("/user/:userName", function(req, res){
    let user = req.params.userName;
    let name = users[user];
    if(name){
        res.send("WelCome " + name);
    }else{
        res.send("User Not Found!!");
    }
}); 

// if the user types the wrong route, this function will excaute and the console message will display...
app.get("/*", function(req, res){
    res.send("404 PAGE NOT FOUND!!!");
});

// Tell Express to listen for requests (start server);

app.listen(3456, function(){
    console.log("This server is listining in the port!3456!");
});