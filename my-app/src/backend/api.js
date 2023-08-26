import axios from "axios";

export const config = "https://qtify-backend-labs.crio.do";

 export const fetchTopAlbums = async() => {
  try {
    const res = await axios.get(`${config}/albums/top`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

 export const fetchNewAlbums = async() => {
  try {
    const res = await axios.get(`${config}/albums/new`);
    return res.data;
  } catch(error) {
    console.log(error);
  }
};

export const fetchSongs = async () => {
  try{
    const res = await axios.get(`${config}/songs`);
    return res.data;
  }catch(error){
    console.log(error);
  }
};




