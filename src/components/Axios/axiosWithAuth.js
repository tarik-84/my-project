import axios from "axios";
// import Cookies from 'js-cookie'


export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
      //  const token = Cookies.get('token')
    return axios.create({
      baseURL: " https://build-week-app.herokuapp.com",
      headers: {
        Authorization: token
      },
      withCredentials: true
    });
  };