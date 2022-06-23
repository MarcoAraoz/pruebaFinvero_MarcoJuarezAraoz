import { configureStore } from "@reduxjs/toolkit";
import webinars from "./slices/webinars";

export default configureStore({
  reducer: {
    webinars,
  },
});
