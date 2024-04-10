const mongoose = require('mongoose');
const url ="mongodb+srv://Hemantyadav:Hemant90766yadav@cluster0.wcqww1z.mongodb.net/MITTIMahal?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)
.then((result) => {
    console.log('Connected to database')
    
}).catch((err) => {
    console.log(err)
    
});
module.exports = mongoose;