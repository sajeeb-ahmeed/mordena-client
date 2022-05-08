import React, { useEffect, useState } from 'react';
import UseInventory from '../../../Hooks/UseInventory';
import PageTitle from '../../Shared/PageTittle/PageTitle';
import ManageAllInventory from './ManageAllInventory';

const AllInventory = () => {
    const [services, setServices] = useState([]);
    // console.log(services);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className='container my-5'>
            <PageTitle title="All-Inventory"></PageTitle>
            <div className="row">
                <h1 className=' text-center my-5'> ALL INVENTORIES</h1>
                <div className="inventory-container">
                    {
                        services.map(service => <ManageAllInventory key={service._id}
                            service={service}>

                        </ManageAllInventory>


                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllInventory;