import logo from "../Navbar/logo.svg";

export const Navbar = () => {
  return (
    <header
      style={{ display: "flex", backgroundColor: "black", height: "100px" }}
    >
      <div>
        <img src={logo} alt="Firefox Logo" style={{ width: "100%" }} />
      </div>
      <div>
        <h2>Bikes</h2>
        <select>
          <option>a</option>
          <option>a</option>
          <option>a</option>
        </select>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </header>
  );
};
