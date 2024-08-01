import React from 'react'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa6";

const src1 = 'https://www.trulia.com/images/icons/txl3/LocationLincolnIcon.svg';
const src2= 'https://www.trulia.com/images/icons/txl3/TownHouseIcon.svg';

const TextWithImages = () => {
    return (
        <div className='flex flex-wrap  justify-center gap-1 p-4 md:font-bold text-[#052286]  text-[15px] font-thin '>
            <span className='text-lg  h-[30px]'>discover</span>
            <div className='rounded-md overflow-hidden ' style={{ width: '30px', height: '60px', position: 'relative' }}>
                <Image
                    className=''
                    src={src1}
                    alt='image'
                    height={30}
                    width={30}
                />
            </div>
            <span className='text-lg  h-[30px]'>a place</span>
            <div className='rounded-md overflow-hidden' style={{ width: '30px', height: '60px', position: 'relative' }}>
                <Image
                    className='object-cover mb-1'
                    src={src2}
                    height={30}
                    width={30}
                    alt='image'
                />
            </div>
            <span className='text-lg h-[30px]'>you'll love</span>
            <div className='rounded-md overflow-hidden' style={{ width: '25px', height: '60px', position: 'relative' }}>
                <FaHeart className='text-red-700  h-[30px] text-[25px]'/>
            </div>
            <span className='text-lg h-[30px]'>to live</span>
        </div>
    );
}

export default TextWithImages;
