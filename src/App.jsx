import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/BabySitterHub/">Home</Link>
        {" | "}
        <Link to="/BabySitterHub/catalog">Catalog</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
