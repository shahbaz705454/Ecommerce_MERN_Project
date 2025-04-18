import React from 'react'
import logo from "../assest/logo2.png"
import { CiSearch } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className=' shadow-md h-16 bg-white'>

            <div className='flex justify-between items-center h-full mx-auto px-6 '>
                
                <Link to="/"> 
                <img src={logo} width={60} className='' alt="Logo" />
                </Link>

                <div className=' hidden lg:flex items-center justify-center'>
                  <input type='text' placeholder='Search product here' className='border rounded-l-xl focus-within:shadow-xl outline-none  border-black py-[3.1px] border-r-0  px-4'></input>
                  <div className='text-2xl cursor-pointer bg-red-600 hover:bg-red-700 px-2 py-1 rounded-r-xl text-white'><GoSearch /></div>
                </div>

                <div className='flex gap-6 items-center justify-center'>
                    <div className='text-2xl relative cursor-pointer '>
                    <FaCartShopping />
                    <span className='absolute text-sm border bg-red-800 text-white border-black rounded-full w-5 h-5 items-center justify-center flex bottom-3 left-4'>0</span>
                    </div>
                    <div className='text-2xl cursor-pointer'>
                    <FaUserCircle />
                    </div>

                    <div>
                        <button className='bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg'>
                            <Link to="/login">Login</Link>
                        </button>
                    </div>
                  
                </div>
            </div>
        </header>
    )
}

export default Header