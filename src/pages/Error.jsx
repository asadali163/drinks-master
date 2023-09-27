import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  const err = useRouteError();
  if (err.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="error" />
          <h3>Ohh!</h3>
          <p>We can't find the page you are looking for</p>
          <Link to={"/"}>Back to home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  );
};
export default Error;
