import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import { validateSignIn } from '../utils/validateSignIn';
import { validateSignUp } from '../utils/validateSignUp';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {

  const [signUpValue, setSignUpValue] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);


  const [errorMessage, setErrorMessage] = useState("");
  const handleForm = () => {
    setSignUpValue(!signUpValue);
    setErrorMessage("");
  }

  const handleButton = () => {

    // Check the page is signup or signin...
    let msg = "";
    if(signUpValue === false) {
      msg =  validateSignIn(email.current.value, password.current.value);
      setErrorMessage(msg);
    }
    else {
      msg =  validateSignUp(email.current.value, password.current.value, username.current.value); 
      setErrorMessage(msg);
    }

    // Sign Up / Sign Up Logic
    if(msg.length > 0) return;
    if(signUpValue) {
      // Here write the signUp Logic for registering a user to App using firebox
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
      })
      .catch(() => {
        setErrorMessage("The Email has already sign up.");
      });

    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch(() => {
        setErrorMessage("Invalid Details");
      });

    }
    
  }
  return (
    <div className='bg-cover w-screen h-screen bg-repeat-y' style={{backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg')"}}>
      <Header/>

      {/* Form for the sign-in sign-up */}
      <div className="relative md:w-4/12 w-8/12 mx-auto right-0 left-0 md:p-5 p-3 md:my-0 my-6">
        <div className="absolute inset-0 bg-black bg-opacity-85"></div>
        <div className="relative md:p-4 p-3  text-white">
          <form action="" onSubmit={(e)=>e.preventDefault()} className='px-4'>
            {
              signUpValue ? <h1 className='md:text-3xl text-2xl md:font-bold font-semibold mb-8'>Sign Up</h1> : <h1 className='md:text-3xl text-2xl md:font-bold font-semibold mb-8'>Sign In</h1>
            }
            {
              signUpValue ? <input className='md:p-4 p-2 mb-6 w-11/12 rounded-md bg-transparent text-white placeholder-gray-400 border border-gray-400 focus:outline-none ' type="text" placeholder='Username' ref={username}/> : null
            }
            <input
             className='md:p-4 p-2 mb-6 w-11/12 rounded-md bg-transparent text-white placeholder-gray-400 border border-gray-400 focus:outline-none '
              type="email"
               placeholder='Email'
                ref={email}
            />
            <input
             className='md:p-4 p-2 mb-6 w-11/12 rounded-md bg-transparent text-white placeholder-gray-400 border border-gray-400 focus:outline-none'
              type="password"
               placeholder='Password'
                ref={password}
            />

            <p className='text-red-600 md:font-semibold font-medium'>{errorMessage}</p>

            <button className='bg-red-700 w-11/12 md:p-2 p-1 rounded-md md:mb-12 mb-9 ' onClick={handleButton}>
              {signUpValue ? "Sign Up" : "Sign In"}
            </button>
            <p className='text-gray-400'>
              {signUpValue ? "Already a user?" : "New to Netflix?"} &nbsp;
                <span onClick={handleForm} className='text-white hover:cursor-pointer'>
                  {signUpValue ? "Sign In now." : "Sign Up now."}
                </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
