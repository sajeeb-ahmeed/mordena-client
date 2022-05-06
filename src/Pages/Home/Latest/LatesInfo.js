import React from 'react';
import { Accordion, Card, Carousel } from 'react-bootstrap';
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
                <div className="col-sm-12 col-md-6 col-12 col-xs-12 mx-auto">
                    <h4 className='my-5 fw-bold'>WHAT MAKES US SPECIAL?</h4>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-12">
                            <Carousel className='cards'>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100   imgCards"
                                        src={`https://hatil.com/sites/default/files/styles/hatil_product_list_crop/public/Marseille-183.jpg`}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>

                                        <p className='text-dark'>firms in the United Kingdom.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100   imgCards"
                                        src={`https://hatil.com/sites/default/files/styles/hatil_product_list_crop/public/Rennesa-104.jpg`}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>

                                        <p className='text-dark'>Carefully-chosen raw material,.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 imgCards"
                                        src={`https://hatil.com/sites/default/files/Sofa_0.jpg`}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>

                                        <p className='text-dark'>one of the most experienced</p>
                                    </Carousel.Caption>

                                </Carousel.Item>
                            </Carousel>
                            <Card className='cards-special'>
                                <Card.Body>
                                    <Card.Title className='text-uppercase'>11 Times Old Furniture Gained New Life</Card.Title>
                                    <Card.Text>
                                        Coordinating and supervising work performed trades and outsite supplier for quality, completeness,schedule.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12">
                            <Carousel className='cards'>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100   imgCards "
                                        src={`https://hatil.com/sites/default/files/Open-Shelves.jpg`}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>

                                        <p className='text-dark'>Coordinating and supervising work </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100   imgCards"
                                        src={`https://hatil.com/sites/default/files/Chair_1.jpg`}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>

                                        <p className='text-dark'>the bulk of
                                            the card's content.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100   imgCards"
                                        src={`https://hatil.com/sites/default/files/File-Rack.jpg`}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>

                                        <p className='text-dark'>for quality, completeness,schedule.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            <Card className='cards-special'>
                                <Card.Body>
                                    <Card.Title className='text-uppercase'>How to restore old wodden furniture</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatesInfo;