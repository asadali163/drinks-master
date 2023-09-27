import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  //   console.log(drinks);
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }
  return (
    <Wrapper>
      {drinks.map((drink) => {
        return <CocktailCard key={drink.idDrink} drink={drink} />;
      })}
    </Wrapper>
  );
};
export default CocktailList;
