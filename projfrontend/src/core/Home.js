import React from 'react'
import { API } from '../backend';
import Base from './Base';



const Home = () => {
    console.log("API is : ", API);
    return (
        <Base title="Home Page" description="Welcome to Ecommerce dukaan">
            <div className="row">
                <div className="col-4">
                    <button className='btn btn-success'>Test</button>
                </div>
                <div className="col-4">
                    <button className='btn btn-success'>Test</button>
                </div>
                <div className="col-4">
                    <button className='btn btn-success'>Test</button>
                </div>
            </div>
        </Base>
    )
}

export default Home;