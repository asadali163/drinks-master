import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const res = useNavigation();
  const isSubmitting = res.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          placeholder="margarita"
          defaultValue={searchTerm}
        />
        <button className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Searching..." : "Search"}
        </button>
      </Form>
    </Wrapper>
  );
};
export default SearchForm;
