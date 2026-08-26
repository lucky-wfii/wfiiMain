import { LazyImage } from '@/components/global/lazy-image'
import React from 'react'

const HeroImage = () => {
  return (
    <div className='w-full h-auto pt-16'>
        <LazyImage
        src={"/hero-image.png"}
        alt='hero-image'
        width={1920}
        height={1080}
        priority={true}
        className="w-full h-auto"
        imageClassName="object-contain h-auto"
        />
    </div>
  )
}

export default HeroImage
