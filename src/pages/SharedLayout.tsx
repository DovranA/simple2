import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const SharedLayout = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
