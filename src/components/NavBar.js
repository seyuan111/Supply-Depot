"use client"
import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link'

const NavBar = () => {
    const [nav, setNav] = useState(false)
  return (
    <div className="w-full h-[70px] bg-gradient-to-r from-cyan-600 to-blue-500 fixed z-10">

        <div className="max-w-[1240px] mx-auto flex justify-between items-center p-4">

            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer text-white">
                    <GiHamburgerMenu size={25}/>
                </div>
                <h1 className="text-2xl font-bold text-white mx-4"><Link href="/">Supply-Depot</Link></h1>
            </div>

            <div className="text-white border-2 rounded-xl flex items-center px-2 w-[200px] sm:w-[300px] lg:w-[300px]">
                <AiOutlineSearch size={30} className="cursor-pointer" />
                <input className="bg-transparent p-2 w-full outline-0" type="text" placeholder="search supplies"></input>
            </div>

            <button><Link className="border-2 text-white hidden md:flex items-center py-2 px-4 rounded-full" href='/Checkout'><AiOutlineShoppingCart size={20} className="mr-2"/>Cart</Link></button>

            {nav ? <div className="bg-black/40 fixed w-full h-screen z-10 top-0 left-0"></div> : ""}

            <div onClick={() => setNav(!nav)} className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose size={30} className="absolute right-4 top-4 cursor-pointer" />
                <h2 className="text-2xl p-4">Supply-Depot</h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl flex my-4"><Link href="/">Home</Link></li>
                        <li className="text-xl flex my-4"><Link href="/About">About</Link></li>
                        <li className="text-xl flex my-4"><Link href="/Shop">Shop</Link></li>
                        <li className="text-xl flex my-4"><Link href="/Deals">Deals</Link></li>
                        <li className="text-xl flex my-4"><Link href="/Contact">Contact</Link></li>
                        <li className="text-xl flex my-4"><Link href="Login">Login</Link></li>
                        <li className="text-xl flex my-4"><Link href="/Checkout">Cart</Link></li>
                    </ul>
                </nav>
            </div>

        </div>
    </div>
  )
}

export default NavBar