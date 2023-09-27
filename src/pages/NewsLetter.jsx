import axios from "axios";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const res = await request.formData();
  const data = Object.fromEntries(res);
  // console.log(data);
  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    // console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const NewsLetter = () => {
  const res = useNavigation();
  const isSubmitting = res.state === "submitting";
  console.log(isSubmitting);
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>

      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          defaultValue="asad"
        />
      </div>

      {/* last name */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-input"
          defaultValue="ali"
        />
      </div>

      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
      >
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};
export default NewsLetter;
