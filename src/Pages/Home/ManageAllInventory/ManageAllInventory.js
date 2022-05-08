import React from 'react';
import { Card } from 'react-bootstrap';

const ManageAllInventory = ({ service }) => {
    console.log(service);

    const { name, img, description, price, Quantity, Supplier } = service;

    return (
        <div className='service'>
            <Card className='cards'>
                <Card.Img className='img-fluid imgs cards' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {Supplier}
                    </Card.Text>
                    <Card.Text>
                        {description.slice(0, 115)} <a href="https://radiant-river-94662.herokuapp.com/inventory"> Read more..</a>
                    </Card.Text>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <Card.Text>
                        Current Stock : {Quantity}
                    </Card.Text>

                    {/* <button className="cta" >
                    <span>Manage Stock</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default ManageAllInventory;