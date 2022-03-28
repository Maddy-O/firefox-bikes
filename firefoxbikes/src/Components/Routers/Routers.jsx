import { Navbar } from "../Navbar/Navbar";
import { Home } from "../HomePage/Home";
import { Route, Routes } from "react-router-dom";

export const Routers = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </body>
    </>
  );
};
