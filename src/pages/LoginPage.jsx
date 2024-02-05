import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div>
      LoginPage
      <LoginForm />
      <p>
        Or <Link to="/BabySitterHub/register">register</Link>
      </p>
    </div>
  );
}

export default LoginPage;
