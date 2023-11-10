import { configureStore } from "@reduxjs/toolkit";
import auth, { setAuthUser } from "./slice/authSlice";
import cart from "./slice/cartSlice";
import { Provider } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

//Create Our Store

export const apiEndPoint = `https://food-app-server-js.herokuapp.com/api/v1`;

const store = configureStore({
  reducer: {
    auth,
    cart,
  },
  devTools: process.env.NODE_ENV !== "production",
});
//State Provider To Provide store state in our application
const StoreProvider = ({ children }) => {
  //checking if user logged in or not
  useEffect(() => {
    const myFunc = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        if (userData) store.dispatch(setAuthUser(JSON.parse(userData)));
      } catch (error) {
        console.log(error);
      }
    };
    myFunc();
  }, []);
  //when any error coming with axios it's showing to console to fix bug
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      const res = error.response;
      //Checking token is expire or not if token expire return automatic logout and return login page
      if (res?.data.message.includes("invalid token")) {
        return new Promise((response, reject) => {
          axios
            .get(`${apiEndPoint}/auth/logout`)
            .then(({ data }) => {
              store.dispatch(login(data));
              AsyncStorage.removeItem("user");
              window.location.href = "/login";
            })
            .catch((err) => {
              console.log(err);
              reject(error);
            });
        });
      }
      return Promise.reject(error);
    }
  );

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
