import React from 'react';
import { Accordion } from 'react-bootstrap';

import './Blog.css'
const Blogs = () => {
    return (
        <div className='container my-5  '>
            <h3 className='mb-5 text-center'>My Blogs </h3>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header >JavaScript and Node JS Comparison</Accordion.Header>
                    <Accordion.Body>
                        <>
                            <div className="row">
                                <div className="col-md-6 col-12 p-3">
                                    <h3 className='fw-bold text-center mb-3'>JavaScript</h3>
                                    <div>
                                        <li>JavaScript is a programming language. It is running in any web browser with a proper browser engine.</li>
                                        <li>Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</li>
                                        <li>avaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</li>

                                    </div>

                                </div>
                                <div className="col-md-6 col-12 p-3">
                                    <h3 className='fw-bold text-center mb-3'>Node Js</h3>
                                    <div>
                                        <li>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately..</li>
                                        <li>It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job..</li>
                                        <li>Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine..</li>

                                    </div>
                                </div>
                            </div>
                        </>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>When should i use nodejs and when should i use mongodb</Accordion.Header>
                    <Accordion.Body>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <h3 className='fw-bold text-center mb-3'>Why i'm useing node js </h3> <br />
                                <li>Efficient performance.</li>
                                <li>Easier development process.</li>
                                <li>Ability to handle multiple requests.</li>
                                <li>Ability to scale smoothly.
                                    Prompt code execution..</li>
                                <p className='mt-2'>Node.JS is used for programming applications. MongoDB is used as a datastore so these applications may retrieve data. For instance, a Node.JS application may have user accounts stored on a MongoDB service. Node.JS and MongoDB are two completely separate things straight forward.</p>
                            </div>
                            <div className="col-md-6 col-12">
                                <h3 className='fw-bold '>When should i use mongoDB instead of a relationnal database</h3>
                                <br />
                                <p>
                                    <li>I've followed several courses on udemy about NodeJS/Express,ReactJS/Redux and some the courses are MERN STACK and i've really enjoyed them..</li>
                                    <li>the only thing that instructors don't really explain is the choice of MongoDB</li>
                                    <li>Before taking theses courses i always use whether PostgreSQL or MariaBD for all my projects persistence layer.And now i've just used MongoBD in all theses courses without knowing in what kind of situations it's the best choice or not.All the instructors just say that as data are stored like json json arrays,it's easy to parse as it's naturaly compatible with Javascript just like any JSON format.I would really like to understand technical reasons of using Mongo instead of relationnal database.</li>

                                </p>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Differences between sql and nosql databases</Accordion.Header>
                    <Accordion.Body>
                        <div className="row">

                            <div className="col-md-6 col-12">
                                <h3 className='fw-bold text-center mb-3 '>sql</h3>


                                <p className='text-center mt-2'>
                                    <li>
                                        RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                                    </li>
                                    <li>These databases have fixed or static or predefined schema</li>
                                    <li>These databases are not suited for hierarchical data storage.</li>
                                    <li>These databases are best suited for complex queries</li>
                                    <li>Vertically Scalable</li>
                                    <li>Follows ACID property</li>
                                </p>
                            </div>
                            <div className="col-md-6 col-12">
                                <h3 className='fw-bold text-center mb-3 '>Nosql</h3>
                                <p className='text-center mt-2'>
                                    <li>Non-relational or distributed database system.</li>
                                    <li>	They have dynamic schema</li>
                                    <li>	These databases are best suited for hierarchical data storage.</li>
                                    <li>
                                        These databases are not so good for complex queries
                                    </li>
                                    <li>
                                        Horizontally scalable
                                    </li>
                                    <li>
                                        Follows CAP(consistency, availability, partition tolerance)
                                    </li>

                                </p>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is the purpose of jwt and how does it work</Accordion.Header>
                    <Accordion.Body>
                        <div className="row">

                            <div className="col-md-12 col-12">
                                <h3 className='fw-bold text-center mb-3 '>JWT</h3>


                                <p className='text-center mt-2'>

                                    <li>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</li>
                                    <li>In short, JWTs are used as a secure way to authenticate users and share information.</li>
                                    <li>
                                        Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.
                                    </li>

                                </p>
                            </div>

                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className='mydiv'></div>
        </div>
    );
};

export default Blogs;