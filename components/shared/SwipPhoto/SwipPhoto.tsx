'use client'
import building from '@images/about1.svg';
import building2 from '@images/hero-bg.svg';
import Image from "next/image";
import { useState } from 'react';
const images = [building, building2]
export default function SwipPhoto() {
    const [currentImage, setCurrentImage] = useState(0)
    return (
        <div className='relative z-10'>
            <span className='absolute border-3 border-text -top-3 -left-2 size-60 -z-10 hidden md:block '>
            </span>
            <div className='relative w-full lg:h-120 overflow-hidden'>
                <Image src={images[currentImage]} alt="Building 1" className='rounded-xl w-full bg-cover' onClick={() => setCurrentImage(0)} />
                <Image src={images[currentImage === 0 ? 1 : 0]} alt="Building 2" onClick={() => setCurrentImage(currentImage === 0 ? 1 : 0)} className={`absolute bottom-0 right-0 border-t-4 border-e-4 rounded-xs w-20 bg-cover lg:w-30 `} />
            </div>
        </div>
    )
}
