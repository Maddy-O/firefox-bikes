import { Navbar } from "../Navbar/Navbar";
import { Home } from "../HomePage/Home";
import { Route, Routes } from "react-router-dom";
import { ProductPage } from "../ProductPage/ProductPage";

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
        </Routes>
      </body>
    </>
  );
};
