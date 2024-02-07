import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../utils/redux/slice/UserSlice';
import { toggleRecommendationView } from '../../utils/redux/slice/GptSlice';
import { signOut } from "firebase/auth";
import { auth } from '../../utils/firebase/Firebase';
import { FaSignOutAlt } from "react-icons/fa";

function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const gpt = useSelector((store) => store.gpt);
    const [isMenuShowMenu, setIsMenuShow] = useState(false);

    // Toggle recommendation
    const handleToggleRecommendationView = () => {
        dispatch(toggleRecommendationView());
    }

    // SignOut
    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate('/');
        }).catch((error) => {
            // An error happened.
            navigate('/error');
        });
    }

    // Toggle dropdown
    const toggleMenu = () => {
        setIsMenuShow(!isMenuShowMenu);
    }

    return (
        <header className="bg-gradient-to-b from-black border-gray-200 bg-black fixed w-full z-20 left-0 ring-0">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={'/browse'}>
                    <h3 className='text-xl md:text-3xl font-extrabold italic text-green-500 tracking-wide'>
                        FilmChicks
                    </h3>
                </Link>
                {
                    user !== null &&
                    <div
                        className="inline-block relative"
                        onClick={toggleMenu}>

                        <div className="lg:bg-gray-900 text-white font-semibold lg:py-2 lg:pl-4 rounded-sm inline-flex items-center cursor-pointer right-0">
                            <span className="mr-1 hidden lg:inline-block">{user?.displayName} </span>
                            <img src={user?.photoURL} className='w-8 mx-3 object-cover rounded-full' alt="film_clicks_avatar" />
                        </div>

                        <ul onClick={toggleMenu}
                            className={`right-0 absolute ${isMenuShowMenu ? 'block' : 'hidden'} w-fit rounded-sm bg-gray-800 text-white whitespace-nowrap mt-2 border-t-4`}
                        >

                            <li className="cursor-pointer py-3 bg-gray-800 px-10">HI, welcome</li>
                            <li onClick={handleSignOut}
                                className="flex items-center gap-3 cursor-pointer py-3  hover:bg-gray-700 px-10">
                                SignOut<FaSignOutAlt />
                            </li>
                            <li onClick={handleToggleRecommendationView}
                                className='flex items-center gap-3 cursor-pointer py-3  hover:bg-gray-700 px-10'>
                                <Link to={'/browse'}> {!gpt.showRecommendation ? 'Get Recommendation' : 'Back to Home'}</Link>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header