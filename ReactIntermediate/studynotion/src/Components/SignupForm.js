import React, { useState } from 'react'
import { FaEyeSlash, FaEye} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignupForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

    const [formData, setformData] = useState(
        {firstname :"",
        lastname : "",
        email: "",
        password:"",
        confirmPassword:""}

    );

    const [accountType, setAccountType] = useState("student");
    function changeHandler(e)
    {  
        e.preventDefault();
        setformData((prev) =>(
           { 
             ...prev, 
            [e.target.name]:e.target.value 
        }
        ))
    }

    const [showPassword, setshowPassword] = useState({show1:false, show2: false});  // *ye wala part important hai

    function eyeHandler(field) {
    setshowPassword((prev) => ({
    ...prev,
    [field]: !prev[field],
    }));
}

  function submitHandler(e)
  {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword)
    {
      toast.error("password not mattched");
     setformData( { password:"",
        confirmPassword:""})
      return;
    }
   
    setIsLoggedIn(true);
    toast.success('Account Created successfully')

    // to show the values only 
    const accountDetail = {...formData};
    const finalData= {...accountDetail,accountType};
    console.log("All data of user");
    console.log(finalData);

    navigate('/Dashboard');

  }
  return (
    <div  >

        {/* student instructor tab */}
        <div  className="flex bg-lime-200 p-1 gap-x-1 rounded-full max-w-max">
              <button onClick={() => setAccountType("student")}
                className={`${             // dekho kaisa kiya hai
                  accountType === "student"
                    ? "bg-neutral-600 "
                    : "bg-slate-200 text-black "
                } py-2 px-5 rounded-full transition-all`}>
                Student
              </button>

              <button onClick={() => setAccountType("instructor")}
                 className={`${                              // dekho kaisa kiya hai
                accountType === "instructor"
                  ? "bg-neutral-600 "
                  : "bg-slate-200 text-black "
              } py-2 px-5 rounded-full transition-all`}>
                Instructor
              </button>
        </div>

        <form onSubmit={submitHandler}>

          {/* last and first name input */}

          <div className="flex gap-x-4">
                 <label >

               <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup  className="text-pink-200">*</sup></p>
            <input
            required 
            type="text" 
            name="firstname"
            onChange={changeHandler}
            placeholder='Enter the firstName'
            value={formData.firstname}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"/>

            </label>

             <label  className="w-full">

               <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name <sup>*</sup></p>
            <input
            required 
            type="text" 
            name="lastname"
            onChange={changeHandler}
            placeholder='Enter the lastName'
            value={formData.lastname}
          className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"/>

            </label>
          </div>
   
        {/* emial adreess */}
            <label className="w-full">

               <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address <sup>*</sup></p>
            <input
            required 
            type="email" 
            name="email"
            onChange={changeHandler}
            placeholder='Enter the Email Address'
            value={formData.email}
             className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"/>

            </label>

            {/* create and confirm the password */}
            <div>

                <label className="w-full relative" >

               <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password <sup>*</sup></p>
            <input
            required 
            type={showPassword.show1 ? "text" : "password"}  // **ye wala part important hai
            name="password"
            onChange={changeHandler}
            placeholder='Enter the Password'
            value={formData.password}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-black"/>
            

            {/* // ***ye wala part important hai */}
            <span  className="absolute right-3 top-[38px] cursor-pointer z-10"
            onClick={() => eyeHandler("show1")}>    
              {showPassword.show1 ? <FaEye fontSize={24} fill="#AFB2BF" /> : <FaEyeSlash fontSize={24} fill="#AFB2BF" />}
            </span>

            </label>

              <label className="w-full relative" >

               <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password <sup>*</sup></p>
            <input
            required 
          type={showPassword.show2 ? "text" : "password"}
            name="confirmPassword"
            onChange={changeHandler}
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-black"/>

           <span  className="absolute right-3 top-[75px] cursor-pointer z-10"
            onClick={() => eyeHandler("show2")}>
              {showPassword.show2 ? <FaEye fontSize={24} fill="#AFB2BF"/> : <FaEyeSlash fontSize={24} fill="#AFB2BF" />}
            </span>

            </label>
            </div>
        


            <button className="bg-yellow-400 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-black w-full">
                Create Account
            </button>

             
          

            

        </form>
    </div>
  )
}

export default SignupForm