import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import styles from "../Carousel.module.css";
import { ReactComponent as RightSlide } from "../../../assets/RightSlide.svg"


const CarouselRightNav = () => {

    const swiper = useSwiper();
    const [isEnding,setIsEnding] = useState(swiper.isEnding);   

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsEnding(swiper.isEnding);                                                                                              
        })
    },[])

  return (
    <div className={styles.rightNavigation}>
        {!isEnding && <RightSlide onClick={() => swiper.slideNext()}/>} 
    </div>
  )
}

export default CarouselRightNav