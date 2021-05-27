import React from 'react';
import { API } from '../../backend';


const ImageHelper = ({product}) => {

    const imageUrl = product ?
    `${API}/product/photo/${product._id}`
    :
    "https://cdn.shopify.com/s/files/1/0055/1372/products/2020-the-year-of-introverts-heather-black-s-unisex-classic-t-shirt-fruit-loom-3930-907_400x_crop_center.png?v=1602083456"
    return (
        <div className="rounded border border-success p-2">
            <img
                src={imageUrl}
                alt=""
                style={{ maxHeight: "100%", maxWidth: "100%" }}
                className="mb-3 rounded"
            />
        </div>
    )
}

export default ImageHelper;
