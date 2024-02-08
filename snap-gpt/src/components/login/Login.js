import React, { useRef, useState } from 'react'
import { CheckValidationOfForm } from '../../utils/Validation';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IoEyeOff, IoEye } from "react-icons/io5";
import { signInWithFirebase, signUpWithFirebase } from '../../utils/helper/signUpWithFirebase';

function Login() {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    // Reference for fields
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    // Navigate hook && dispatch
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Toggle SignIn to SignUp
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);

        // Reset input values after toggle
        if (!isSignInForm) name.current.value = '';
        email.current.value = '';
        password.current.value = '';
        setErrorMessage(null);
    }

    // From submission method
    const handleOnsubmit = (e) => {

        // refuse auto submission
        e.preventDefault();
        let message = '';

        // Check validation for signIn & signUp
        if (isSignInForm) message = CheckValidationOfForm(null, email.current.value, password.current.value);
        else message = CheckValidationOfForm(name.current.value, email.current.value, password.current.value);

        // Set error message
        setErrorMessage(message);
        if (message) return;

        // SignIn & SignUp Logic
        if (!isSignInForm) {
            // SignUp Logic
            signUpWithFirebase(
                email.current.value,
                password.current.value,
                name.current.value,
                dispatch,
                navigate,
                setErrorMessage)
        }
        else {
            // SignIn Logic
            signInWithFirebase(
                email.current.value,
                password.current.value,
                setErrorMessage);
        }
    }

    // Toggle the password visibility
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className='w-full p-2 md:p-10 mt-36 md:mt-28 flex justify-center text-white'>
            <form onSubmit={handleOnsubmit}
                className="login_container w-full md:w-8/12 lg:w-4/12 xl:3/12 bg-black bg-opacity-80 p-5 md:p-10 z-20">
                <h3 className='text-xl md:text-3xl font-semibold my-3 md:my-6'>
                    {isSignInForm ? 'SignIn' : 'SignUp'}
                </h3>
                {!isSignInForm &&
                    <input
                        ref={name}
                        type='text'
                        placeholder='Full Name'
                        className='bg-[#333] w-full my-4 py-2 md:py-3 px-4 rounded mb-2 md:mb-5 focus:outline-green-500 focus:border-green-500' />
                }
                <input ref={email}
                    type='text'
                    placeholder='Email'
                    className='bg-[#333] w-full my-4 py-2 md:py-3 px-4 rounded mb-2 md:mb-5 focus:outline-green-500 focus:border-green-500' />

                <div className='relative'>
                    <input
                        ref={password}
                        type={isVisible ? 'text' : 'password'}
                        placeholder='Password'
                        className='bg-[#333] w-full my-4 py-2 md:py-3 px-4 rounded mb-2 md:mb-5 focus:outline-green-500 focus:border-green-500' />
                    <span className='absolute right-3 md:top-[38%] top-[40%]'
                        onClick={toggleVisibility}>
                        {isVisible ? <IoEye /> : <IoEyeOff />}
                    </span>
                </div>


                <p className='text-red-400 font-semibold text-sm md:text-base py-4'>{errorMessage}</p>
                <button className='bg-green-500 hover:bg-green-700 font-semibold text-white py-2 md:py-4 px-2 w-full text-base md:text-xl rounded mb-2 md:mb-5'>
                    {isSignInForm ? 'SignIn' : 'SignUp'}
                </button>

                <p className='cursor-pointer font-semibold text-white  py-4 px-2 w-full text-sm md:text-md mb-2  md:mb-5'
                    onClick={toggleSignInForm}>
                    {isSignInForm ? 'New to filmChicks ? signUp now.' : 'Already Register ? signIn now.'}
                </p>
            </form>
        </div>
    )
}

export default Login