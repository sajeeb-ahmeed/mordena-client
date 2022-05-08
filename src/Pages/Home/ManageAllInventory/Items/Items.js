import React from 'react';
import toast from 'react-hot-toast';
import useServices from '../../../../Hooks/UseServices';

const Items = ({ item }) => {
    const { services, setServices } = useServices();
    const handleUserDelate = id => {
        console.log('object', id);
        const proceed = window.confirm("Are You Sure Want To Delate!!")
        if (proceed) {

            const url = `https://radiant-river-94662.herokuapp.com/delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('hello', data))
            const updateService = services.filter(service => service._id !== id);
            setServices(updateService);
            toast.success('Items Delated Successful', { id: 'success' })
            // console.log(updateService);
            // console.log(services);
        }

    }
    const { name, price, img, quantity } = item;
    return (
        <div className="">
            <img className="  mx-auto" src={img} alt="" />
            <div className="p-5">
                <h5 className="mb-2 ">{name}</h5>
                <p style={{ color: '#494949' }} className="mb-3 ">Price: ${price}</p>
                <p style={{ color: '#494949' }} className="mb-3 "><span className='font-bold'>In-Stock:</span> {quantity}</p>
                <button className="cta cta9  " onClick={() => handleUserDelate(item._id)}>
                    <span>Delete</span>
                </button>
            </div>
        </div>
    );
};

export default Items;