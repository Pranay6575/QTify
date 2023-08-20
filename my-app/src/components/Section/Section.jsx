import { CircularProgress } from "@mui/material";
import Card from "../Card/Card"
import React, { useState } from "react";
import styles from "./Section.module.css";

const Section = ({ title, data, type }) => {
    const [toggleSwitch, setToggleSwitch] = useState(true);

    const handleToggle = () =>{
        setToggleSwitch(!toggleSwitch);
    }

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className="" onClick={handleToggle}>{toggleSwitch?"Show all":"Collapse all"}</h4>
      </div>
      {
        !data.length ?(
           <CircularProgress color="inherit" />
        ):(<div className={styles.cardWrapper}>
            {data?.map((song)=> (
                <Card data={song} type={type} key={song.id} />        
            ))}
        </div>)
      }
    </div>
  );
};

export default Section;
