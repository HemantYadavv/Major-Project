const express = require('express');
const app = express();
const cors = require("cors")
const port = 3000;

const UserRouter = require('./Routers/User')
const ProductRouter = require('./Routers/Product')
const UtilRouter = require('./Routers/Utils')
const contactRouter = require('./Routers/contact')

// middleware
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use('/user', UserRouter)
app.use('/product', ProductRouter)
app.use('/contact', contactRouter)
app.use('/util', UtilRouter)
app.use(express.static ('./Uploads'))


app.listen(port, () => {
    console.log('Server is running at the port 3000')
})