import axios from "axios";
import credentials from "../../credentials";

export default axios.create({
  baseURL: "https://googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: credentials.API_KEY
  }
});
