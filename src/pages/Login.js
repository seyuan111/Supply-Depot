import React from 'react'
import NavBar from '../components/NavBar'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'

const Login = () => {
  return (
    <div>
        <NavBar />

        <div className="w-full h-screen top-[80%] bg-zinc-900/60">
            <img src="https://images.unsplash.com/photo-1629652487043-fb2825838f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwc3VwcGxpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" className="w-full h-full object-cover absolute -z-10"></img>

            <div className="flex justify-center items-center h-full">
            <form className="max-w-[400px] w-full mx-auto p-8 border-2">
              <h2 className="text-4xl font-bold text-center py-8 text-white">Supply-Depot Login</h2>
              <div className="flex flex-col mb-4">
                <label className="mb-2 text-white">Username:</label>
                <input className="border bg-gray-100 p-2" type="text" placeholder="Username"></input>
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-white">Password:</label>
                <input className="border bg-gray-100 p-2" type="password" placeholder="password"></input>
              </div>
              <button className="w-full py-3 mt-8 hover:bg-black duration-300 border text-white hover:text-white cursor-pointer">Sign in</button>
              <p className="text-white"><input className="mr-2" type="checkbox"></input>Remember this account</p>
              <p className="text-white"><span className="text-blue-500 cursor-pointer"><Link href="/SignUp">Sign up</Link></span> to become a member</p>    
            </form>
          </div> 
        </div>
    </div>
  )
}

export default Login