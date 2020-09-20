import axios from "axios";

const myUrl = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default myUrl;
