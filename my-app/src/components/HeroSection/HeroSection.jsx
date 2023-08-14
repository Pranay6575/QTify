import React from "react";
import styles from "./HeroSection.module.css";
import HeroLogo from "../../assets/Hero-logo.png";

const HeroSection = () => {
  return (
    <section className={styles.wraps}>  
        <div className={styles.textContainer}>
          <p className={styles.heading}>100 Thousand Songs, ad-free</p>
          <p className={styles.heading}>Over thousands podcast episodes</p>
        </div>

        <div className={styles.imgContainer}>
          <img className={styles.imgSize} src={HeroLogo} alt="hero=logo" />
        </div>
    </section>
  );
};

export default HeroSection;
