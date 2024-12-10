import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FirstPageContainer from "./FirstPageContainer";
import Logo from "../../assets/logo.png";
import { useForm, useWatch } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";
import ErrorIcon from '../../assets/error.png'


const ChangePassword = () => {
  const [serverError, setServerError] = useState("");
  const [visible, setVisible] = useState(false);

  const passwordShow = () => {
    const inputbtn = document.getElementById("confirmpassword"); 
    if (inputbtn.type === "password") {
      inputbtn.type = "text";
      setVisible(true);
    } else {
      inputbtn.type = "password";
      setVisible(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode:'onTouched'
  });

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData;
    formData.append("old_password", data.oldpassword)
    formData.append("new_password", data.newpassword)

    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/userHandling/change_password.php",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });
      alert(response.data.success);
    } catch (error) {
      alert("sdffsdfsd");

    }
  };


  const newpassword = watch("newpassword");


  
   
  return (
    <FirstPageContainer>
      <div className="relative z-50 flex border border-gray-100/50 flex-col bg-white/20 shadow-2xl px-10 py-7 rounded-md  w-1/4 ">
        <div className=" w-full pb-5 flex justify-between items-center">
          <span className="w-[4rem]">
            <img src={Logo}></img>
          </span>
          <h2 className="text-xl font-semibold text-gray-800 uppercase">
            set password
          </h2>
        </div>
        {serverError && <div className="flex flex-col items-center"><img src={ErrorIcon} className="w-6"></img> <p className="w-full border-b mb-4 py-2 border-red-500 text-sm select-none text-red-500 pl-3">{serverError}</p></div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 items-center">
          <div className="w-full flex flex-col mt-2 gap-1">
              {/* <label htmlFor="newpassword">
                New Password
                <span className="text-red-600 font-semibold text-sm align-top select-none">
                  &nbsp;*
                </span>
              </label> */}
              
              <input
                 className={`px-3 py-4 rounded-lg outline-0 right-1 border border-gray-500 focus:border-0 ${errors.oldpassword || serverError ? 'focus:ring-1 focus:ring-red-500 border-red-500' : 'focus:ring-1 focus:ring-green-500'}`}
                type="text"
                placeholder="Old Password"
                {...register("oldpassword", {
                  required: "Old Password is required",
                  minLength:{value:8, message:"Minimum required length is 8"},
                  maxLength:{value:20, message:"Maximum length is 20"},
                  pattern:{
                    value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:"Password must contain atleast 1 uppercase, 1 lowercase, 1 number and 1 special character"
                  }
                })}
                
                id="oldpassword"
              />
              {errors.oldpassword && <p className="text-sm text-red-500 pl-3">{errors.oldpassword.message}</p>}
            </div>
            <div className="w-full flex flex-col mt-2 gap-1">
              {/* <label htmlFor="newpassword">
                New Password
                <span className="text-red-600 font-semibold text-sm align-top select-none">
                  &nbsp;*
                </span>
              </label> */}
              
              <input
                 className={`px-3 py-4 rounded-lg outline-0 right-1 border border-gray-500 focus:border-0 ${errors.newpassword || serverError ? 'focus:ring-1 focus:ring-red-500 border-red-500' : 'focus:ring-1 focus:ring-green-500'}`}
                type="text"
                placeholder="New Password"
                {...register("newpassword", {
                  required: "New Password is required",
                  minLength:{value:8, message:"Minimum required length is 8"},
                  maxLength:{value:20, message:"Maximum length is 20"},
                  pattern:{
                    value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:"Password must contain atleast 1 uppercase, 1 lowercase, 1 number and 1 special character"
                  }
                })}
                
                id="newpassword"
              />
              {errors.newpassword && <p className="text-sm text-red-500 pl-3">{errors.newpassword.message}</p>}
            </div>

            <div className="w-full flex flex-col gap-1">
              <div className="flex justify-between">
                {/* <label htmlFor="confirmpassword">
                  Confirm Password
                  <span className="text-red-600 font-semibold text-sm align-top select-none">
                    &nbsp;*
                  </span>
                </label> */}
                {/* {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>} */}
              </div>
              <div className="w-full flex items-center justify-end relative">
              <input
                type="password"
                onPaste={(e) => e.preventDefault() }
                className={`w-full  px-3 py-4 rounded-lg outline-0 right-1 border border-gray-500 focus:border-0 ${errors.confirmpassword || serverError ? 'focus:ring-1 focus:ring-red-500 border-red-500' : 'focus:ring-1 focus:ring-green-500'}`}
                
                placeholder="Confirm Password"
                {...register("confirmpassword", {
                  required: "Confirm Password is required",
                  minLength:{value:8, message:"Minimum required length is 8"},
                  maxLength: {value:20, message:"Maximum length is 20"},
                  validate: (value) =>(value === newpassword || "Password does not match")
                })}
                id="confirmpassword"
              />
              <span
                  className="absolute z-50 cursor-pointer text-xl p-4"
                  onClick={passwordShow}
                >
                  {visible ? <LuEye /> : <LuEyeOff />}
              </span>
              </div>
              {errors.confirmpassword && <p className="text-sm text-red-500 select-none pl-3">{errors.confirmpassword.message}</p>}
            </div>
            <input
              // onSubmit={checking}
              type="submit"
              value='Update' 
              className={`w-1/2 py-3 mt-4 text-xl text-white font-semibold border  duration-200 border-gray-200/50 tracking-wide rounded-md select-none cursor-pointer hover:bg-sky-500 bg-sky-600 hover:border-gray-200/70`}
              
            >
            </input>
          </div>
        </form>
      </div>
    </FirstPageContainer>
  );
};

export default ChangePassword;
