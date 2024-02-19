import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { get, getDatabase, ref, remove, set } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();

export const getUserFavorites = async (userId) => {
  const favoritesRef = ref(db, `users/${userId}/favorites`);
  const snapshot = await get(favoritesRef);
  if (snapshot.exists()) {
    const favoritesData = snapshot.val();
    const favoritesArray = Object.keys(favoritesData).map(
      (key) => favoritesData[key]
    );
    return favoritesArray;
  } else {
    return [];
  }
};

export const saveUserFavorites = (userId, favorites) => {
  set(ref(db, "users/" + userId), {
    favorites: favorites,
  });
};

export const removeFavoriteById = async (userId, favoriteId) => {
  const favoritesRef = ref(db, `users/${userId}/favorites`);
  const snapshot = await get(favoritesRef);
  if (snapshot.exists()) {
    const favoritesData = snapshot.val();
    const favoritesArray = Object.keys(favoritesData).map((key) => ({
      id: key,
      ...favoritesData[key],
    }));

    const indexToRemove = favoritesArray.findIndex(
      (favorite) => favorite.id === favoriteId
    );

    if (indexToRemove !== -1) {
      favoritesArray.splice(indexToRemove, 1);
      set(ref(db, `users/${userId}/favorites`), favoritesArray);
    } else {
      console.error(
        "Object with provided favoriteId not found in favorites array"
      );
    }
  } else {
    console.error("No favorites found for the provided userId");
  }
};
