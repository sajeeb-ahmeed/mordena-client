import React from 'react';


const Items = ({ item, handleDeleteBtn }) => {
    const { _id, name, price, img, quantity, description, supplier } = item;
    // const handleDeleteBtn = props.handleDeleteBtn;
    return (
        <div className='container my-5 '>
            <div className="p-3 border g-2">

                <div className="text-center">
                    <img height={240} width={220} className='img-fluid cards ' src={img} alt="" />
                    <p>  <span className='text-info fw-bold'>{_id}</span></p>
                </div>
                <div className="text-center">
                    <p className=' p-1 fw-bold cards4 px-lg-3 mb-2 '>{name}</p> <br />
                    <span className='  py-2 p-1 fw-bold'>Supplier: {supplier}</span> <br />
                    <span className=' p-1'>Quantity: {quantity}</span> <br />
                    <span className=' py-2 p-1'>Price: $ {price}</span> <br />
                    <small className=' p-1'> {description?.slice(0, 70) + '..'}</small> <br />
                    <button className="cta cta8 my-2 " onClick={() => handleDeleteBtn(_id)}>
                        <span className='text-danger fw-bold'>Delete</span>
                    </button>
                </div>


            </div>

        </div>
    );
};

export default Items;