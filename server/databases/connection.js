const mongoose = require('mongoose');

// receive address, option, error
const connectDB = async () => {
    try {
        //mongodb connection string
        const con =await mongoose.connect(process.env.MONGO_URI, {
             /* 
             create DB
             Version 6 does not support four options
             useNewUriParser: true,
             useUnifiedTopology: true,
             useFindAndModify: false,
             useCreateIndex: true 
             */
        })
        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch(error) {
        console.log(error);
        // error => process.exit(1) cf) exit code (0) => normal
        process.exit(1);
    } 
}

module.exports = connectDB