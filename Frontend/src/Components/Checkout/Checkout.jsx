import React, { useEffect, useRef, useState } from 'react';
import { Container, Button, Card, Form, FormGroup, FormLabel } from 'react-bootstrap';
import * as Yup from 'yup';
import { loadStripe } from '@stripe/stripe-js';
import PaymentGateway from './PaymentGateway';
import { Elements } from '@stripe/react-stripe-js';
import useCartContext from '../../Context/CartContext';
import useAppContext from '../../Context/AppContext';
import './Checkout.css';

const CheckoutSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    pincode: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
});

function Checkout() {
    const [clientSecret, setClientSecret] = useState('');
    const { getCartTotalAmount, cartItems } = useCartContext();
    const { currentUser } = useAppContext();

    const addressRef = useRef();
    const pincodeRef = useRef();
    const contactRef = useRef();

    const stripePromise = loadStripe(' pk_test_51OYVLJSHHMuJf4FILH25HpbbABmaxKgmZsCYZcs5fV5LQj082DT92w6BbLTjWK5uXnsy0GyQMVtNsERLsi2Xt0HW00BSjil91a');

    const getPaymentIntent = async () => {
        const shipping = {
            name: currentUser.name,
            address: {
                line1: addressRef.current.value,
                postal_code: pincodeRef.current.value,
                country: 'IN',
            },
        };
        sessionStorage.setItem('shipping', JSON.stringify(shipping));
        console.log(getCartTotalAmount());
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: getCartTotalAmount(),
                customerData: shipping
            })
        });
        const data = await res.json();
        console.log(data);
        setClientSecret(data.clientSecret);
    };

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Product Details</Card.Title>
                    <hr />
                    {cartItems.map(item => (
                        <div key={item.id}>
                            <img src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image[0]}`} alt={item.name} width={50} />
                            <div>
                                <p>{item.title}</p>
                                <p>Amount ₹{item.price} x {item.quantity}</p>
                            </div>
                            <div>
                                <p> ₹{item.price * item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Delivery Address</Card.Title>
                    <hr />
                    <Form>
                        <FormGroup>
                            <FormLabel>Pin Code</FormLabel>
                            <Form.Control ref={pincodeRef} type="number" maxLength={6} minLength={6} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Contact</FormLabel>
                            <Form.Control ref={contactRef} type="text" maxLength={10} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Shipping Address</FormLabel>
                            <Form.Control ref={addressRef} as="textarea" rows={8} />
                        </FormGroup>
                    </Form>
                </Card.Body>
            </Card>
            <Button variant="primary" onClick={getPaymentIntent}>Pay Now</Button>
            {clientSecret && (
                <Elements stripe={stripePromise}>
                    <PaymentGateway />
                </Elements>
            )}
        </Container>
    );
}

export default Checkout;
