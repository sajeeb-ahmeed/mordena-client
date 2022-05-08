import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../../api/axiosPrivate';
import auth from '../../../Firebase/firebase.init';
import Items from '../Items/Items';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [addItems, setAddItems] = useState([]);
    // console.log(addItems);
    const navigate = useNavigate();
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/add?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url);
                setAddItems(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/signin');
                    toast.error(error?.message)
                }
            }
        }
        getItems();
    }, [user]);
    console.log(addItems);
    return (
        <div className='my-5'>
            <h1 className=' text-center'>Items: {addItems.length}</h1>
            <h1 className=' text-center'>User Name: {user.displayName}</h1>
            <h1 className=' text-center'>User Email: {user.email}</h1>
            <div className=' mt-5'>
                {
                    addItems.map(item => <Items item={item} key={item._id}></Items>)
                }
            </div>
        </div>
    );
};

export default MyItems;