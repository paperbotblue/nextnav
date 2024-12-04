import React, { useState } from "react";
import Logo from "../../assets/logo.png"
import { useForm } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";
import FirstPageContainer from "./FirstPageContainer";
import { Link, useNavigate } from "react-router-dom";
import ErrorIcon from '../../assets/error.png'
import {useDispatch} from 'react-redux'
import { login } from '../../store/authslice'



const Login = () => {
  const { register, handleSubmit,formState: { errors },  } = useForm();
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch()
  const naviget = useNavigate()

  const passwordShow = () => {
    const inputbtn = document.getElementById("password"); 
    if (inputbtn.type === "password") {
      inputbtn.type = "text";
      setVisible();
    } else {
      inputbtn.type = "password";
      setVisible(false);
    }
  };

  const onSubmit = (data) => {
    try {
      console.log(data);
      naviget('/adminhome')
      dispatch(login())
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    
    <FirstPageContainer>
      <div className="relative z-50 flex border border-gray-100/50 flex-col bg-white/20 shadow-2xl px-10 py-7 rounded-md  w-1/4 ">
        <div className=" w-full pb-10 flex justify-between items-center">
          <span className="w-[4rem]">
            <img src={Logo}></img>
          </span>
          <h2 className="text-xl font-semibold text-gray-800 uppercase">
            Admin Login
          </h2>
        </div>
        {error && <div className="flex flex-col items-center"><img src={ErrorIcon} className="w-6"></img> <p className="w-full border-b mb-4 py-2 border-red-500 text-sm select-none text-red-500 pl-3">{error}</p></div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col space-y-1 pb-2">
              <label htmlFor="email">
                Email
                <span className="text-red-600 font-semibold text-sm align-top select-none">
                  &nbsp;*
                </span>
              </label>
              <input
                className={`px-3 py-4 rounded-lg outline-0 right-1 border border-gray-500 focus:border-0 ${errors.email || error ? 'focus:ring-1 focus:ring-red-500 border-red-500' : 'focus:ring-1 focus:ring-green-500'}`}
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: 'Email is required',
                  validate: {
                    matchPattern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
                id="email"
              />
              {errors.email && <p className="text-sm text-red-500 pl-3">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col space-y-1 pb-2">
              <label htmlFor="password">
                Password
                <span className="text-red-600 font-semibold text-sm align-top select-none">
                  &nbsp;*
                </span>
              </label>
              <div className="w-full flex items-center justify-end relative">
                <input
                  className={`w-full px-3 py-4 rounded-lg outline-0 right-1 border select-none border-gray-500 focus:border-0 ${errors.password || error ? 'focus:ring-1 focus:ring-red-500 border-red-500' : 'focus:ring-1 focus:ring-green-500'}`}
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: 'Password is required',
                    minLength:{value:8, message:"Minimum required length is 8"},
                    maxLength:{value:20, message:"Maximum length is 20"},
                  })}
                  id="password"
                ></input>
                <span
                  className="absolute z-50 cursor-pointer text-xl p-4"
                  onClick={passwordShow}
                >
                  {visible ? <LuEye /> : <LuEyeOff />}
                </span>
              </div>
              {errors.password && <p className="text-sm text-red-500 pl-3 select-none">{errors.password.message}</p>}
            </div>
            <div className="w-full flex justify-end">
              
              <button className="select-none text-blue-300 cursor-pointer hover:text-blue-500 font-semibold tracking-wide duration-75" onClick={()=>naviget('/forgate')}>
                Forget Password&nbsp;&nbsp;&#63;
              </button>
              
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-sky-600 text-xl text-white font-semibold border hover:bg-sky-700 hover:border-gray-200/70 duration-200 border-gray-200/50 tracking-wide rounded-md select-none "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </FirstPageContainer>
    
  );
};

export default Login;
