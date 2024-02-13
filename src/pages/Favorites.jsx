import { useEffect, useState } from "react";
import ListOfFavorites from "../components/ListOfFavorites";
import { ProtectedRoute } from "../components/ProtectedRoute";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, [setFavorites]);

  return (
    <div>
      <ListOfFavorites nannies={favorites} />
    </div>
  );
};
/* export default Favorites; */
