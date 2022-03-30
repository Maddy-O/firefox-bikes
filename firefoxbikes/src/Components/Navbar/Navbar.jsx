import logo from "../Navbar/logo.svg";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "black",
        height: "100px",
        color: "white",
      }}
    >
      <div>
        <img src={logo} alt="Firefox Logo" style={{ width: "100%" }} />
      </div>
      <div>
        <p>BIKE SERVICE</p>
      </div>
      <div>
        <p>#GOBIKING TRIBE</p>
      </div>
      <div>
        <p>CUSTOMIZED BIKES</p>
      </div>
      <div>
        <p>Profile</p>
      </div>
      <div>
        <p>Cart</p>
      </div>
    </div>
  );
};
