

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Education from "./Components/Education";
import Portfolio from "./Components/Portfolio";

import "./styles.css";



const siteProps = {
  name: "Adapa Sai Prithvi",
  title: "Software Developer & Software Designer",
  email: "saiprithvi0705@gamil.com",
  github: "codeping0705",
  linkedIn: "saiprithvi",
  Twitter: "sai620",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Education/>
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
