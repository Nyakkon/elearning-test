import axios from "axios";

export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzIiLCJIZXRIYW5TdHJpbmciOiIxNC8wMi8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzYzMzI4MDAwMDAiLCJuYmYiOjE2NTAzODc2MDAsImV4cCI6MTY3NjQ4MDQwMH0.e3UrKdKqwFislz0cqribEEthuaW4HOuD4xwr1CTRQwg";
export const DOMAIN = "https://elearningnew.cybersoft.edu.vn/";
export const ACCESSTOKEN = "accessToken";
export const USER_LOGIN = "USER_LOGIN";

export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

// const arr = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]

// const display = arr.map(()=>{

// })
let a = localStorage.getItem(ACCESSTOKEN);
let b = "Bearer " + JSON.parse(a);
http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      TokenCybersoft: TOKEN_CYBERSOFT,
      Authorization: `Bearer ${JSON.parse(localStorage.getItem(ACCESSTOKEN))}`,
    };
    return config;
  },
  (errors) => {
    return Promise.reject({ errors });
  }
);
