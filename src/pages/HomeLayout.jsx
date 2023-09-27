import { Link, Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const nav = useNavigation();
  // console.log(nav);
  const isLoading = nav.state === "loading";
  return (
    <div>
      <Navbar />
      <section className="page">
        {isLoading ? <div className="loading"></div> : <Outlet />}
        {/* <Outlet /> */}
      </section>
    </div>
  );
};
export default HomeLayout;
