import React from 'react'
import {Link} from 'react-router-dom'
import googleLogin from '../components/googleLogin'
import GoogleLoginComp from '../components/googleLogin'
import Footer from '../components/Footer'

const landingpage = () => {
  return (
    <div className='my-3 py-[50px] md:pl-[120px] gap-6 px-6 md:flex justify-between items-center'>
      <div className='w-full md:w-[40%]'>
        <div className='text-3xl md:text-5xl mx:auto text-gray-500 text-center'>Turn Your Ingredients into Delicious Meals </div>
        <div className='my-3 flex mx-auto mt-[35px] border-2 rounded-md w-full md:w-[70%] cursor-pointer hover:bg-gray-200'><GoogleLoginComp></GoogleLoginComp></div>
        <Link to='/login' className='flex mx-auto mt-[28px] py-2 px-2 bg-white gap-2 rounded-md items-center w-full md:w-[70%] justify-center text-gray-700 hover:bg-gray-200 border-2 border-black cursor-pointer'>Sign in  with email</Link>
        <div className='mx-auto mb-4 text-sm w-full md:w-[70%] mt-6 font-bold text-pink-500'>Not sure what to cook with what you have?</div>
        <div className='mx-auto text-sm w-full md:w-[70%] font-bold text-pink-500'>Login to explore endless recipes based on your ingredients.</div>
        <div className='flex justify-center w-full md:w-[70%] mx-auto mb-4 mt-4'>
          <Link to={'/register'} className='text-center text-lg'>New to Recipe Generator?<span className='text-pink-800 cursor-pointer hover:underline'> Join now</span></Link>
        </div>
      </div>
      <div className='md:w-[50%] h-120'>
        <img alt="image" className='w-full h-auto object-cover max-h-[450px] md:max-h[500px] rounded-xl' src={'https://plus.unsplash.com/premium_photo-1694977744020-6ef9fec05ee1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
      </div>
    </div>
    
  )
};
export default landingpage;