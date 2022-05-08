import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useServices from '../../../Hooks/UseServices';
import Manage from './Manage';

const ManageAllInventory = () => {

    const { services, setServices } = useServices();
    const handleUserDelate = id => {
        console.log('object', id);
        const proceed = window.confirm("Are You Sure Want To Delate!!")
        if (proceed) {

            const url = `http://localhost:5000/delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('hello', data))
            const updateService = services.filter(service => service._id !== id);
            setServices(updateService);
            toast.success('Items Delate Successful')
            // console.log(updateService);
            // console.log(services);
        }
    }
    return (
        <div className='container-fluid mx-auto '>

            <h6 className='text-center my-5'>
                <Link to={'/add'}><button className='cta' >
                    <span>Add New Item</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button></Link>
            </h6>

            <div className="container mx-auto my-4" >
                <Table striped bordered hover variant="dark" responsive>
                    <thead>
                        <tr>
                            <th>Inventory Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Supplier </th>
                            <th>Edit / Update</th>

                        </tr>
                    </thead>
                    <tbody className='py-5'>
                        {
                            services.map(service => <Manage
                                key={service._id}
                                service={service}
                                handleUserDelate={handleUserDelate}
                            ></Manage>)
                        }
                    </tbody>
                </Table>

            </div>

        </div>
    );
};

export default ManageAllInventory;