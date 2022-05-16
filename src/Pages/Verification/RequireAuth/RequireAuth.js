import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase/firebase.init';

import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5 '>
            <h3 className='text-danger cadrs'>Your Email is not verified!!</h3>
            <h5 className='text-success'> Please Verify your email address</h5>
            <button
                className='cta my-5'
                onClick={async () => {
                    await sendEmailVerification();
                    toast.success('Sent email 👉');
                }}
            >
                <span> Send Verification Email Again</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>

            <h5>Want to auto verification ?  <Link to='/sociallogin'> Click Here</Link> </h5>
            <ToastContainer></ToastContainer>
            <div className='mydiv'></div>
        </div>
    }

    return children;
};

export default RequireAuth;