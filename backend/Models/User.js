const {Schema, model} = require('../connection')
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
<<<<<<< HEAD
    role : {type:String, default:"user"}
    
=======
    role: {
        type: String,
        default: "user",
      },
      avatar: { type: String, default: "Avatar.png" }
>>>>>>> 67dd1df30549437594dbcb1792073ddf76accb43
});
module.exports = model('user', userSchema)