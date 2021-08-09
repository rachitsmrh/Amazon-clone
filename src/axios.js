import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-8c3b4/us-central1/api",
});

export default instance;
