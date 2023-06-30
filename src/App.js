import "./App.css";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import PostsBlock from "./components/postsBlock/PostsBlock";
import FirstPostBlock from "./constans/FirstPostBlock";
import SecondPostBlock from "./constans/SecondPostBlock";

function App() {
  
  return (
    <div>
      <Header />
      <main style={{paddingTop: "105px"}}>
        <PostsBlock
          {...FirstPostBlock}
        />
        <Gallery />
        <PostsBlock
          {...SecondPostBlock}
        />
      </main>
    </div>
  );
}

export default App;
