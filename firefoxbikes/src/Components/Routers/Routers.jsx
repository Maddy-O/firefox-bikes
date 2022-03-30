import { Navbar } from "../Navbar/Navbar";
import { Home } from "../HomePage/Home";
import { Route, Routes } from "react-router-dom";
import { ProductPage } from "../ProductPage/ProductPage";
import { Cart } from "../Cart/Cart";

export const Routers = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </body>
    </>
  );
};
