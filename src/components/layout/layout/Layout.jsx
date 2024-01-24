import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import "./Layout.css";
import ResponsiveAppBar from "../navbar/ResponsiveAppBar";

const Layout = () => {
  return (
    <>
      <div style={{ height: "10vh" }}>
        <ResponsiveAppBar />
      </div>
      <div className="body" style={{ minHeight: "75vh" }}>
        <Outlet />
      </div>
      <div style={{ height: "10vh" }}>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
