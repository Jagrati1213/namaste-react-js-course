import React, { useEffect } from 'react'
import Body from './components/body/Body';
import Header from './components/header/Header';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/redux/slice/UserSlice';
import { useNavigate } from 'react-router-dom';

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    // onAuthStateChanged : run whenever user signIn & signOut
    onAuthStateChanged(auth, (user) => {
      // User is signed in
      if (user) {
        const { uid, displayName, email } = user;
        console.log(user);
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse');
      }
      else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
  }, []);

  return (
    <div className='app w-full bg-black min-h-[100vh]'>
      <Header />
      <Body />
      <div>Footer</div>
    </div>
  );
}

export default App;
