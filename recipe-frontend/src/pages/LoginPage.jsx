import React from 'react'
import {Link} from 'react-router-dom'
import googleLogin from '../components/googleLogin'
import GoogleLoginComp from '../components/googleLogin'

const LoginPage = () => {
  return (
    <div className='w-full flex flex-col items-center px-4'>
        <div className='w-full max-w-md shadow-2xl rounded-sm box p-6 md:p-10 mt-8'>
          <h1 className='text-center text-xl'>Welcome to <span className='text-pink-600'>Recipe Generator</span></h1>
          <p className='text-sm text-center'>Open your cookbook </p>
          <label htmlFor="email" className='mt-4 block'>Email</label>
          <input type='email'className='w-full border-1 rounded-md p-2 mt-2 mb-4' placeholder='Enter your email'/>
        <label htmlFor="password" className=''>Password</label>
        <input type="password" className='w-full border-1 rounded-md p-2 mt-2 mb-4' placeholder='Enter your password'/>
        <p className='text-purple-700 cursor-pointer hover:underline'>Forgot your password?</p>
        <button className='w-full bg-pink-800 text-white rounded-md p-2 mt-4 mb-4 hover:bg-pink-600 cursor-pointer'>Login</button>
         <div className='flex items-center gap-2'>
          <div className='border-b-1 border-gray-400 w-[45%]'></div>
          <div>or</div>
          <div className='border-b-1 border-gray-400 w-[45%]'></div>
        </div>
        <div className='my-4 border-2 rounded-md'><GoogleLoginComp></GoogleLoginComp></div>
        <div className='mt-4 mb-10 text-center'>New to Recipe Generator?<Link to={'/register'} className='text-pink-800 cursor-pointer hover:underline'> Join Now</Link></div>
        </div>
    </div>
  )
}

export default LoginPage
