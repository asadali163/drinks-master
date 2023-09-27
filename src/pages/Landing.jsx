import axios from "axios";
import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
import { QueryClient, useQuery } from "@tanstack/react-query";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader =
  (QueryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    // console.log(url.search);
    const searchTerm = url.searchParams.get("search") || "vodka";
    await QueryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    // console.log(searchTerm);
    // const searchTerm = "margarita";

    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks, isLoading } = useQuery(
    searchCocktailsQuery(searchTerm)
  );
  if (isLoading) return <h4>Loading...</h4>;
  return (
    <div>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </div>
  );
};
export default Landing;
