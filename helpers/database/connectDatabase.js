const mongoose = require("mongoose");

const connectDatabase = ()=> {
    mongoose.connect("mongodb+srv://ismail_keyvan:<PASSWORD>@cluster0.cah1y.mongodb.net/answerSporComment?retryWrites=true&w=majority")
    // <PASSWORD> kısmına şifre girilmeli
        .then(() => {
        console.log("MongoDb connected")
    })
    .catch(err => {
        console.log(err)
    })
};

module.exports = connectDatabase;
