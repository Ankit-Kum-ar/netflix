import React, { useState } from 'react'
import Header from '../components/Header'

const Login = () => {

  const [signUpValue, setSignUpValue] = useState(false);


  const handleForm = () => {
    setSignUpValue(!signUpValue);
  }
  return (
    <div className='bg-cover w-screen h-screen' style={{backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg')"}}>
      <Header/>
      <div className="relative w-4/12 mx-auto right-0 left-0 p-5">
        <div className="absolute inset-0 bg-black bg-opacity-85"></div>
        <div className="relative p-4  text-white">
          <form action="" className='px-4'>
            {
              signUpValue ? <h1 className='text-3xl font-bold mb-8'>Sign Up</h1> : <h1 className='text-3xl font-bold mb-8'>Sign In</h1>
            }
            {
              signUpValue ? <input className='p-4 mb-6 w-11/12 rounded-md bg-transparent text-white placeholder-gray-400 border border-gray-400 focus:outline-none ' type="text" placeholder='Username' /> : null
            }
            <input className='p-4 mb-6 w-11/12 rounded-md bg-transparent text-white placeholder-gray-400 border border-gray-400 focus:outline-none ' type="email" placeholder='Email' />
            <input className='p-4 mb-6 w-11/12 rounded-md bg-transparent text-white placeholder-gray-400 border border-gray-400 focus:outline-none ' type="password" placeholder='Password' />
            <button className='bg-red-700 w-11/12 p-2 rounded-md mb-12 '>{signUpValue ? "Sign Up" : "Sign In"}</button>
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
