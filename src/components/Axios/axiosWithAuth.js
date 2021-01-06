import axios from "axios";
// import Cookies from 'js-cookie'


export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
      //  const token = Cookies.get('token')
    return axios.create({
      baseURL: "http://localhost:5000",
      headers: {
        Authorization: token
      },
      withCredentials: true
    });
  };