import React, { useRef, useState } from 'react'
import { CheckValidationOfForm } from '../../utils/Validation';
import { auth } from '../../utils/firebase/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FILM_CHICKS_BACKGROUND_IMG } from '../../utils/Constant';

function Login() {

    const [isSignInForm, setIsSignInForm] = useState(true); // Toggle state
    const [errorMessage, setErrorMessage] = useState(null);// Error state

    // Create reference for form fields
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


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

        // Check according the signIn and signUp
        if (isSignInForm) message = CheckValidationOfForm(null, email.current.value, password.current.value);
        else message = CheckValidationOfForm(name.current.value, email.current.value, password.current.value);

        // Set error message
        setErrorMessage(message);
        if (message) return;

        // Firebase signIn & signUp Logic
        if (!isSignInForm) {
            // SignUp Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                });
        }
        else {
            // SignIn Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
        }


    }
    return (
        <>
            {/* Background Image Part */}
            <div className='h-fit'>
                <img src={FILM_CHICKS_BACKGROUND_IMG} alt="background" className='absolute top-0 opacity-[0.4] h-full w-full object-cover' />
            </div>
            {/* Form Part */}
            <div className='w-full p-10 flex justify-center text-white'>
                <form onSubmit={handleOnsubmit} className="login_container sm:w-full md:w-8/12 lg:w-4/12 xl:w-3/12 bg-black bg-opacity-70 p-10 z-20">
                    <h3 className='text-2xl md:text-3xl font-semibold my-3 md:my-6'>
                        {isSignInForm ? 'SignIn' : 'SignUp'}
                    </h3>
                    {!isSignInForm &&
                        <input ref={name} type='text' placeholder='Full Name' className='bg-[#333] w-full my-4 py-3 px-4 rounded mb-5 focus:outline-green-500 focus:border-green-500' />
                    }
                    <input ref={email} type='text' placeholder='Email' className='bg-[#333] w-full my-4 py-3 px-4 rounded mb-5 focus:outline-green-500 focus:border-green-500' />

                    <input ref={password} type='password' placeholder='Password' className='bg-[#333] w-full my-4 py-3 px-4 rounded mb-5 focus:outline-green-500 focus:border-green-500' />

                    <p className='text-red-400 font-semibold text-xs md:text-base py-4'>{errorMessage}</p>
                    <button className='bg-green-500 hover:bg-green-700 font-semibold text-white py-4 px-2 w-full text-xl rounded mb-5'>
                        {isSignInForm ? 'SignIn' : 'SignUp'}
                    </button>

                    <p className='cursor-pointer font-semibold text-white  py-4 px-2 w-full text-md mb-5' onClick={toggleSignInForm}>
                        {isSignInForm ? 'New to filmChicks? signUp now.' : 'Already Register? signIn now.'}
                    </p>
                </form>
            </div>
        </>

    )
}

export default Login