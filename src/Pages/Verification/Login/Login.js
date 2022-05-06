import { useEffect, useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../Firebase/firebase.init";
import PageTitle from "../../Shared/PageTittle/PageTitle";

import SocialLogin from "../SocialLogin/SocialLogin";

import './Login.css'


const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);


    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" })
        }

    }
    // login 
    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(userInfo)
        signInWithEmail(userInfo.email, userInfo.password);
    }
    // reset password 
    const resetPassword = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail();
            toast.success('Sent Reset Password Emial')
        }
        else {
            toast.error('Please Input Your Email ')
        }

    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    useEffect(() => {
        const error = hookError;
        if (error) {
            switch (error) {
                case "auth/invalid-email":
                    toast.error("Invalid email provided, please provide a valid email");
                    break;

                case "auth/invalid-password":
                    toast.error("Wrong password!!")
                    break;
                default:
                    toast("something went wrong , please try again")
            }
        }

    }, [hookError])

    return (
        <>
            <PageTitle title="Login"></PageTitle>
            <div className="  login-container">
                <div className="login-title">LOGIN</div>
                <form className="login-form" onSubmit={handleLogin}>
                    <input type="text" placeholder="Your Email" required onChange={handleEmailChange} />
                    {errors?.email && <p className="error-message">{errors.email}</p>}
                    <input type="password" placeholder="password" required onChange={handlePasswordChange} />
                    {errors?.password && <p className="error-message">{errors.password}</p>}
                    <button>Login</button>

                    <p className="mt-2 forget"> Forget password ? <span onClick={resetPassword} className="reset">Reset Password </span> </p>
                    <ToastContainer />

                    <p className="mt-5">Don't have an account? <Link to="/signup">Sign up </Link> </p>
                </form>


            </div>
            <SocialLogin></SocialLogin>
        </>
    );
};

export default Login;