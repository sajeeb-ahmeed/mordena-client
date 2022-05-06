import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './SocialLogin.css';
import { FcGoogle } from 'react-icons/fc'
import Loading from '../../Shared/Loading/Loading';
import auth from '../../Firebase/firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    let errorElement;

    if (loading) {
        // console.log('loading component asbe shared theke');
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>;
    }

    if (user) {
        navigate('/home');
    }
    return (
        <div className='social_container '>
            <div className='d-flex align-items-center'>
                <div style={{ height: '5px' }} className='bg-secondary w-50'></div>
                <p className='mt-3 fw-bold login_or  px-2'>OR</p>
                <div style={{ height: '5px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div className='mt-4'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='social_button w-100 d-block mx-auto my-2'>
                    <FcGoogle className='googlefont'></FcGoogle>
                    <span className='px-2'>Google Sign In</span>
                </button>



            </div>
        </div>
    );
};

export default SocialLogin;