import React from 'react'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";
import loginlogo from "../assest/signin.gif"
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import summaryApi from '../../commomAPI';

const Login = () => {
    const navigate = useNavigate();
    const [showpassword, setshowpassword] = useState(false);
    const [formData, setformData] = useState({
        email: "",
        password: ""
    })



    const handleChange = (e) => {
        setformData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }

        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const toastId = toast.loading("Logging in...");

        try {
            if (!formData.email || !formData.password) {
                toast.dismiss(toastId);
                toast.error("Please fill in all fields");
                return;
            }

            const response = await axios.post(summaryApi.signIn.url, formData);
            if (response.data.success) {
                toast.dismiss(toastId);
                toast.success("Login successful!");
                setformData({
                    email: "",
                    password: ""
                })

                navigate("/");
            } else {
                toast.dismiss(toastId);
                toast.error(response.data.message || "Login failed");
            }


        } catch (err) {
            toast.dismiss(toastId);
            toast.error(err.response?.data?.message || "An error occurred during login");
        }




    }

    return (
        <div className='bg-white shadow-2xl rounded-lg h-[400px] w-[300px] lg:w-[400px] lg:h-[400px] flex flex-col  gap-10 justify-center mx-auto mt-10'>

            <div className='flex justify-center items-center gap-3 mt-5 '>
                <h1 className='heading  text-2xl lg:text-5xl font-bold text-center'> Login  </h1>
                <img src={loginlogo} width={50} className='flex justify-center items-center'></img>

            </div>

            <form onSubmit={handleSubmit} className=' flex flex-col items-center justify-center'>
                <div className='w-full px-10 flex flex-col  gap-1 mt-2'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' value={formData.email} name='email' onChange={handleChange} className='border border-black outline-none rounded-md px-2 py-1' placeholder='Enter Your Email' required />


                </div>
                <div className='w-full px-10 relative flex flex-col gap-1 mt-2'>
                    <label htmlFor='password'>Password:</label>
                    <input type={showpassword ? "text" : "password"} value={formData.password} onChange={handleChange} id='password' placeholder='Enter you password' name='password' className='border border-black outline-none rounded-md px-2 py-1' required />
                    <span onClick={() => { setshowpassword(!showpassword) }} className='absolute top-9 cursor-pointer right-12'>
                        {
                            showpassword ? <FaEye /> : <FaEyeSlash />
                        }</span>
                    <div className='text-xs cursor-pointer underline hover:text-red-400 items-end text-end'><Link to={"/Forgetpassword"}>Forgot your password ?</Link></div>
                </div>

                <button type='submit' className='mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded'>Submit</button>
            </form>

            <div className='px-2 py-2 text-sm  text-start '>Already have an account ?<Link to={"/Signup"} className='hover:text-red-500 text-red-400 cursor-pointer hover:underline '> SignUp</Link></div>
        </div>
    )
}

export default Login