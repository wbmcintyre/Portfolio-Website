import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Header/Hero";
import About from "./About/About";
import Features from "./Features/Features";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "./Footer/Footer";

import "../styles/_global.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
