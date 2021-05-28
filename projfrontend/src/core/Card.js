import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from './helper/CartHelper';
import ImageHelper from './helper/ImageHelper';

const Card = ({
    product,
    addtoCart=true,
    removeFromCart = false,
    setReload= f => f, //function(f){return f}
    reload=undefined
}) => {

    const [redirect,setRedirect] = useState(false);

    const cartTitle = product ? product.name:"";
    const cartDescription = product ? product.description:"";
    const cartPrice = product ? product.price:"40";

    const addToCart = ()=>{
        addItemToCart(product,()=>setRedirect(true))
    }

    const getRedirect = (redirect) => {
        if(redirect){
            return <Redirect to="/cart" />
        }
    };

    const showAddToCart = (addtoCart)=>{
        return(
            addtoCart && (
                <div className="col-12">
                    <button
                        onClick={addToCart}
                        className="btn btn-block btn-outline-success mt-2 mb-2"
                    >
                        Add to Cart
                    </button>
                </div>
            )
        )
    };

    const showRemoveFromCart = (removeFromCart)=>{
        return(
            removeFromCart && (
                <div className="col-12">
                    <button
                        onClick={() => {
                            removeItemFromCart(product._id)
                            setReload(!reload)
                        }}
                        className="btn btn-block btn-outline-danger mt-2 mb-2"
                    >
                        Remove from cart
                    </button>
                </div>
            )
        )
    };


    return (
        <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead">{cartTitle}</div>
            <div className="card-body">
                {getRedirect(redirect)}
                <ImageHelper product={product}/>
                <p className="lead bg-success font-weight-normal text-wrap">
                    {cartDescription}
                </p>
                <p className="btn btn-success rounded  btn-sm px-4">Rs {cartPrice}</p>
                <div className="row">
                    {showAddToCart(addtoCart)}
                    {showRemoveFromCart(removeFromCart)}
                </div>
            </div>
        </div>
    );
};

export default Card;
