import styles from "./App.module.css"
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import fetchTopAlbums from "./backend/api"
import fetchNewAlbums from "./backend/newAlbumApi";
import { useState, useEffect } from "react";
import Section from "./components/Section/Section";
import NewSection from "./components/NewSection/NewSection";



function App() {
const[topAlbumData, setTopAlbumData] = useState({});
  const genrateTopAlbumData = async () =>{
    const data = await fetchTopAlbums();
    setTopAlbumData(data);
  }


  useEffect(() => {
    genrateTopAlbumData();
  },[])

const[newAlbumData, setNewAlbumData] = useState({});
const generateNewAlbumData = async () =>{
  const data = await fetchNewAlbums();
  setNewAlbumData(data);
}

useEffect(() => {
  generateNewAlbumData();
},[])
  

  return (
    <>
    <NavBar />
    <HeroSection />
    <div className={styles.SectionWrapper}>
    <Section type="album" title="Top Albums" data={topAlbumData} />
    <NewSection type="newalbum" title="New Albums" data={newAlbumData} />
    </div>
    </>
  );
}

export default App;
