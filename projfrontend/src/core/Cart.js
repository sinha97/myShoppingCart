import React,{useState,useEffect} from 'react'
import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/CartHelper';
import StripeCheckout from './StripeCheckout';



const Home = () => {

    const [products,setProducts] = useState([]);
    const [reload,setReload] = useState(false);

    useEffect(()=>{
        setProducts(loadCart())
    },[reload])
    
    const loadAllProducts = ()=>{
        return(
            <div>
                <h2>This section is to load products</h2>
                {products.map((product,index)=>(
                    <Card 
                        key={index}
                        product={product}
                        removeFromCart={true}
                        addtoCart={false}
                        setReload={setReload}
                        reload={reload}
                    />
                ))}
            </div>
        )
    };

    const loadCheckout = ()=>{
        return(
            <div>
                <h2>This section checkout</h2>
            </div>
        )
    };

    return (
        <Base title="Cart Page" description="Ready To Checkout">
            <div className="row text-center">
                <div className="col-6">{loadAllProducts()}</div>
                <div className="col-6">
                    <StripeCheckout
                        products={products}
                        setReload={setReload}
                    />
                </div>
            </div>
        </Base>
    )
};

export default Home;
