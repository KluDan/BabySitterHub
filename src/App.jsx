import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/BabySitterHub/">Home</Link>
        {" | "}
        <Link to="/BabySitterHub/catalog">Catalog</Link>
        {" | "}
        <Link to="/BabySitterHub/login">Login</Link>
        {" | "}
        <Link to="/BabySitterHub/register">Register</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
