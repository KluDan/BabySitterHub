import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: {
      favorites: [],
    },
  },
  reducers: {
    setUser(users, action) {
      users.currentUser = { ...action.payload };
    },
    setFavorites(users, action) {
      return {
        ...users,
        currentUser: {
          ...users.currentUser,
          favorites: action.payload,
        },
      };
    },
  },
});

export const { setUser, setFavorites } = usersSlice.actions;

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
