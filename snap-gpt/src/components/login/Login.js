import React, { useState } from 'react'

function Login() {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div className='w-full p-10 flex justify-center text-white'>
            <form className="login_container sm:w-full md:w-8/12 xl:w-4/12 bg-black bg-opacity-70 p-10">
                <h3 className='text-2xl md:text-3xl font-semibold my-3 md:my-6'>
                    {isSignInForm ? 'SignIn' : 'SignUp'}
                </h3>
                {!isSignInForm &&
                    <input type='text' placeholder='Full Name' className='bg-[#333] w-full my-4 py-3 px-4 rounded mb-5 focus:outline-green-500 focus:border-green-500' />
                }
                <input type='text' placeholder='Email' className='bg-[#333] w-full my-4 py-3 px-4 rounded mb-5 focus:outline-green-500 focus:border-green-500' />

                <input type='password' placeholder='Password' className='bg-[#333] w-full my-4 py-3 px-4 rounded mb-5 focus:outline-green-500 focus:border-green-500' />

                <button className='bg-green-500 hover:bg-green-700 font-semibold text-white py-4 px-2 w-full text-xl rounded mb-5'>
                    {isSignInForm ? 'SignIn' : 'SignUp'}
                </button>

                <p className='cursor-pointer font-semibold text-white  py-4 px-2 w-full text-md mb-5' onClick={toggleSignInForm}>
                    {isSignInForm ? 'New to filmChicks? signUp now.' : 'Already Register? signIn now.'}
                </p>
            </form>
        </div>
    )
}

export default Login