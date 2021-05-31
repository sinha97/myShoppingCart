import React, { useState } from 'react'
import Base from '../core/Base';
import { Link } from 'react-router-dom';
//import { updateCategory } from './helper/adminapicall';
//import { isAuthenticated } from '../auth/helper';

const UpdateCategory = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    //const { user, token } = isAuthenticated();

    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-info mb-3" to='/admin/dashboard'>Admin Home</Link>
        </div>
    );
    const handleChange = event => {
        setError('');
        setName(event.target.value);
    };

    const onSubmit = event =>{
        event.preventDefault();
        setError('');
        setSuccess(false);

        //TODO: update logic of category
        //updateCategory(user._id,token,{name})
    };

    const myCategoryForm = () => (
        <form>
            <div className="form-group">
                <p className="lead">Update the category</p>
                <input
                    type="text"
                    className="form-control my-3"
                    onChange={handleChange}
                    value={name}
                    autoFocus
                    required
                    placeholder="For Ex. fullsleeve"
                />
                <button onClick={onSubmit} className="btn btn-outline-info">Update Category</button>
            </div>
        </form>
    );
    return (
        <Base
            title="Update a category here"
            description="Update a existing category for your product"
            className="container bg-info p-4"
        >
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {myCategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Base>
    )
}

export default UpdateCategory;
