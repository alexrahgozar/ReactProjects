import axios from "axios";
const KEY = "AIzaSyCYJCTHx7kIe2vwrNjdak_XZBxHb4xd5U4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 7,
    key: KEY
  }
});
