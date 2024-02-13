import { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  ref,
  onValue,
  query,
  startAfter,
  limitToFirst,
  orderByKey,
} from "firebase/database";
import CardNanny from "../CardNanny";
import { StyledList } from "./ListOfNannyCards.styled";

const NannyList = () => {
  const [nannies, setNannies] = useState([]);
  const [lastVisibleIndex, setLastVisibleIndex] = useState(null);
  const [allNanniesLoaded, setAllNanniesLoaded] = useState(false);
  const [selectedNanny, setSelectedNanny] = useState(null);

  useEffect(() => {
    const dataRef = ref(db, "/nannies");

    const initialQuery = query(dataRef, orderByKey(), limitToFirst(3));

    const unsubscribe = onValue(initialQuery, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const nanniesArray = Object.values(data);
        setNannies(nanniesArray);
        console.log("nannies", nannies);
        const lastIndex = parseInt(
          Object.keys(data)[Object.keys(data).length - 1]
        );
        setLastVisibleIndex(lastIndex);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const loadMoreData = () => {
    if (!lastVisibleIndex) return;

    const dataRef = ref(db, "/nannies");

    const nextDataRef = query(
      dataRef,
      orderByKey(),
      startAfter(lastVisibleIndex.toString()),
      limitToFirst(3)
    );

    const unsubscribe = onValue(nextDataRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Received more data:", data);
      if (data !== null) {
        const nanniesArray = Object.values(data);
        setNannies((prevNannies) => [...prevNannies, ...nanniesArray]);
        console.log("Twonannies", nannies);
        const lastIndex = parseInt(
          Object.keys(data)[Object.keys(data).length - 1]
        );
        setLastVisibleIndex(lastIndex);
        if (Object.keys(data).length < 3) {
          setAllNanniesLoaded(true);
        }
      }
    });

    return unsubscribe;
  };

  return (
    <div>
      <StyledList>
        {nannies.map((nanny) => (
          <CardNanny key={nanny.id} nanny={nanny} />
        ))}
      </StyledList>
      {!allNanniesLoaded && <button onClick={loadMoreData}>Load More</button>}
    </div>
  );
};

export default NannyList;
