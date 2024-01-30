import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FILM_CHICKS_AVTAR_IMG } from '../../utils/Constant'
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../utils/redux/slice/UserSlice';
import { signOut } from "firebase/auth";
import { auth } from '../../utils/firebase/Firebase';
function Header() {

    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();

    // Function for sign out
    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate('/');
        }).catch((error) => {
            // An error happened.
            navigate('/error');
        });
    }
    return (
        <header className='fixed top-0 p-5 w-full z-20 bg-gradient-to-b from-black flex justify-between items-center text-white'>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-extrabold italic text-green-500 tracking-wide'>FilmChicks</h3>
            {
                user !== null &&
                (<div className="container_of_avatar_and_signout flex">
                    <div className='bg-red-600 w-10 rounded'>
                        <img src={user.photoURL} className='w-full object-cover rounded' alt="film_clicks_avatar" />
                    </div>
                    <button onClick={handleSignOut} className='bg-green-600 rounded px-4 mx-5 font-bold'>SignOut</button>
                </div>)
            }

        </header>
    )
}

export default Header