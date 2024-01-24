import { Typography } from "@mui/material";
import { CartWidget } from "../../common/CartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dqy0anqjn/image/upload/v1695570628/Logo1_uhakbd.png"
            alt="Logo"
            className="logo"
          />
        </Link>
        <Typography align="center" variant="h5" color={"secondary"}>
          <nav>
            <ul className="menu">
              <Link className="a" to="/">
                <li>Todos</li>
              </Link>
              <Link className="a" to="/category/aparadores">
                <li>Aparadores</li>
              </Link>
              <Link className="a" to="/category/mesas">
                <li>Mesas</li>
              </Link>
              <Link className="a" to="/category/sofas">
                <li>Sofás</li>
              </Link>
            </ul>
          </nav>
        </Typography>
        <Link to="/cart ">
          <CartWidget />
        </Link>
      </div>
    </>
  );
};
