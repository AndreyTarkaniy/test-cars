import axios from 'axios';

axios.defaults.baseURL = 'https://64957088b08e17c917921d03.mockapi.io';

export const limit = 8;
export const page = 1;

export const getDataCars = async page => {
  const data = await axios.get(`/cars?page=${page}&limit=${limit}`);
  // console.log(data.data);

  return data.data;
};
