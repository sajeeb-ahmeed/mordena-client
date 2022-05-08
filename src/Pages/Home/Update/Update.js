import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const Update = () => {
    const { id } = useParams();
    // console.log(id);
    const [user, setUser] = useState([]);
    // console.log(user);
    const [isReload, setIsReload] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [isReload]);

    const handleUpdateQuantity = e => {
        e.preventDefault();

        const quantity = e.target.quantity.value;
        const newQuantity = parseInt(quantity) + parseInt(user?.quantity)
        const updateQuantity = { newQuantity: newQuantity }

        const url = `http://localhost:5000/service/${id}`
        if (!quantity) {
            alert('Please add some quantity')
        } else {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsReload(!isReload);
                    e.target.reset();
                    toast.success("Stock add Successful");
                });
        }
    };
    const handleDeliveryProduct = (id) => {
        const quantity = user?.quantity;
        const updateQuantity = { quantity };
        const url = `http://localhost:5000/delivery/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsReload(!isReload);
                toast.success('Delivery Successful')
            })
    }

    return (

        <div className='container my-5'>
            <div className="row g-2">
                <div className="col-md-8 col-12">
                    <div className="row my-5">
                        <div className="col-md-6 col-12">
                            <img className='img-fluid ' src={user?.img} alt="" />
                            <p> {user?.name} key 💱 <span className='text-info fw-bold'>{user?._id}</span></p>
                        </div>
                        <div className="col-md-6 col-12">
                            <h5 className='cards p-3'>{user?.name}</h5>
                            <h6 className='cards p-3'>{user?.supplier}</h6>
                            <h6 className='cards p-3'>Quantity: {user?.quantity}</h6>
                            <h6 className='cards p-3'>Price: $ {user?.price}</h6>
                            <p className='cards p-3'> {user?.description?.slice(0, 300) + '..'}</p>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 text-center flex-container">

                    <div className='flex-items border-bottom'>

                        <p>
                            <button className=" cta">
                                <span onClick={() => handleDeliveryProduct(user?._id)}>Delivered </span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </p>

                    </div>
                    <div>

                        <form onSubmit={handleUpdateQuantity}>
                            <input className='cards p-2 me-2' type="text" name='quantity' placeholder='Add Quantity?' />
                            <button className='cta cta4'>
                                <span>
                                    <input className='cta4' type="submit" value="Add quantity" />
                                </span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </form>


                    </div>
                </div>
            </div>




            <div className='text-center mt-4'>
                <Link to={`/ManageInventory`}>
                    <button className=" cta">
                        <span>Manage Inventory</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Update;