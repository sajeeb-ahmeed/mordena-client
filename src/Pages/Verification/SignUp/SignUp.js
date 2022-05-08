
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../Firebase/firebase.init";

import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTittle/PageTitle";

import '../Login/Login.css'
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {

    const [sendEmailVerification, sending,] = useSendEmailVerification(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    // navigate to login 
    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating || sending) {
        return <Loading></Loading>;
    }

    if (error) {
        // console.log('error', error);
    }
    if (user) {
        navigate(from, { replace: true });
        toast.success('Successfully created');
    }
    // email verification 
    const emailVerification = async () => {
        await sendEmailVerification();
    }

    // create user profile 
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password.length < 6) {
            toast.error('Password is too short', { id: "error" })

            return;
        }
        if (password === confirmPassword) {
            emailVerification();
            await createUserWithEmailAndPassword(email, password);
            toast.success(' Account Create Successfully !', { id: "success" })
            await updateProfile({ displayName: name });
            // console.log('Successfully created');
            navigate(from, { replace: true });
        }
        else {
            return toast.error('password mismactched', { id: "wrong password" })
        }

    }


    return (
        <>
            <PageTitle title="Register"></PageTitle>
            <div className="login-container">
                <div className="login-title">Sign up</div>
                <form className="login-form" onSubmit={handleRegister}>
                    <input type="text" name="name" id="1" placeholder='Your Name' />

                    <input type="email" name="email" id="2" placeholder='Email Address' required />

                    <input type="password" name="password" id="3" placeholder='Password' required />
                    <input type="password" name="confirmPassword" id="4" placeholder='Password' required />

                    <button type="submit" value="Register">Sign up</button>

                    <ToastContainer />
                    <p className="py-3">Already have an account ? <Link onClick={navigateLogin} to="/login">Login</Link> </p> <br />
                </form>

            </div>
            <SocialLogin></SocialLogin>
        </>
    );
};

export default SignUp;
