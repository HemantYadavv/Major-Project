import React, { useState } from 'react';
import { ElementsConsumer, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAppContext from '../../Context/AppContext';


const PaymentGateway = () => {

    const {currentUser, setCurrentUser} = useAppContext();

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();



        if (!stripe || !elements) {
            console.log('stripe not loaded');
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: "http://localhost:5173/thankyou",
                receipt_email: currentUser.email,
                
            },
        });

        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }
    };

    return (
        <div className="container mt-3">
        <div className='"max-w-sm rounded overflow-hidden mt-2 shadow-lg"'  withBorder p={30} mt={30}>
            
            <form onSubmit={handleSubmit}>
                <h1 order={3} my={30} mx="auto" className='mb-2'>Secure Payment Gateway</h1>
                <PaymentElement />
                <button disabled={!stripe}  className="btn btn-primary mb-2 mt-3" type="submit" variant='filled' mt={20}>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default PaymentGateway