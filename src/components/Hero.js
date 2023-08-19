'use client'
import React, {useState} from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="w-full h-screen top-[90px] bg-zinc-900/60">
        <img src="https://images.unsplash.com/photo-1629652487043-fb2825838f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwc3VwcGxpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" className="w-full h-full object-cover absolute -z-10"></img>

        <div className="w-full h-[90%] text-center flex flex-col items-center justify-center px-4 text-white">
            <h1 className="font-bold text-2xl underline">Welcome to Supply-Depot</h1>
            <h1 className="text-[25px] mt-12 text-white">Order your Supplies here and get your supplies for schools etc.</h1>
            <p className="mb-5 font-bold">Order your Supplies at the bottom</p>
                <div className="text-white">
                    <button className="px-6 py-2 hover:bg-black duration-300 border"><Link href="/Shop">Shop</Link></button>
                    <button className="px-6 py-2 hover:bg-black duration-300 ml-6 border"><Link href="/FAQ">FAQ</Link></button>
                </div>
        </div>

    </div>
  )
}

export default Hero