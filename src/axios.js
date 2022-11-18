import axios from "axios";

const instance = axios.create({
  // baseURL: 'https://7acc-182-156-218-98.in.ngrok.io',
  baseURL: 'http://localhost:8080',
});

export default instance;