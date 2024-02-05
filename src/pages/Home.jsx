import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { removeUser } from "../store/slices/userSlice";

function Home() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { isAuth, email } = useAuth();

  return (
    <div>
      <h1>Welcome</h1>
      <button
        onClick={() => {
          console.log("Logout");
          dispatch(removeUser());
        }}
      >
        Log out from {email}
      </button>
    </div>
  );
}

export default Home;
