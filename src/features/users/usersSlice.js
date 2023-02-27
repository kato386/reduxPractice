import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Ahmet" },
  { id: "1", name: "Mehmet" },
  { id: "2", name: "Osman" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
