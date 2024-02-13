import CardNanny from "../CardNanny";

const ListOfFavorites = ({ nannies }) => {
  return (
    <ul>
      {nannies.map((nanny) => (
        <CardNanny key={nanny.id} nanny={nanny} />
      ))}
    </ul>
  );
};

export default ListOfFavorites;
