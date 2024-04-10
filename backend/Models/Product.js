const {Schema, model} = require('../connection')
const mySchema = new Schema({
            
            pname: String,
            pdetail: String,
            pprice: Number,
            pcategory: String,
            discountprice:Number,
            image: String,
            createdAt:{
                type:Date,
                default:Date.now()
            },
    
});
module.exports = model('product', mySchema)