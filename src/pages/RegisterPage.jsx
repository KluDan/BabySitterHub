import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";

function RegisterPage() {
  return (
    <div>
      RegisterPage
      <SignUpForm />
      <p>
        Already have an account? <Link to="/BabySitterHub/login">Sign In</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
