import React, { useEffect, useState } from 'react'
import SongCard from '../Card/Card'
import fetchTopAlbums from '../../backend/api';
import styles from "./SongCard.module.css";


const AlbumCard = () => {

const [topAlbumData, setTopAlbumData] = useState([]);
const [newAlbumData, setNewAlbumData] = useState([]);

const performApi = async() => {
    try{
       const data = await fetchTopAlbums();
       setTopAlbumData(data)
    //    console.log(data)
    }
    catch{
        console.error("Invalid Api")
    }
}
useEffect(() =>{
    performApi();
}, [])

  return (
    <div className={styles.mainSection}>
     <div className={styles.album}>
        <h3>Top Albums</h3>
      <div className={styles.topAlbum}>
        {topAlbumData.map(song => <SongCard key={song.id} song={song}/>)}
        </div>
      </div>
    </div>
  )
}

export default AlbumCard
