const {Schema, model} = require('../connection')
const contactSchema = new Schema({
   
    email: String,
    message: String
});
module.exports = model('feedback', contactSchema)