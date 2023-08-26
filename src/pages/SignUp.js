import React from 'react'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import {BiArrowBack} from 'react-icons/bi'
import { useRouter } from 'next/router';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import 'tailwindcss/tailwind.css';

const SignUp = () => {
    const router = useRouter();

    const goBack = () => {
      router.back();
    };
  return (
    <div>
        <NavBar />

        <div className="w-full h-screen top-[90%] bg-zinc-900/60">
        <img src="https://images.unsplash.com/photo-1629652487043-fb2825838f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwc3VwcGxpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" className="w-full h-full object-cover absolute -z-10"></img>
        <div className="flex justify-center items-center h-full">

        <form className="max-w-[400px] w-full mx-auto border p-8">
        <BiArrowBack onClick={goBack} className="text-white cursor-pointer text-[20px]" />
            <h2 className="text-4xl font-bold text-center py-8 text-white">Sushi Muchi Sign Up</h2>
            <div className="flex flex-col mb-4">
                <label className="text-white mb-2">Email:</label>
                <input className="border bg-gray-100 p-2" type="text" placeholder="email"></input>
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-white mb-2">Username:</label>
                <input className="border bg-gray-100 p-2" type="text" placeholder="username"></input>
            </div>
            <div className="flex flex-col">
                <label className="text-white mb-2">Password:</label>
                <input className="border bg-gray-100 p-2" type="password" placeholder="password"></input>
            </div>
            <div className="flex flex-col">
                <label className="text-white mb-2">Confirm Password:</label>
                <input className="border bg-gray-100 p-2" type="password" placeholder="confirm password"></input>
            </div>
            <button className="w-full py-3 mt-8 hover:bg-black duration-300 border text-white hover:text-white cursor-pointer">Sign Up</button> 
        </form>

        </div>  
        </div>
    </div>
  )
}

export default SignUp