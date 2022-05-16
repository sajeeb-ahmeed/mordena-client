import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import useServices from '../../../../Hooks/UseServices';
import auth from '../../../Firebase/firebase.init';

import Items from '../Items/Items';


const MyItems = () => {
    const [user] = useAuthState(auth);
    const [ownItems, setOwnItems] = useState([]);
    const { services, setServices } = useServices();


    useEffect(() => {
        fetch('https://radiant-river-94662.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setOwnItems(data))

    }, [ownItems]);

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
    const email = user.email;
    const rest = ownItems.filter(ownItem => ownItem.email === email);


    return (
        <div className='inventory-container2 mx-auto'>
            {
                rest.map(item => <Items
                    key={item._id}
                    item={item}
                    handleDeleteBtn={handleUserDelate}>

                </Items>

                )
            }
        </div>
    );
};

export default MyItems;