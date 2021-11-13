const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/registerTension',{
    useUnifiedTopology: false,
    useNewUrlParser: true
})
    .then(db=>console.log('db is connected'))
    .catch((err)=>console.log(err));
