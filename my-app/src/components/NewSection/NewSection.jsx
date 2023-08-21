import { CircularProgress } from "@mui/material";
import NewCard from "../NewCard/NewCard";
import React, { useState } from "react";
import styles from "./NewSection.module.css";
import Carousel from "../Carousel/Carousel";

const NewSection = ({ title, data, type }) => {
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
      {
        !data.length ?(
           <CircularProgress color="inherit" />
        ):(<div className={styles.cardWrapper}>
            {!toggleSwitch? ( 
                <div className={styles.wrapper}>
            {data.map((song)=> (
                <NewCard data={song} type={type} key={song.id} />        
            ))}
            </div>
            )
            :(
                <Carousel data={data} renderCardComponenet={(item) => <NewCard data={item} type={type} />}/>
)}
        </div>)
      }
    </div>
  );
};

export default NewSection;
