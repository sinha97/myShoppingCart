import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import { cartEmpty, loadCart } from './helper/CartHelper';
import StripeCheckoutButton from 'react-stripe-checkout';
import { API } from '../backend';
//import { createOrder } from './helper/OrderHelper';


const StripeCheckout = ({ products, setReload = f => f, reload = undefined }) => {
    
    const [data, setData] = useState({
        loading: false,
        success: false,
        error: "",
        address: ""
    });

    //const token = isAuthenticated() && isAuthenticated().token;
    //const userId = isAuthenticated() && isAuthenticated().user._id;

    const getFinalTotal = () => {
        // return products.reduce((currentValue, nextValue) => {
        //     return currentValue + nextValue.count * nextValue;
        // }, 0);
        let amount = 0;
        products.map(p => {
            amount = amount + p.price;
        })
        return amount;
    };

    const makePayment = (token) => {
        const body = {
            token,
            products
        }

        const headers = {
            "Content-Type": "application/json"
        }
        return fetch(`${API}/stripepayment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log(response);
            const { status } = response;
            console.log("STATUS", status);

            // TODO:
            // const orderData = {
            //     products: products,
            //     transaction_id: response.requestId,
            //     amount: response.amount
            // }

            cartEmpty(() => {
                console.log("Did we got a crash?");
            });
            setReload(!reload);
        }).catch(err => console.log(err));
    };

    const showStripeButton = () => {

        return isAuthenticated() ? (
            <StripeCheckoutButton
                stripeKey="pk_test_51GusGkGhjm1DvB4BbkQpMJYcYnBO1zeqv1vvCJTKRwxHC6RWquTI6fKmqkAc2d9oFL68KwBcTmXazQT6VErjOC6Y00Qd7Ybq0w"
                token={makePayment}
                amount={getFinalTotal()*100}
                name="Payment Here"
                shippingAddress
                billingAddress
            >
                <button className="btn btn-success">Pay with Stripe</button>
            </StripeCheckoutButton>
        ) : (
            <Link to='/signin'>
                <button className="btn btn-warning">Sign in</button>
            </Link>
        )
    };

    

    return (
        <div>
            <h3>Stripe payment loaded {getFinalTotal()}</h3>
            {showStripeButton()}
        </div>
    )
}

export default StripeCheckout;
