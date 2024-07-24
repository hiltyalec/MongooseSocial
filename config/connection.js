//IMPORT REQUIRED PACKAGES FOR MONGOOSE LIBRARY HERE
const mongoose = require('mongoose');

//CONNECT TO THE DATABASE USING MONGODB URI HERE
// VARIABLS FOR USING THE DEFAULT URI IF THE ENVIRONMENT VARIABLE IS NOT SET
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/TheSocialMongoose',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

// EXPORT THE CONNECTION HERE
module.exports = mongoose.connection
