const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    username:{
        type:String
    },
    age:{
        type:Number
    },
    date_of_birth:{
        type:String
    }
});

const UserModel = mongoose.model('users', userSchema);
module.exports = UserModel;
console.log("User Collection created successfully")
