import React, { useEffect, useState } from 'react';

import '../Inventory/Inventory.css'
import Inventories from '../Inventories/Inventories';

const Inventory = () => {

    const [services, setServices] = useState([]);
    // console.log(services);
    useEffect(() => {
        fetch('https://radiant-river-94662.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className='container my-5'>
            <div className="row">
                <h1 className=' text-center my-5'> INVENTORY</h1>
                <div className="inventory-container">
                    {
                        services.map(service => <Inventories key={service._id}
                            service={service}>

                        </Inventories>


                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventory;