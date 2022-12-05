


// getting-started.js
const mongoose = require("mongoose");
//we use 'test' database

const dbConnection=() =>{
  try{ mongoose.connect("mongodb+srv://Rajat2413:rajat@cluster0.xa30bxg.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true})
  console.log("successfully connected");}
  catch(err){
    console.log(err);
  };
}


// mongoose.connect("mongodb://localhost/test", {
  
//   useUnifiedTopology: true,
// });

var db = mongoose.connection;

//if there is error in connecting the data base
db.on("error", console.error.bind(console, "connection error:"));

//if there was not error then we open it
// db.once("open", function () {
//   //we are connected
//   console.log("we are connected bro/sis");
// });

// schema is layer of mongoose on the top of mongodb  which controls the which type of data is going to mongodb
// means it is strict if we set name : string then name should be in string
var kittySchema = new mongoose.Schema({
  name: String,
});
// when we first create schema then it should be compiled in model 
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting ="My name is "+ this.name;
    console.log(greeting);
  };
//model is a class which we with construct documents
var Kitten = mongoose.model("kitten", kittySchema);
// now we create objects of model class
const harryKitty = new Kitten({ name: 'Rajat' });
// console.log(harryKitty.name); // 'harryKitty'
//  harryKitty.speak();

// We have talking kittens! But we still haven't saved anything to MongoDB. Each document can be saved to the database by calling its save method
harryKitty.save(function(err,harryKitty){
    if(err)return console.error(err);
           harryKitty.speak();
})
