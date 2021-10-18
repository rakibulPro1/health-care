import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Searvices from "../Searvices/Searvices";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Searvices></Searvices>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
