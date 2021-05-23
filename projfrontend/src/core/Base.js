import React from 'react';
import Menu from './Menu';


const Base = ({
    title = "My Title",
    description = "My description",
    className = "bg-dark text-white p-1",
    children
}) => (
    <div>
        <Menu />
        <div className="container-fluid">
            {/* <div className="jumbotron bg-dark text-white text-center"> */}
            <div className=" bg-dark text-white text-center mt-2">
                <h2 className="display-10">{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
        <footer className="footer bg-dark mt-auto py-1">
            <div className="container-fluid bg-success text-white text-center py-1">
                <h4>Reach out to us if you have any question!</h4>
                <button className="btn btn-warning btn-md">ContactUs</button>
            </div>
            <div className="container">
                <span className="text-muted">Ecommerce built in <span className="text-white">MERN stack</span></span>
            </div>
        </footer>
    </div>
)


export default Base;
