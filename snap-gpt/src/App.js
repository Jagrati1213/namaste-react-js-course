import React, { useEffect } from 'react'
import Body from './components/body/Body';
import Header from './components/header/Header';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/redux/slice/UserSlice';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    // onAuthStateChanged : run whenever user signIn & signOut
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // User is signed in
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

        // Only navigate to /browse if the current route is not /browse/
        if (!location.pathname.startsWith('/browse/')) {
          navigate('/browse');
        }
      }
      else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    // unsubscribe when we unmount the element 
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className='app max-w-screen-2xl mx-auto relative w-full min-h-[100vh] overflow-x-hidden'>
      <Header />
      <Body />
    </div>
  );
}

export default App;
