import React from "react";
import Navbar from "./Navbar";
import Container_1 from "./Container_1";
import Feature from "./Feature";
import Banner from "./Banner";
import Faq from "./Faq";
import Banner_2 from "./Banner_2";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div>
      <div id="navbar">
        <Navbar />
      </div>

      <section id="container-1">
        <Container_1 />
      </section>

      <section id="features">
        <Feature />
      </section>

      <section id="banner">
        <Banner />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="banner-2">
        <Banner_2 />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
