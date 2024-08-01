import React from 'react'
import Image from "next/image";
const Card = ({src}) => {
  return (
    <div className='inline-block md:block'>
    <div className='rounded-md cursor-pointer overflow-hidden inline-block'>
    <Image className='rounded-md hover:scale-110 duration-500 transition-transform object-cover h-[160px] w-[230px]'  src={src} width={224} height={120}  alt='image'/>
    </div>
    <h1 className='text-[#3b4144] text-[20px] font-bold"'>$695,000</h1>   
    <div className='flex'>
        <div className='flex text-[#3b4144]'>
                <Image src='https://www.trulia.com/images/icons/txl3/BedIcon.svg' width={24} height={24}/>
                <p className='font-normal'>4bd</p>
        </div>
        <div className='flex ml-2'>
                <Image src='https://www.trulia.com/images/icons/txl3/BathIcon.svg' width={24} height={24}/>
                <p className='font-normal'>3ba</p>
        </div>
        <div className='flex ml-2'>
                <Image src='https://www.trulia.com/images/icons/txl3/SquareFeetIcon.svg' width={24} height={24}/>
                <p className='font-normal'>1,800 sqft</p>
        </div>

    </div>
    <p className='font-thin  w-[60%] md:font-normal md:w-[90%] text-[#3b4144]'>1134 Donnelly Ave SW, Atlanta, GA 30310</p>
    <p className='font-light text-[12px] text-[#3b4144]'>Real Broker, LLC.</p>
    </div>
  )
}

export default Card