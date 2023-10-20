'use client'
import React, {useState} from 'react'
import Link from 'next/link'

const MoreCards = () => {
  return (
    <div className="bg-gray-600 max-w-full mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
    <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
    <div class="p-6">
      <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        UI/UX Review Check
      </h5>
      <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        The place is close to Barceloneta Beach and bus stop just 2 min by walk
        and near to "Naviglio" where you can enjoy the main night life in
        Barcelona.
      </p>
    </div>
    <div class="p-6 pt-0">
      <button
        class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
      >
        Read More
      </button>
    </div>
  </div>

  <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div class="p-6">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to "Naviglio" where you can enjoy the main night life in
      Barcelona.
    </p>
  </div>
  <div class="p-6 pt-0">
    <button
      class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Read More
    </button>
  </div>
</div>
    </div>
  )
}

export default MoreCards