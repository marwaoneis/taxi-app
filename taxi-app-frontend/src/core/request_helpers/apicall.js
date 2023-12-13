import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export const request = async ({ route, method, body,isLogin=false }) => {
  try{
     const response = await axios.request({
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Authorization': isLogin?'':JSON.parse(localStorage.getItem("logged_in")).token
    // },
    url: route,
    method: method,
    data: body,
  });

  return response.data;
  } catch (error) {
    console.error('API Request Error:', error.message);
    throw error; 
  }
 
};