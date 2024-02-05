import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { removeUser } from "../store/slices/userSlice";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, email } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      navigate("/BabySitterHub/login");
    }
  }, [isAuth, navigate]);

  if (isAuth) {
    return (
      <div>
        <h1>Welcome</h1>
        <button onClick={() => dispatch(removeUser())}>
          Log out from {email}
        </button>
      </div>
    );
  }

  return null;
}

export default Home;
