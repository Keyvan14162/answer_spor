const mongoose = require("mongoose");

const connectDatabase = ()=> {
    mongoose.connect("mongodb+srv://ismail_keyvan:Kamilkoc14162@cluster0.cah1y.mongodb.net/answerSporComment?retryWrites=true&w=majority")
    .then(() => {
        console.log("MongoDb connected")
    })
    .catch(err => {
        console.log(err)
    })
};

module.exports = connectDatabase;