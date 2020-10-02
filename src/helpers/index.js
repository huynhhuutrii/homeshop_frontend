import axios from "axios";
const api = "http://localhost:4000/api"
const instance = axios.create({
  baseURL: api,
  // headers: {
  //   "Authorization": "",
  // }
})
export default instance;