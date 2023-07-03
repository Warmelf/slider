import * as React from "react";
import "./App.css";
// import Gallery from "./components/gallery/Gallery";
import Gallery from "./components/ex";
import Header from "./components/header/Header";
import PostsBlock from "./components/postsBlock/PostsBlock";
import FirstPostBlock from "./constans/FirstPostBlock";
import SecondPostBlock from "./constans/SecondPostBlock";
import useLocoScroll from "./hooks/useLocoScroll";

function App() {
  useLocoScroll();
  return (
    <div data-scroll-container className="main-container" id="main-container">
      <Header />
      <PostsBlock {...FirstPostBlock} />
      <Gallery />
      <PostsBlock {...SecondPostBlock} />
    </div>
  );
}

export default App;
