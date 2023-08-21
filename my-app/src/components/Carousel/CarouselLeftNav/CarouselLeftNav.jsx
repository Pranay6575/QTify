import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import styles from "../Carousel.module.css";
import { ReactComponent as LeftSlide } from "../../../assets/LeftSlide.svg"


const CarouselLeftNav = () => {
    const swiper = useSwiper();
    const [isBegining,setIsBegining] = useState(swiper.isBeginning);   

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsBegining(swiper.isBegining);                                                                                              
        })
    },[])
  return (
    <div className={styles.leftNavigation}>
        {!isBegining && <LeftSlide onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNav
