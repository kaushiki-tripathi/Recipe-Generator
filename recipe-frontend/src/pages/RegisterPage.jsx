import React from 'react'
import {Link} from 'react-router-dom'
import GoogleLoginComp from '../components/googleLogin'

const RegisterPage = () => {
  return (
    <div className='w-full flex flex-col items-center px-4'>
      <div className='text-4xl mb-5'></div>
      <div className='w-full max-w-md shadow-2xl rounded-sm box p-6 md:p-10'>
        <h1 className='text-center text-xl'>Welcome to <span className='text-pink-600'>Recipe Generator</span></h1>
        <p className='text-sm text-center'>Discover a smarter way to cook</p>
        <label htmlFor="email" className='mt-4 block'>Email</label>
        <input type="email" className='w-full border-1 rounded-md p-2 mt-2 mb-4' placeholder='Enter your email'/>
        <label htmlFor="password" className=''>Password</label>
        <input type="password" className='w-full border-1 rounded-md p-2 mt-2 mb-4' placeholder='Enter your password'/>
        <input type='checkbox' id='rememberMe' className='mr-2 accent-green-700'/>
        <label htmlFor='rememberMe' className='text-sm select-none'>Remember me</label>
        <p className='text-sm text-center mt-2'>By clicking Agree & Join, you agree to the Recipe Generator <span className='text-pink-600 cursor-pointer hover:underline'>User Agreement</span>, <span className='text-pink-600 cursor-pointer hover:underline'>Privacy Policy</span>, and <span className='text-pink-600 cursor-pointer hover:underline'>Cookie Policy</span>.</p>
        <button className='w-full bg-pink-800 text-white rounded-md p-2 mt-4 mb-4 hover:bg-pink-600 cursor-pointer'>Agree & Join</button>
        <div className='flex items-center gap-2'>
          <div className='border-b-1 border-gray-400 w-[45%]'></div>
          <div>or</div>
          <div className='border-b-1 border-gray-400 w-[45%]'></div>
        </div>
        <div className='my-4 border-2 hover:bg-gray-500 rounded-md'><GoogleLoginComp></GoogleLoginComp></div>
        <div className='mt-4 mb-10 text-center'>Already on Recipe Generator?<Link to={'/login'} className='text-pink-800 cursor-pointer hover:underline'> Sign in</Link></div>
      </div>
    </div>
  )
}

export default RegisterPage