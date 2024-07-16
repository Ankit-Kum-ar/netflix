// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ScrollToTop from './Helpers/ScrolltoTop';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import Browser from './pages/Browser';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './redux/Slices/userSlice';

function App() {

  const dispatch = useDispatch();

  // Call the API of onAuthStateChange (this is like an event listener, so called at once).
  // At once can be done by useEffect().

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // When user Sign-In or Sign-out then this condition execute.
      if (user) { 

        const {uid, email, displayName} = user;
        // Here we dispatch the user to store.
        dispatch(addUser({uid,email,displayName}));
        

      } else { // When user Sign-Out then this condition execute.

        // Here we dispatch the user to store.
        dispatch(removeUser());
      }
    });
  }, [])

  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/browser' element={<Browser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
