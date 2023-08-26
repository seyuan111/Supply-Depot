import React from 'react'
import NavBar from '../components/NavBar'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'

const About = () => {
  return (
    <div>
        <NavBar />
        <div className="w-full h-screen top-[90px] bg-zinc-900/60">
            <img src="https://images.unsplash.com/photo-1629652487043-fb2825838f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwc3VwcGxpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" className="w-full h-full object-cover absolute -z-10"></img>

            <div className="w-full h-[90%] text-center flex flex-col items-center justify-center px-4 text-white">
                <h1 className="font-bold text-2xl underline">About Supply-Depot</h1>
                <h1 className="text-[25px] mt-12 text-white">Would you like to get your supplies online for back to school, offices, and at home etc?</h1>
                <p className="mt-5 font-bold">Supply Depot has the best supplies for you to order your supplies online.</p>
                <p className="font-bold">Order notebooks, pens, pencils, and all other school and office supplies. We also sell electronics as well</p>
                <p className="font-bold">Just put in your address and we will delivery your school supplies to your home.</p>
            </div>
        </div>
    </div>
  )
}

export default About