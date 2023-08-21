import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import styles from "./Carousel.module.css"
import React, { useEffect } from 'react';
import CarouselLeftNav from './CarouselLeftNav/CarouselLeftNav';
import CarouselRightNav from './CarouselRightNav/CarouselRightNav';

// Controlling the Carousel slides
const Controls = ({data}) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0)
    },[data])   

    return <></>;
}


const Carousel = ({data,renderCardComponenet}) => {
  return (
    <div className={styles.wrapper}>
          <Swiper initialSlide={0} modules={{Navigation}} slidesPerView={"auto"} spaceBetween={40} allowTouchMove={true}>
          <Controls data={data} />
          <CarouselLeftNav />
          <CarouselRightNav />
          {data.map((item)=>(
                <SwiperSlide>{renderCardComponenet(item)}</SwiperSlide> 
          ))}
        </Swiper>
    </div>
  )
}

export default Carousel
