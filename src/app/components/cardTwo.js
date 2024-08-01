import React from 'react'
import Image from 'next/image'

const CardTwo = ({data}) => {
  return (
    <div className='flex flex-col items-center text-[#3b4144] w-[300px]  m-2'>
        <Image src={data.img} height={140} width={140} alt='img'/>
        <h1 className='text-[24px] font-[700]'>{data.heading}</h1>
        <p className='w-[80%] text-[15px] font-thin text-center my-2 '>{data.text}</p>
        <button className='bg-[#007882] text-white p-2 px-9 rounded-md border-[1px] border-[#007882] hover:bg-white hover:text-[#007882]'>{data.buttonText}</button>
    </div>
  )
}

export default CardTwo