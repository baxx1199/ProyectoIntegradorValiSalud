const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/registerTension',{
    useUnifiedTopology: false,
    useNewUrlParser: true
})
    .then(db=>console.log('db is connected'))
    .catch((err)=>console.log(err));

/* mongoose.connect('mongodb://localhost/registerDiabetes',{
    useUnifiedTopology: false,
    useNewUrlParser: true
})
    .then(db=>console.log('db diabetes is connected'))
    .catch((err)=>console.log(err)); */

/* var conn = mongoose.createConnection('mongodb://localhost/registerTension');
var conn2 = mongoose.createConnection('mongodb://localhost/registerDiabetes');
var Schema = new mongoose.Schema({})
var model1 = conn.model('User', Schema);
var model2 = conn2.model('Item', Schema);
model1.find({}, function() {
   console.log("this will print out last");
});
model2.find({}, function() {
   console.log("this will print out first"); 
});*/