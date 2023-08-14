import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardImage from "../../assets/SongImage.png";
import styles from "./Card.module.css";
import styled from "@emotion/styled";

const SongCard = () => {
  return (
    <>
      <Card className={styles.wrap} sx={{ width: 159, height: 205 }}>
        <img className={styles.imgsize} src={CardImage} alt="CardImage" />
        <div className={styles.stick}>
        <p className= {styles.ptext}style={{color: 'white'}}>100 Follows</p>
        </div>
      </Card>
      <div className={styles.cardBottom}>New English Songs</div>
    </>
  );
};

export default SongCard;
