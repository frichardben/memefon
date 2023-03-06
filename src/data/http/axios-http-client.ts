import axios from 'axios';

export const BASE_URL = 'https://memefon-stg.herokuapp.com/api/v1';

export const apiClient = axios.create({
  baseURL: BASE_URL,
});
