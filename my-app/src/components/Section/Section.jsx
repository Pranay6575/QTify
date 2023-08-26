import { CircularProgress } from "@mui/material";
import Card from "../Card/Card"
import React, { useState } from "react";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../FilterTabs/FilterTabs";


const Section = ({ title, data, type,filterData=null, filterDataValues=[], toggle=false,  handleChange=null, value=null }) => {
    const [toggleSwitch, setToggleSwitch] = useState(true);

    const handleToggle = () =>{
        setToggleSwitch(!toggleSwitch);
    }

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>{toggleSwitch?"Show all":"Collapse"}</h4>
      </div>
      {type ==="song"?<BasicTabs value={value} handleChange={handleChange}/>:null}
      {
        !data.length ?(
           <CircularProgress color="inherit" />
        ):(<div className={styles.cardWrapper}>
            {!toggleSwitch? ( 
                <div className={styles.wrapper}>
            {data.map((song)=> (
                <Card data={song} type={type} key={song.id} />        
            ))}
            </div>
            )
            :(
                <Carousel data={data} renderCardComponenet={(data) => <Card data={data} type={type} />}/>
)}
        </div>)
      }
    </div>
  );
};

export default Section;
