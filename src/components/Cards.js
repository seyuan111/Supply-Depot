'use client'
import React, {useState} from 'react'
import Link from 'next/link'

const Cards = () => {
  return (
    <div className="bg-gray-600 max-w-full mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
    <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/40 text-white text-center">
            <p className="font-bold text-2xl px-2 pt-14">Want Delivery?</p>
            <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2"><Link href="/Delivery">Deliver Supplies</Link></button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://plus.unsplash.com/premium_photo-1682141916641-788c26579bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80" alt="/"></img>
    </div>

    <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/40 text-white text-center">
            <p className="font-bold text-2xl px-2 pt-14">Back To School Exclusive Deals</p>
            <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2"><Link href="/Store">Get Deals</Link></button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://plus.unsplash.com/premium_photo-1686963590692-6ee248d29876?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Nob29sJTIwc3VwcGxpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" alt="/"></img>
    </div>

    <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/40 text-white text-center">
            <p className="font-bold text-2xl px-2 pt-14">Rate us</p>
            <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2"><Link href="/Reviews">Click to Rate</Link></button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://images.unsplash.com/photo-1518826778770-a729fb53327c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80" alt="/"></img>
    </div>
</div>
  )
}

export default Cards