import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  console.log("hello");
  const err = useRouteError();
  console.log(err);
  return <div>{err.message}</div>;
};
export default SinglePageError;
