import { Navbar } from "../Navbar/Navbar";
import { BikeService } from "../BikeService/BikeService";
import { Route, Routes } from "react-router-dom";

export const Routers = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {/* <body> */}
      <Routes>
        <Route path="/" element={<BikeService />} />
      </Routes>
      {/* </body> */}
    </>
  );
};
