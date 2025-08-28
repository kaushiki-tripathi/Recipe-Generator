import React from 'react'
import {GoogleLogin} from "@react-oauth/google"

const GoogleLoginComp = () => {
  return (
    <div className='w-full'>
      <GoogleLogin>
        onSuccess=
        {(credentialResponse)=>handleonSuccess(credentialResponse)} 
        onError=
        {() => {
          console.log("Login Failed");
        }}
      </GoogleLogin>
    </div>
  );
};

export default GoogleLoginComp
