import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
export default instance;

