const express = require('express');
const app = express();
const cors = require("cors")
const port = 3000;

const UserRouter = require('./Routers/User')
const ProductRouter = require('./Routers/Product')
const UtilRouter = require('./Routers/Utils')
const contactRouter = require('./Routers/contact')
const orderRouter = require('./Routers/Order')

const stripe = require('stripe')('sk_test_51OYVLJSHHMuJf4FIU73CE1EXUqBOtSaFTmRS87JO2HT18483Z8qIKFnW8DC2mHPtlQjmVPcxU7N8JRkDrbNEiKTg00iZUNjx1O');

// middleware
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use('/user', UserRouter)
app.use('/product', ProductRouter)
app.use('/contact', contactRouter)
app.use('/util', UtilRouter)
app.use('/order', orderRouter);
app.use(express.static ('./Uploads'))

app.get('/get-permission', (req, res) => {
    const token = req.header('x-auth-token');
    console.log(token);
    if(token === 'admin'){
        res.json({allowed: true});
    }else{
        res.json({allowed: false});
    }
})

app.post('/create-payment-intent', async (req, res) => {
    const { amount, customerData } = req.body;
    // const { name, address } = customerData;
    console.log(amount);
    const customer = await stripe.customers.create(customerData);
    console.log(customer.id);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'inr',
      description: 'Payment Description',
      customer : customer.id
    });
    res.json({
      clientSecret: paymentIntent.client_secret
    });
  });
  
  app.post('/retrieve-payment-intent', async (req, res) => {
    const { paymentIntentId } = req.body;
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    res.json(paymentIntent);
  });


app.listen(port, () => {
    console.log('Server is running at the port 3000')
})