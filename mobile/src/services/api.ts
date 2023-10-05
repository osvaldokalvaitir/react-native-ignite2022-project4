import axios from "axios";

export const api = axios.create({
  baseURL: 'http://172.23.176.1:3333'
});