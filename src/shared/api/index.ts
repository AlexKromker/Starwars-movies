import axios from "axios";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const responseInterceptor = (response: any) => response;

const responseErrorInterceptor = async (error: any) => {
  console.error(error);
};

baseApi.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
); // Prevents response errors from breaking the site

export default baseApi;
