import React,{useState, useEffect} from 'react'
import FirstPageContainer from './FirstPageContainer'
import Logo from '../../assets/logo.png'
// import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import ErrorIcon from '../../assets/error.png'
import { Link } from 'react-router-dom';

const Verification = () => {
   
    const [error, setError] = useState("");
    const [verify, setVerify] = useState(false);

    

  return (
    <FirstPageContainer>
        <div className="relative z-40 flex border border-gray-100/50 flex-col bg-white/20 shadow-2xl px-10 py-7 rounded-md  w-1/4 ">
        <div className=" w-full pb-5 flex justify-between items-center">
          <span className="w-[4rem]">
            <img src={Logo}></img>
          </span>
          <h2 className="text-xl font-semibold text-gray-800 uppercase">
            Email Verification
          </h2>
        </div>
        <div>
            {verify ? <h1 className='w-full py-4 text-center'>Email is verifying...</h1> : <div className={`w-full px-3 text-base font-medium tracking-wide flex justify-center   ${error ? 'py-4' : 'border-green-500 text-green-800 border rounded-md py-2'} `}>{error ? <p className='flex gap-2 items-center'><img src={ErrorIcon} className='w-8'/></p> : <p className='py-2 flex items-center gap-2'><IoShieldCheckmark className='text-2xl'/>Email is verified</p>}</div>}
        </div>
        
        {error && <p className='w-full border rounded-md border-red-600/50 px-3 py-4 text-red-600 text-base font-medium tracking-wide'>{error}</p>}
        <Link to={error ? '/forget' : '/change'} className="w-1/3 mt-5 text-center mx-auto py-2 bg-sky-600 text-xl text-white font-semibold border hover:bg-sky-700 hover:border-gray-200/70 duration-200 border-gray-200/50 tracking-wide rounded-md select-none ">
              {error ? "Try Again" : "Next"}
        </Link>
        </div>
    </FirstPageContainer>
  )
}

export default Verification
