import axios from "axios";

export const config = "https://qtify-backend-labs.crio.do";

const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${config}/albums/top`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchTopAlbums;
