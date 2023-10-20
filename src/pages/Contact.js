import React from 'react'
import NavBar from '../components/NavBar'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'

const Contact = () => {
  return (
  <div>
    <NavBar />

    <div className="w-full h-screen top-[90px] bg-zinc-900/60">
            <img src="https://images.unsplash.com/photo-1629652487043-fb2825838f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwc3VwcGxpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" className="w-full h-full object-cover absolute -z-10"></img>
        <h1 className="text-2xl justify-center text-white">Help Center</h1>
        
        <div className="flex">
          <div class="bg-white w-1/3 m-2 rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Account</div>
              <div className="flex flex-col">
                <Link href="/Password">Reset a Password</Link>
                <Link href="/Account">Report an issue</Link>
              </div>
            </div>
          </div>

          <div class="bg-white w-1/3 m-2 rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Order Issue</div>
            <div className="flex flex-col">
              <Link href="/Cancel">Cancel an order</Link>
              <Link href="/Track">Track an order</Link>
              <Link href="/History">View Receipt</Link>
            </div>
          </div>
        </div>

        <div class="bg-white w-1/3 m-2 rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Returns</div>
          <div className="flex flex-col">
          <Link href="/Return">Return an order</Link>
          <Link href="/Exchange">Exchange defective item</Link>
          <Link href="/Wrong">Return Wrong Item</Link>
        </div>
        </div>
      </div>

      </div>
        
    </div>
  </div>
  )
}

export default Contact