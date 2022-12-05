const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");

const app=express();
// here we make file static means we all files included in html will be available in public folder and we directly access the files without using the path of public folder
app.use(express.static("public"));
//by this we bring the data of form to our post request
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
})
app.post("/",function(req,res){
    //by bodyparser we use the value of form by this 
 var firstName=req.body.fName;
 var lastName=req.body.lName;
 var email=req.body.email;

 console.log(firstName,lastName,email);
})
app.listen(3000,function(){
    console.log("Here is your server -- http://localhost:3000/  ");
})
// API Key
// 832ab42aed9a57d8751b7317e02e1dec-us17
//list id
//8bb15ee44e