import * as React from "react";
import Card from "@mui/material/Card";
import styles from "./Card.module.css";
import { CardActionArea, CardMedia } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

const SongCard = ({type, data}) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        return (
            <Tooltip title={`${songs.length} songs`} placement="top" arrow>
          <div className={styles.songCard}>
              <Card className={styles.cardContent} sx={{ width: 159, height: 205 }}>
                <CardActionArea>
              <CardMedia
              component='img'
              image={image}
              height='170'
              alt="songimg"
               />
              <div className={styles.cardPill}><p className={styles.pillText}>{follows} Follows</p></div>
                </CardActionArea>
              </Card>
              <p>{title}</p>
          </div>
          </Tooltip>
        );
      }
      case "song":{
        const{image, likes, title} = data;
        return(
          <div className={styles.songCard}>
            <Card className={styles.cardContent} sx={{ width: 159, height: 205 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  image={image}
                  height='170'
                  alt='songimg'
                />
                <div className={styles.cardPill}><p className={styles.pillText}>{likes} Likes</p></div>
              </CardActionArea>
            </Card>
              <p>{title}</p>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default SongCard;
