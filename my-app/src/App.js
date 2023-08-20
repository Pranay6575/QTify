import Card from "./components/Card/Card";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import fetchTopAlbums from "./backend/api"
import { useState, useEffect } from "react";
import Section from "./components/Section/Section";



function App() {
const[topAlbumData, setTopAlbumData] = useState({});
  const genrateTopAlbumData = async () =>{
    const data = await fetchTopAlbums();
    setTopAlbumData(data);
  }


  useEffect(() => {
    genrateTopAlbumData();
  },[])

  return (
    <>
    <NavBar />
    <HeroSection />
    <Section type="album" title="Top Albums" data={topAlbumData} />
    </>
  );
}

export default App;
