import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";



const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p> </p>
        <h1></h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p> </p>
        <h1></h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p></p>
        <h1></h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p></p>
        <h1></h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/">
        <About />
      </Route>

      <Route path="/">
        <Service />
      </Route>

      <Route path="/">
        <Contact />
      </Route>
    </Switch>
  );
};


export default App;
