import React from 'react'
import FrameImage from '../Asset/frame.png';
import SignupForm from './SignupForm';
import LoginForm from "./LoginForm.js"
import { FaGoogle } from 'react-icons/fa';
 

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">
      <div className="w-11/12 max-w-[450px] mx-0 text-white">
            <h1 className="text-red-400 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
        <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
          <span className="text-black">{desc1}</span>
           <span className="text-blue-100 italic">{desc2}</span>
        </p>

        { 
         // for the form of login and signup
          formtype == 'signup' ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>  ):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>) 
        }

        <div className="flex w-full items-center my-4 gap-x-2">
            <div className="h-[1px] w-full bg-black"></div>
            <p className="text-black font-medium leading-[1.375rem]">OR</p>
            <div className="h-[1px] w-full bg-black"></div>
        </div>

        <button className="w-full flex items-center bg-red-100 justify-center rounded-[8px] font-medium text-red-950 border-black border px-[12px] py-[8px] gap-x-2 mt-6">
           < FaGoogle/>
            <p>Sign in with Google</p>
        </button>
      </div>
       

        <div className="relative w-11/12 max-w-[450px]">
          <img src={FrameImage} alt="Pettern" 
          width={558}
          height={584}
          loading='lazy'/>

          <img src={image} alt="Students" 
          width={558}
          height={490}
          loading='lazy'
           className="absolute -top-4 right-4 "/>
        </div>
    </div>
  )
}

export default Template