import React from 'react';

const Items = ({ item }) => {
    const { name, price, img, quantity } = item
    return (
        <div className="">
            <img className="  mx-auto" src={img} alt="" />
            <div className="p-5">
                <h5 className="mb-2 ">{name}</h5>
                <p style={{ color: '#494949' }} className="mb-3 ">Price: ${price}</p>
                <p style={{ color: '#494949' }} className="mb-3 "><span className='font-bold'>In-Stock:</span> {quantity}</p>
            </div>
        </div>
    );
};

export default Items;