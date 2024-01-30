import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../utils/redux/slice/UserSlice';
import { toggleRecommendationView } from '../../utils/redux/slice/GptSlice';
import { signOut } from "firebase/auth";
import { auth } from '../../utils/firebase/Firebase';
function Header() {

    const dispatch = useDispatch();
    const { user, gpt } = useSelector((store) => store);

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

    // Function for toggle the view 
    const handleToggleRecommendationView = () => {
        dispatch(toggleRecommendationView());
    }

    return (
        <header className='fixed top-0 p-5 w-full z-20 bg-gradient-to-b from-black flex justify-between items-center text-white'>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-extrabold italic text-green-500 tracking-wide'>FilmChicks</h3>
            {
                user !== null &&
                (<div className="container_of_avatar_and_signout flex gap-3">
                    <button onClick={handleToggleRecommendationView} className='px-6 py-2 bg-yellow-700 hover:bg-yellow-600 font-bold text-white rounded-sm mr-2'>
                        {!gpt.showRecommendation ? 'Get Recommendation' : 'Back to Home'}
                    </button>
                    <div className='bg-red-600 w-10 rounded'>
                        <img src={user.photoURL} className='w-full object-cover rounded' alt="film_clicks_avatar" />
                    </div>
                    <button onClick={handleSignOut} className='bg-green-600 hover:bg-green-700 rounded px-4 font-bold'>SignOut</button>
                </div>)
            }

        </header>
    )
}

export default Header