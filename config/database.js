const mongoose = require('mongoose');
const db = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("mongoDB connecttttt");
    }).catch((err) => {
        // throw new Error(err.message)
        console.log(err);
    })
}
module.exports = db