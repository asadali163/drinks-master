import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
  SinglePageError,
} from "./pages";
import { loader as loaderFn } from "./pages/Landing";
import { loader as loaderFnForCocktail } from "./pages/Cocktail";
import { action as newsAction } from "./pages/NewsLetter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: loaderFn(queryClient),
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: "cocktail/:id",
        loader: loaderFnForCocktail,
        errorElement: <SinglePageError />,
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        action: newsAction,
        element: <NewsLetter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
