import React from 'react'
import {useState} from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({setIsLoggedIn}) => {
    const navigate= useNavigate();

    const [formData, setformData]= useState( {email:"", password:""});

    const [showPassword, setshowPassword] = useState(false);

    function changeHandler(e)
    {
        setformData((prev) =>(
           { 
             ...prev, 
            [e.target.name]:e.target.value 
        }
        ))
    }

    function eyeHandler(){
       
            setshowPassword(!showPassword);  // if didn't worked
                                            // (prev) => !prev
        
    }

    function submitHandler(e)
    {
             e.preventDefault();
             setIsLoggedIn(true);
             toast.success("logged in successsfully");
             navigate('/Dashboard');
             
    }
  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
        <label className="w-full" >

            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address
                 <sup className="text-amber-300 text-[30px] px-[10px]  absolute top-[265px]">*</sup></p>

            <input 
            required              // why this?
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter the Email Id'
            name="email"
             className="bg-lime-200 rounded-[0.75rem] w-full p-[12px] text-richblack-5" />
        </label>

         <label className="w-full relative">

            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Password
                 <sup className="text-amber-300 text-[30px] px-[10px]  absolute top-[15px]">*</sup></p>

            <input 
            required              // why this?
            type={showPassword ? ("text"):("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Password'
            name="password" 
              className="bg-lime-200 rounded-[0.75rem] w-full p-[12px] text-black"/>

            <span onClick={eyeHandler} className="absolute right-3 top-[38px] cursor-pointer ">
                {showPassword ?(<FaEye fontSize={30}  fill='#AFB2BF'/>) :(<FaEyeSlash  fontSize={30}  fill='#AFB2BF' />)}
            </span>

            <Link to='#'>        
            {/* why #   */}
             <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
               Forget Password
             </p>
            </Link>
        </label>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-red-300">
            SignIn
        </button>
    </form>
  )
}

export default LoginForm