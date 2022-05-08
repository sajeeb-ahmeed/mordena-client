import React from 'react';
import { Link } from 'react-router-dom';

const Manage = ({ service, handleUserDelate }) => {
    return (

        < tr className=''>
            <th className='p-lg-5 p-2'>
                {service.name}
            </th>
            <td>
                {service.quantity}
            </td>
            <td>
                ${service.price}
            </td>
            <td >
                {service.supplier}
            </td>
            <td >
                <button className="cta cta9  " onClick={() => handleUserDelate(service._id)}>
                    <span>Delete</span>
                </button>
                <Link to={`/update/${service._id}`}><button className=" cta cta8 " type="button" >
                    <span>Update Items</span>
                </button></Link>
            </td>
        </tr>

    );
};

export default Manage;