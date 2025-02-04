import axios from 'axios';

const API_KEY = 'YOUR_RAPIDAPI_KEY';
const BASE_URL = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights?originSkyId=LOND&destinationSkyId=NYCA&originEntityId=27544008&destinationEntityId=27537542&date=2024-07-01&cabinClass=economy&adults=1&sortBy=best&currency=USD&market=en-US&countryCode=US';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
  },
});

export const searchFlights = async (from, to, date) => {
  try {
    const response = await apiClient.get('/search', {
      params: { from, to, date },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching flights:', error);
    throw error;
  }
};
