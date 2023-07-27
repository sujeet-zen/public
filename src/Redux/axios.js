import axios from "axios";

// axios.defaults.withCredentials = true;
// export const API_URL = process.env.API_URL;
// export const API_URL = 'http://52.53.223.108:8080/api/';
// export const API_URL = 'http://54.176.179.113:8080/api/';
// export const API_URL = 'https://54.219.35.12:8080/api/';

// export const API_URL = "http://13.233.36.191:5000/api";
export const API_URL = "http://ec2-35-154-71-27.ap-south-1.compute.amazonaws.com/api";

// axios.defaults.withCredentials = true;
const API = axios.create({
  baseURL: API_URL,
  // withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

API.interceptors.request.use(async (req) => {
  // const session = await getSession();
  // req.headers["Authorization"] = `Bearer ${session?.user?.accessToken}`;

  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;
