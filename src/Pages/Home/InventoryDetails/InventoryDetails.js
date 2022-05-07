import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UseInventoryDetails from '../../../Hooks/UseInventoryDetails';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [ionventory] = UseInventoryDetails(inventoryId)
    return (
        <div>
            <h2>You are about to book: {ionventory?.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${inventoryId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetails;