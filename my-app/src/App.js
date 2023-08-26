import styles from "./App.module.css";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./backend/api";
import React, { useState, useEffect } from "react";
import Section from "./components/Section/Section";
import AccordionSection from "./components/Accordion/Accordion";


function App() {
  const [data, setData] = useState([]);
  const [filterDataValues, setFilterDataValues] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleToggle = ()=>{
    setToggle(!toggle);
  } 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const generateSongsData = (value) =>{
    let key;
    if(value === 0){
      filterData(SongNewData);
      return;
    }
    else if(value === 1){
      key='rock';
    } else if(value === 2){
      key='pop'
    } else if(value === 3){
      key='jazz'
    } else if(value === 4){
      key='blues'
    }
    const res = SongNewData.filter((item)=> item.genre.key === key);
    filterData(res);
  }

  useEffect(() =>{
    generateSongsData(value);
  },[value]);
  
  const [topAlbumData, setTopAlbumData] = useState({});
  const genrateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const [newAlbumData, setNewAlbumData] = useState({});
  const generateNewAlbumData = async () => {
    try{
      const data = await fetchNewAlbums();
      setNewAlbumData(data);
    }catch(err){
      console.log(err);
    }
  };
  
  const [SongNewData, setSongNewData] = useState([]);
  const generateAllSongsData = async () => {
    try{
      const data = await fetchSongs();
      setSongNewData(data);
    }catch(err){
      console.log(err);
    }
  };

  const filterData = (val) =>{
    setFilterDataValues(val);
  }
  
  useEffect(() => {
    genrateTopAlbumData();
    generateNewAlbumData();
    generateAllSongsData();
  },[]);

  return (
    <>
      <NavBar />
      <HeroSection />
      <div className={styles.SectionWrapper}>
        <Section type="album" title="Top Albums" data={topAlbumData} filterDataValues={data} />
        <Section type="album" title="New Albums" data={newAlbumData} filterDataValues={data} />
        <Section type="song" title="Songs" data={SongNewData} filterData={filterData} filterDataValues={filterDataValues} value={value} handleToggle={handleToggle} handleChange={handleChange} />
         
      </div>
    </>
  );
}

export default App;
