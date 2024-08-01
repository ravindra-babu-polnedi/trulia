'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import Card from './card';

const CarouselImg = () => {
    const images=[
        'https://maps.googleapis.com/maps/api/streetview?size=320x240&location=1134%20Donnelly%20Ave%20SW%2C%20Atlanta%2C%20GA%2C%2030310%20Atlanta%20GA%2030310&key=AIzaSyCzWKDOMLGYlR3C9dltAR7sbLvcQEWNcvc&signature=VQKiT74NsrwPHsWEKyknMs8777A%3D',
        'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/63bb6c6f69fb6b67404ada92ad9b4a35-full.webp',
        'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/fa8d3804d011c5d9215e787cf59b9247-full.webp',
        'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/b55413f9dda41d0352ef6b356444829e-full.webp',
        'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/e2bf84d2898a1392dd4cd98b8b477dd1-full.webp',
        'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/e2bf84d2898a1392dd4cd98b8b477dd1-full.webp',
        'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/069d39539b167c303923040c8ebbb232-full.webp',
        'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/0edc2d03ce674ce352586a154a5648fb-full.webp',
        'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/c46c2f65d02ae9885cb7ff11d9818371-full.webp',
        'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/e3ad212095bbc974d90f4d06ab79524d-full.webp',
        'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/c46c2f65d02ae9885cb7ff11d9818371-full.webp',
        'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/c46c2f65d02ae9885cb7ff11d9818371-full.webp',
        'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/c46c2f65d02ae9885cb7ff11d9818371-full.webp',
        'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/09ed9021a9e43c8169ababb64bc45962-full.webp',
        'https://www.trulia.com/pictures/thumbs_3/zillowstatic/fp/55ea1cd60174e522bc85984bbcdba7f2-full.webp',
    ]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 6 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.2
        }
      };
  return (
    <div className='p-4'>
    <Carousel responsive={responsive}>
        {
            images.map(src=><Card key={src} src={src}/>)
        }

  </Carousel>
  </div>
  )
}

export default CarouselImg