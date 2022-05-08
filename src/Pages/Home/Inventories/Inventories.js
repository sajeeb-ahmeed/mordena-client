import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventories = ({ service }) => {
    const { _id, name, img, description, price, quantity, supplier } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/update/${_id}`);

    }


    return (
        <div className='service'>
            <Card className='cards'>
                <Card.Img onClick={() => navigateToServiceDetail(_id)} className='img-fluid imgs cards' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {supplier}
                    </Card.Text>
                    <Card.Text>
                        {description.slice(0, 115)} <a href=' '> Read more..</a>
                    </Card.Text>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <Card.Text>
                        Current Stock : {quantity}
                    </Card.Text>

                    <button className="cta" onClick={() => navigateToServiceDetail(_id)}>
                        <span>Manage Stock</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Inventories;