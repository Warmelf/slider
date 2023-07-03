import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import PostsBlock from "../components/PostsBlock/PostsBlock";
import Gallery from "../components/Gallery";
import useLocoScroll from "../hooks/useLocoScroll";
import FirstPostBlock from "../constans/FirstPostBlock";
import SecondPostBlock from "../constans/SecondPostBlock";

import "../styles/home.scss";

const Home = () => {
  useLocoScroll();

  return (
    <div className="main-container" id="main-container" data-scroll-container>
      <Header />
      <PostsBlock {...FirstPostBlock} />
      <Gallery />
      <PostsBlock {...SecondPostBlock} />
      <Footer />
    </div>
  );
};
export default Home;
