
'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselCard } from './carouselCard';

const data=[{
    src1:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ga/atlanta/downtown/1935-ga_atl_downtown_82792_048_500x_cfit.jpg',
    src2:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/tx/austin/rosedale/311-tx_aus_rosedale_275246_0131_500x_cfit.jpg',
    src3:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/az/scottsdale/north-scottsdale/2746-az_pdx_north_scottsdale_0087_500x_cfit.jpg',
    src4:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ma/boston/hyde-park/1269-ma_bos_hyde_park_154775_23_500x_cfit.jpg',
    textObj:{
        username:'Trulia User',
        address:'San Francisco Resident',
        content:`I just moved to the neighborhood 2 years ago and love it! It's a great mix of families, seniors and...`,
        color:'bg-[#6b7780]'
    },
},{
    src1:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ga/sandy-springs/north-springs/1881-ga_atl_north_springs_236927_149_500x_cfit.jpg',
    src2:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ca/carlsbad/rancho-la-costa/2501-ca_sd_rancho_la_costa_229306_162_500x_cfit.jpg',
    src3:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ma/newton/chestnut-hill/1333-ma_bos_chestnut_hill_37857_189_500x_cfit.jpg',
    src4:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/pa/philadelphia/logan-square/1728-pa_phil_logan_square_753807_065_500x_cfit.jpg',
    textObj:{
        username:'Brianne',
        address:'Chicago  Resident',
        content:`A good mix of young adults/good night life as well as families and family friendly activities...`,
        color:'bg-[#144225]'
    }
},{
    src1:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ca/oakland/longfellow/570-ca_sf_longfellow_268264_0059_500x_cfit.jpg',
    src2:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ma/quincy/north-quincy/1319-ma_bos_north_quincy_46807_58_500x_cfit.jpg',
    src3:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/az/scottsdale/north-scottsdale/2746-az_pdx_north_scottsdale_0087_500x_cfit.jpg',
    src4:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ma/boston/hyde-park/1269-ma_bos_hyde_park_154775_23_500x_cfit.jpg',
    textObj:{
        username:'Trulia User',
        address:'Chandler Resident',
        content:`We live living in the Oakwood community of Sun Lakes. There are so many activities...`,
        color:'bg-[#052286]'
    },
},
{
    src1:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ga/sandy-springs/north-springs/1881-ga_atl_north_springs_236927_149_500x_cfit.jpg',
    src2:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ca/carlsbad/rancho-la-costa/2501-ca_sd_rancho_la_costa_229306_162_500x_cfit.jpg',
    src3:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ma/newton/chestnut-hill/1333-ma_bos_chestnut_hill_37857_189_500x_cfit.jpg',
    src4:'https://media-cdn.trulia-local.com/neighborhood-media-service-prod/pa/philadelphia/logan-square/1728-pa_phil_logan_square_753807_065_500x_cfit.jpg',
    textObj:{
        username:'Trulia User',
        address:'San Diego Resident',
        content:`Farmers markets, street fairs, and brewery tours are great to experience in this area.`,
        color:'bg-[#00565d]'
    }
}]

const CarouselPrimary = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1.7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 0.4
        }
    };

    return (
        <div className='p-4'>
            <Carousel responsive={responsive} >
                {
                    data.map((card,idx)=><CarouselCard key={idx} data={card} idx={idx}/>)
                }
            </Carousel>
        </div>
    );
}

export default CarouselPrimary;

