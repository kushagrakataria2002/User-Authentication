const mongoose = require('mongoose'); 

mongoose.connect(process.env.MONGODB_URL).then(() =>{
    console.log(`mongo db is connected`);
}).catch((err) =>{
    console.log(err);
}); 