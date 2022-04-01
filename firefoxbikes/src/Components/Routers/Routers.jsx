import { Navbar } from "../Navbar/Navbar";
import { BikeService } from "../BikeService/BikeService";
import { Route, Routes } from "react-router-dom";
import { ProductPage } from "../ProductPage/ProductPage";
import { Cart } from "../Cart/Cart";
import { SignupLogin } from "../SignupLogin/SignupLogin";
import { SignupLogin_up } from "../SignupLogin/SignupLogin_up";
import Home from "../Home/Home";
import CardPayment from "../PaymentPage/CardPayment";
import PaymentPage from "../PaymentPage/PaymentPage";
import UpiPayment from "../PaymentPage/UpiPayment";
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
        <Route path="/signuplogin/signup" element={<SignupLogin_up />} />
        <Route path="/signuplogin/login" element={<SignupLogin />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="/cardpayment" element={<CardPayment />} />
        <Route path="/upipayment" element={<UpiPayment />} />
        <Route path="/address" element={<Address />} />
      </Routes>
    </>
  );
};
