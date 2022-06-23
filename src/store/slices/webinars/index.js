import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const webSlice = createSlice({
  name: "webinars",
  initialState: {
    list: [],
  },
  reducers: {
    setWebinarList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setWebinarList } = webSlice.actions;
export default webSlice.reducer;

export const fetchAllWebinars = () => (dispatch) => {
  axios
    .get("https://openfinance2020-292200.firebaseio.com/events.json")
    .then((res) => {
      dispatch(setWebinarList(res.data));
    })
    .catch((error) => console.log(error));
};
