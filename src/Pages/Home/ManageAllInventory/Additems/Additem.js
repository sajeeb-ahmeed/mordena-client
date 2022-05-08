import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/firebase.init';

const Additem = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleAddItems = async e => {
        e.preventDefault();
        const items = {
            email: e.target.email.value,
            name: e.target.name.value,
            price: e.target.price.value,
            quantity: e.target.quantity.value,
            supplier: e.target.supplier.value,
            description: e.target.description.value,
            img: e.target.img.value
        }
        axios.post("http://localhost:5000/add", items)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    e.target.reset();
                }
            })
    }
    return (
        <div className='container-fluid mx-auto  bg-dark'>
            <h1 className=' text-center text-light pt-4'>Add To <span style={{ color: '#64B9B4' }}>Item</span></h1>
            <div className="container text-center ">
                <form onSubmit={handleAddItems} className='w-100 pb-3'>
                    <div className="mb-4 ">
                        <input type="text" value={user?.displayName} readOnly disabled id="text" className="w-50  py-2 text-center cards3" required />
                    </div>
                    <div className="mb-4">
                        <input type="text" name='email' value={user?.email} readOnly disabled id="text" className="w-50 py-2 text-center cards3" required />
                    </div>
                    <div className="mb-4">
                        <input type="text" name='name' id="text" className="w-50  py-2 text-center cards3" placeholder='Products Name' required />
                    </div>
                    <div className="mb-4">
                        <input type="text" name='price' id="price" className="w-50 py-2 text-center cards3" placeholder='Price' required />
                    </div>
                    <div className="mb-4">
                        <input type="text" name='quantity' id="quantity" className="w-50 py-2 text-center cards3" placeholder='Add Quantity' required />
                    </div>
                    <div className="mb-4">
                        <input type="text" name='supplier' id="supplier-name" className="w-50 py-2 text-center cards3" placeholder='Supplier Name' required />
                    </div>
                    <div className="mb-4">
                        <textarea id="message" name='description' rows="4" className="w-50 py-2 text-center cards3" placeholder="Add Items Description..."></textarea>
                    </div>
                    <div className="mb-4">
                        <input type="text" name='img' id="image" className="w-50 py-2 text-center cards3" placeholder='Images Link' required />
                    </div>
                    <button type="submit" className="cta cta8">
                        <span>
                            Register new Items

                        </span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Additem;