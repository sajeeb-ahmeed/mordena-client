import React from 'react';
import { useNavigate } from 'react-router-dom';

const SoluationGuide = () => {
    const navigate = useNavigate();
    const navigatTo = () => {
        navigate('/blogs')
    }
    return (
        <div className='container-fluid my-5 bg-guide text-center '>
            <div className='container flex'>
                <h5 className='guide py-4 text-light'>Not sure which solution fits you business needs?

                </h5>
                <button onClick={() => navigatTo()} className="cta2 cta">
                    <span>Read More</span>

                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SoluationGuide;