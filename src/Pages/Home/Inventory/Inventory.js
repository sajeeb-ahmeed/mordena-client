import React, { useEffect, useState } from 'react';

import '../Inventory/Inventory.css'
import Inventories from '../Inventories/Inventories';
import PageTitle from '../../Shared/PageTittle/PageTitle';

const Inventory = () => {

    const [services, setServices] = useState([]);
    const newServices = services.slice(0, 6)
    // console.log(services);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className='container my-5'>
            <PageTitle title="Inventory"></PageTitle>
            <div className="row">
                <h1 className=' text-center my-5'> INVENTORY</h1>
                <div className="inventory-container">
                    {
                        newServices.map(service => <Inventories key={service._id}
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