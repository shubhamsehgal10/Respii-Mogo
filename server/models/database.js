// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log('Connected')
// });
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://mern-book-store:0NB1Y6E8nW1AuJWe@cluster0.ov4rjdj.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("mongodb connected")
}).catch((e) => {
    console.log(e);
})
// Models
require('./Category');
require('./Recipe');