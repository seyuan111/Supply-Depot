import React from 'react'
import NavBar from '../components/NavBar'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'

const Shop = () => {
  return (
    <div>
        <NavBar />
        <div className="w-full h-screen top-[90px]">

            <div className="w-full h-[40%] text-center flex flex-col items-center justify-center px-4 text-white">
                <h1 className="text-[25px] mt-4 text-black">Order your Supplies here:</h1>
            </div>

            <div className="max-w-full mx-auto p-4 py-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/40 text-white text-center">
                    <p className="font-bold text-2xl px-2 pt-6">g2 pen</p>
                    <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-20">Place Order</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://target.scene7.com/is/image/Target/GUEST_cc790848-9ca2-4dfd-be72-d61c6a0d3255?wid=488&hei=488&fmt=pjpeg" alt="/"></img>
            </div>
        
            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/40 text-white text-center">
                    <p className="font-bold text-2xl px-2 pt-6">number 2 pencils</p>
                    <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-20">Place Order</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://weareticonderoga.com/wp-content/uploads/2019/06/13308_Ticonderoga_12ct_3Q_2000x2000_03-18.png" alt="/"></img>
            </div>
        
            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/40 text-white text-center">
                    <p className="font-bold text-2xl px-2 pt-6">Rate us</p>
                    <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-20">Place Order</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://bostitchoffice.com/media/catalog/product/cache/8d622783d0b606912c99e4ab1818c82c/b/2/b210-blk_13_main_staples_300dpi_1.jpg" alt="/"></img>
            </div>

            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/40 text-white text-center">
                    <p className="font-bold text-2xl px-2 pt-6">number 2 pencils</p>
                    <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-20">Place Order</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://weareticonderoga.com/wp-content/uploads/2019/06/13308_Ticonderoga_12ct_3Q_2000x2000_03-18.png" alt="/"></img>
            </div>

            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/40 text-white text-center">
                    <p className="font-bold text-2xl px-2 pt-6">number 2 pencils</p>
                    <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-20">Place Order</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://weareticonderoga.com/wp-content/uploads/2019/06/13308_Ticonderoga_12ct_3Q_2000x2000_03-18.png" alt="/"></img>
            </div>

            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/40 text-white text-center">
                    <p className="font-bold text-2xl px-2 pt-6">number 2 pencils</p>
                    <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-20">Place Order</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://weareticonderoga.com/wp-content/uploads/2019/06/13308_Ticonderoga_12ct_3Q_2000x2000_03-18.png" alt="/"></img>
            </div>

            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/40 text-white text-center">
                    <p className="font-bold text-2xl px-2 pt-6">number 2 pencils</p>
                    <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-20">Place Order</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://weareticonderoga.com/wp-content/uploads/2019/06/13308_Ticonderoga_12ct_3Q_2000x2000_03-18.png" alt="/"></img>
            </div>

            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/40 text-white text-center">
                    <p className="font-bold text-2xl px-2 pt-6">number 2 pencils</p>
                    <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-20">Place Order</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://weareticonderoga.com/wp-content/uploads/2019/06/13308_Ticonderoga_12ct_3Q_2000x2000_03-18.png" alt="/"></img>
            </div>

            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/40 text-white text-center">
                    <p className="font-bold text-2xl px-2 pt-6">number 2 pencils</p>
                    <button className="border hover:bg-white hover:text-black duration-300 text-white bg-black mx-2 bottom-4 rounded px-4 py-2 mt-20">Place Order</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded" src="https://weareticonderoga.com/wp-content/uploads/2019/06/13308_Ticonderoga_12ct_3Q_2000x2000_03-18.png" alt="/"></img>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Shop