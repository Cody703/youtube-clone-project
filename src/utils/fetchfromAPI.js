import axios  from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RADIO_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'//'yt-api.p.rapidapi.com'//'youtube-v2.p.rapidapi.com'
  }
};



export const fetchfromAPI = async (url) => {
  // try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  // } catch (error) {
  //   // Handle errors, log them, or throw a custom error.
  //   console.error('Error fetching data from API:', error);
  //   throw error; // You can choose to throw the error or handle it according to your needs.
  // }
};

