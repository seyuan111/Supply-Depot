'use client'
import React, {useState} from 'react'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'
import {RxDotFilled} from 'react-icons/rx'

const Sliders = () => {
    
    const slides = [
        {
            url: 'https://penstore.com/bilder/artiklar/liten/109120_r_S.jpg'
        },
        {
            url: "https://m.media-amazon.com/images/I/91+-5vJm7jL.jpg"
        },
        {
            url: "https://www.wane.com/wp-content/uploads/sites/21/2022/08/back-to-school-supplies.jpeg"
        },
        {
            url: "https://prod.globalindustrial.bloomreach.cloud/binaries/content/gallery/gicwebbrx/category-images/office-school-supply/os-superior-supplies.jpg"
        },
        {
            url: "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/238112/238112_o01_020822/238112"
        }
    ]

    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        const goBack = current === 0;
        const back = goBack ? slides.length - 1 : current -1;
        setCurrent(back)
    }

    const nextSlide = () => {
        const forward = current === slides.length -1;
        const goNext = forward ? 0 : current + 1;
        setCurrent(goNext)
    }

    const dotSlides = (supplies) => {
        setCurrent(supplies)
    }

  return (
    <div className="bg-gray-600">

        <div className="max-w-[1200px] h-[700px] w-full m-auto py-16 px-4 relative">
            <div style={{backgroundImage: `url(${slides[current].url})`}} className="w-full h-full bg-cover bg-center duration-500"></div>

            <div onClick={prevSlide} className="cursor-pointer absolute transition-x-0 transition-y-[50%] top-[50%] left-10">
                <AiOutlineDoubleLeft size={25} />
            </div>

            <div onClick={nextSlide} className="cursor-pointer absolute transition-x-0 transition-y-[50%] top-[50%] right-10">
                <AiOutlineDoubleRight size={25} />
            </div>

            <div className="flex justify-center my-3 text-white">
                {slides.map((slide, index) => (
                    <div>
                        <RxDotFilled key={index} onClick={() => dotSlides(index)} className="cursor-pointer text-2xl" />
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Sliders