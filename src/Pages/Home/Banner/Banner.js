import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerimg from '../../../images/banner.jpg'
const Banner = () => {
    const navigate = useNavigate();
    const navigatTo = () => {
        navigate('/ManageInventory')
    }
    return (
        <div className='container-fluid my-5 pt-lg-3'>
            <div className="row text-center">
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center align-items-center ">
                    <div className=' my-2'>
                        <h2 className='mb-lg-2'>Let your living space live up to your expectations.</h2>
                        <button onClick={() => navigatTo()} className='mt-2 cta' > <span>Explore Now</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg></button>
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 col-12">
                    <img className='img-fluid object-fit' src={`https://i.ibb.co/ckMGqLq/banner.jpg`} alt="Banner - img " />
                </div>
            </div>
        </div>
    );
};

export default Banner;