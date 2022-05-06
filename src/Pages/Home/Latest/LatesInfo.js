import React from 'react';
import { Accordion } from 'react-bootstrap';
import { GiCargoShip, GiCommercialAirplane } from 'react-icons/gi';
import { FaTruckLoading, FaGlobeEurope } from 'react-icons/fa';


const LatesInfo = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-12 col-xs-12">
                    <h4 className='my-5 fw-bold'>WHAT MAKES US SPECIAL?</h4>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">

                            <Accordion.Header> <h1 className='fw-bold me-3'><GiCargoShip></GiCargoShip></h1> <h6 className=' ms-1'>We are creative and professional</h6></Accordion.Header>
                            <Accordion.Body>
                                Transpress Construction Group is one of the most experienced and respected building and civil construction firms in the United Kingdom. For over a century, we have been transforming the ideas and visions of our clients.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> <h1 className='fw-bold me-3'> <GiCommercialAirplane></GiCommercialAirplane> </h1> <h6 className=' ms-1'>Honest and Dependable</h6> </Accordion.Header>
                            <Accordion.Body>
                                Transpress Construction Group is one of the most experienced and respected building and civil construction firms in the United Kingdom. For over a century, we have been transforming the ideas and visions of our clients.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> <h1 className='fw-bold me-3'> <FaTruckLoading></FaTruckLoading> </h1> <h6 className=' ms-1'>Quality Compliment</h6></Accordion.Header>
                            <Accordion.Body>
                                Transpress Construction Group is one of the most experienced and respected building and civil construction firms in the United Kingdom. For over a century, we have been transforming the ideas and visions of our clients.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>  <h1 className='fw-bold me-3'> <FaGlobeEurope></FaGlobeEurope> </h1> <h6 className=' ms-1'>We are always improving</h6> </Accordion.Header>
                            <Accordion.Body>
                                Transpress Construction Group is one of the most experienced and respected building and civil construction firms in the United Kingdom. For over a century, we have been transforming the ideas and visions of our clients.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-sm-12 col-md-6 col-12 col-xs-12">

                </div>
            </div>
        </div>
    );
};

export default LatesInfo;