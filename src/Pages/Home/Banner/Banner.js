import React from 'react';
import bannerimg from '../../../images/Best-Furniture-Hatil.jpg'
const Banner = () => {
    return (
        <div className='container-fluid'>
            <div className="row text-center">
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center align-items-center ">
                    <div className=' my-2'>
                        <h2 className='mb-lg-2'>Let your living space live up to your expectations.</h2>
                        <p className='mt-2 btn btn-danger' >Explore Now</p>
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 col-12">
                    <img className='img-fluid object-fit' src={bannerimg} alt="Banner - img " />
                </div>
            </div>
        </div>
    );
};

export default Banner;