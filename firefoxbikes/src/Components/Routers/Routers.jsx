import { Navbar } from "../Navbar/Navbar";
import { BikeService } from "../BikeService/BikeService";
import { Route, Routes } from "react-router-dom";
import { ProductPage } from "../ProductPage/ProductPage";
import { Cart } from "../Cart/Cart";
import Home from "../Home/Home";
import { Address } from "../Address/Address";

export const Routers = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/bikeservice" element={<BikeService />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address/>}/>
      </Routes>
    </>
  );
};
