import axios from "axios";

const url = "http://localhost:3000" || "https://skygoal-2vfn.onrender.com";

export const signup = async (data) => {
    try {
        const response = await axios.post(`${url}/signup`, data);
        return response;
    } catch (error) {
        console.log(error)
    }
}


export const LoginUser = async (data) => {
  try {
    const response = await axios.post(`${url}/login`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};


export const verifyToken = async (token) => {
  try {
    const response = await axios.get(`${url}/verify`, {
      headers: {
        authorization: "Bearer" + token,
        Accept: "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

