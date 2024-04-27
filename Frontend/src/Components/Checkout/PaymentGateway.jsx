import React, { useState } from 'react';
import { ElementsConsumer, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAppContext from '../../Context/AppContext';


const PaymentGateway = () => {

    const { currentUser, setCurrentUser } = useAppContext();
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            console.log('stripe not loaded');
            return;
        }
        const result = await stripe.confirmPayment({
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
        <div className='"max-w-sm rounded mt-5 overflow-hidden shadow-lg"' withBorder p={30} mt={30}>

            <form onSubmit={handleSubmit}>
                <h1  className='mb-4 text-danger fw-semibold fs-5 text-center' >Secure Payment Gateway</h1>
                <PaymentElement />
                <button disabled={!stripe} type="submit" className='btn btn-primary mb-5 mt-5 mx-auto d-block' variant='filled' mt={20}>Submit</button>
            </form>
        </div>
    )
}

export default PaymentGateway