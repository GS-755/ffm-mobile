import axios from "axios";
import { apiEndPoint } from "../redux/store";
// Api Endpoint

export const login = async (values) => {
  try {
    const { data } = await axios.post(`${apiEndPoint}/auth/login`, values);
    return data;
  } catch (error) {
    return error;
  }
};

export const register = async (values) => {
  try {
    const { data } = await axios.post(`${apiEndPoint}/auth/register`, values);
    return data;
  } catch (error) {
    return error;
  }
};

export const verifyEmail = async (token, values) => {
  try {
    const { data } = await axios.post(`${apiEndPoint}/auth/verify-email`, values, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });
    return data;
  } catch (error) {
    return error;
  }
}

export const logout = async (token, values) => {
  try {
    const { data } = await axios.get(`${apiEndPoint}/auth/logout`,{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });
    return data;
  } catch (error) {
    return error;
  }
}