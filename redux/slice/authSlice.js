import { createSlice } from "@reduxjs/toolkit";

//initialState define here
const initialState = {
  user: null,
  token: "",
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthUser: (state, { payload }) => {
      return { ...state, user: payload.userInfo, token: payload.token };
    },
  },
});

//Reducer Action
export const { setAuthUser } = authSlice.actions;

export default authSlice.reducer;
