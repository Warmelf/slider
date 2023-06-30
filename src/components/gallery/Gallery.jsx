import React, { createRef, useEffect, useRef, useState } from "react";
import ArrUrlImages from "../../constans/ArrUrlImages";
import HorizontalScroll from "react-scroll-horizontal";
import "./Gallery.css";

function Gallery() {
  const [leftSpace, setLeftSpace] = useState(360);
  const [scroll, setScroll] = useState(0);
  const [isScrollUp, setIsScrollUp] = useState(false);
  
  // (ArrUrlImages.length - 1) * 360
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    setScroll(window.scrollY);
    // if(scroll + 360 > document.documentElement.clientHeight) {
    //   console.log("скроллим слайдер справо налево!!!!!");
    //   setIsScrollUp(true);
    // } else {
    //   console.log("скроллим слайдер в другую сторону!");
    //   setIsScrollUp(false);
    // }
  };
  const ref = useRef();
  const myRef = createRef();
  useEffect(() => {
    const windowInnerWidth = document.documentElement.clientWidth;
    const rect = ref.current.getBoundingClientRect();
    console.log(rect)
  }, []);
  // document.addEventListener("scroll", () => {
  //   console.log("qq");
  //   if(scroll + 360 > document.documentElement.clientHeight) {
  //     console.log("скроллим слайдер!!!!!");
  //   }
  //   setLeftSpace(leftSpace + 2);
  // });
  // const prevent = ev => ev.preventDefault();
  // document.addEventListener('wheel', prevent, {passive: false});
  // document.removeEventListener('wheel', prevent);
  // var c = this.getBoundingClientRect()
  // const el = document.querySelector(".gallery-container");
  document.addEventListener("wheel", (e) => {
    // if(el.getBoundingClientRect())
    // console.log(el.getBoundingClientRect())
    // console.log(e.target)
  });
  function scrollToMyRef () {
    window.scrollTo(0, myRef.top)
  }
  setTimeout(scrollToMyRef, 1000);
  return (
    <div className="gallery-container">
      <div className="gallery">
        <h2 className="gallery__title">Lorem ipsum dolor sit amet</h2>
        <ul className="gallery__list" ref={myRef}>
          <HorizontalScroll className="scroll" reverseScroll={true} pageLock={true}>
            {ArrUrlImages.map((el, index) => {
              return (
                <li
                  className="gallery__item"
                  key={index}
                  style={{ left: `${index * 360}px` }}
                  ref={index === ArrUrlImages.length - 1 ? ref : null}
                >
                  <picture className="gallery__image">
                    <source media="(min-width: 1920px)" width="320" height="489" srcSet={el} />
                    <source width="225" height="344" srcSet={el} />
                    <img width="225" height="344" src={el} alt="CIRCEYA" />
                  </picture>
                </li>
              );
            })}
          </HorizontalScroll>
        </ul>
        {scroll + 360 > document.documentElement.clientHeight && <p>че там</p>}
      </div>
    </div>
  );
}

export default Gallery;
