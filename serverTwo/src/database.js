const mongoose = require('mongoose')

 mongoose.connect('mongodb://localhost/registerDiabetes',{
    useUnifiedTopology: false,
    useNewUrlParser: true
})
    .then(db=>console.log('db diabetes is connected'))
    .catch((err)=>console.log(err));
