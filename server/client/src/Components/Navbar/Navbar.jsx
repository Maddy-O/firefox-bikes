import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar_real">
        <div className="Navbar_Logo_div">
          <Link to={"/"}>
            <img
              src="https://www.firefoxbikes.com/on/demandware.static/-/Sites-HeroFirefox-Library/default/dw341554ba/logo.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="Navbar_middle_div">
          <Link className="Navbar_middle_text" to={"/product"}>
            <div>BIKES</div>
          </Link>
          <Link className="Navbar_middle_text" to={"/"}>
            <div>ACCESSORIES</div>
          </Link>
          <Link className="Navbar_middle_text" to={"/bikeservice"}>
            <div>BIKE SERVICE</div>
          </Link>
          <Link className="Navbar_middle_text" to={"/"}>
            <div>#GOBIKING TRIBE</div>
          </Link>
        </div>
        <div className="Navbar_icon_div">
          <Link to={"/"}>
            <img className="Navbar_icons" src="search.png" alt="" />
          </Link>
          <Link to={"/"}>
            <img className="Navbar_icons" src="location.png" alt="" />
          </Link>
          <Link to={"/cart"}>
            <img className="Navbar_icons" src="carts.png" alt="" />
          </Link>
          <Link to={"/signuplogin/login"}>
            <img className="Navbar_icons" src="user.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};
