// this is the start and compulsory template to use mongoose

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test'); 
//this is how we create schema and model(compileing the model) 
const Cat = mongoose.model('Cat', { name: String });
//insert any data
const kitty = new Cat({ name: 'Zildjian' });
//now we send the kitty data to server and save there
kitty.save().then(() => console.log('meow'));