import logo from "../Navbar/logo.svg";
import BikeService from "../BikeService/BikeService";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "black",
        height: "71px",
        color: "white",
      }}
    >
      <div>
        <img src={logo} alt="Firefox Logo" style={{ width: "100%" }} />
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <a href="../BikeService">BIKE SERVICE</a>
        </div>
        <div>
          <p>#GOBIKING TRIBE</p>
        </div>
        <div>
          <p>CUSTOMIZED BIKES</p>
        </div>
        <div></div>
        <p>Profile</p>
      </div>
      <div>
        <a href="../Cart">Cart</a>
      </div>
    </div>
  );
};
