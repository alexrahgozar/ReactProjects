import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a53bb7ded3510182434f82eb7facc228bb89c6852c9621ddf16859aab22a643a"
  }
});
