import { Outlet } from "react-router-dom";
import Footer from "../components/shared/FooterComp/Footer";
import Navbar from "../components/shared/NavComp/Navbar";
const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
