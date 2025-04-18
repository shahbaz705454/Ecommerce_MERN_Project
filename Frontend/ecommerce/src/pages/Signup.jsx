import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import loginlogo from "../assest/signin.gif"
import imageTobase64 from '../helper/imageTobase64'
const Signup = () => {

    const [showpassword, setshowpassword] = useState(false);
    const [showpassword2, setshowpassword2] = useState(false);
    const [formData, setformData] = useState({
        name: "",
        confirmPassword: "",
        email: "",
        password: "",
        profilePic:""
    })

    const handleChange = (e) => {
        setformData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }

        })
    }

    const handleUploadPic = async(e)=>{
        const file = e.target.files[0];

        const result = await imageTobase64(file);

        console.log(result);

        setformData((prev)=>{
            return {
                ...prev,
                profilePic: result
            }
        })


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log(formData);

        setformData({
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        })

    }

    return (
        <div className='bg-white shadow-2xl rounded-lg h-fit w-[300px] lg:min-w-[400px] lg:min-h-[500px] flex flex-col  gap-10 justify-center mx-auto mt-10'>

            <div className='flex flex-col justify-center items-center gap-4 mt-5 '>
                <h1 className='heading  text-2xl lg:text-5xl font-bold text-center'> Signup  </h1>
                <div>
                    <label htmlFor='logo' className='flex cursor-pointer  relative flex-col justify-center items-center'>
                        
                        <img src={ formData.profilePic ? formData.profilePic : loginlogo} width={80} className='flex h-[100px] w-[100px] object-cover rounded-full  justify-center items-center'></img>
                        <input type='file' id='logo' onChange={handleUploadPic} className='hidden' />
                        <span className='absolute  text-xs rounded-full bottom-0 bg-gray-300'>Upload Image</span>


                    </label>

                </div>

            </div>

            <form onSubmit={handleSubmit} className=' flex flex-col items-center justify-center'>

                <div className='w-full px-10 flex flex-col  gap-1 mt-2'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' value={formData.name} name='name' onChange={handleChange} className='border border-black outline-none rounded-md px-2 py-1' placeholder='Enter Your Name' required />


                </div>
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

                </div>
                <div className='w-full px-10 relative flex flex-col gap-1 mt-2'>
                    <label htmlFor='confirmPassword'>Confirm Password:</label>
                    <input type={showpassword2 ? "text" : "password"} value={formData.confirmPassword} onChange={handleChange} id='confirmPassword' placeholder='Enter your password' name='confirmPassword' className='border border-black outline-none rounded-md px-2 py-1' required />
                    <span onClick={() => { setshowpassword2(!showpassword2) }} className='absolute top-9 cursor-pointer right-12'>
                        {
                            showpassword ? <FaEye /> : <FaEyeSlash />
                        }</span>

                </div>

                <button type='submit' className='mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded'>Submit</button>
            </form>

            <div className='px-2 py-2 text-sm text-start '>Already have an account ?<Link to={"/Login"} className='hover:text-red-600 cursor-pointer hover:underline text-red-400'> Login</Link></div>
        </div>
    )
}

export default Signup