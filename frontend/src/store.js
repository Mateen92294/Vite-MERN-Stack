import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import ticketReducer from "./ticket/ticketSlice";
import noteReducer from "./notes/noteSlice";

export const store = configureStore({
  reducer: { auth: authReducer, tickets: ticketReducer, notes: noteReducer },
});
