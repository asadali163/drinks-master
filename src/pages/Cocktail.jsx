import { Link, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
import axios from "axios";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const res = await axios.get(`${singleCocktailUrl}${id}`);

  return { data: res.data, id };
};
const Cocktail = () => {
  const { data, id } = useLoaderData();
  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;
  const allIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
      // return singleDrink[key];
    )
    .map((key) => singleDrink[key]);
  // console.log(allIngredient);
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img"></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>

          <p>
            <span className="drink-data">ingredients :</span>{" "}
            {allIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item} {index < allIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>

          <p>
            <span className="drink-data">ingredients :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cocktail;
