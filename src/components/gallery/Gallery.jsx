import React, { createRef, useEffect, useRef, useState } from "react";
import ArrUrlImages from "../../constans/ArrUrlImages";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import cn from "classnames";
import "./Gallery.css";
import useOnScreen from "../../hooks/useOnScreen";

function GalleryItem({ el, index, updateActiveImage }) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
  
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);
  return (
    <li
   
      key={index}
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
      // style={{ left: `${index * 360}px` }}
      // ref={index ==== ArrUrlImages.length - 1 ? ref : null}
    >
      <div className="gallery-item">
        <picture className="gallery-item-image">
          <source media="(min-width: 1920px)" width="320" height="489" srcSet={el} />
          <source width="225" height="344" srcSet={el} />
          <img width="225" height="344" src={el} alt="CIRCEYA" />
        </picture>
      </div>
    </li>
  );
}

function Gallery() {
  // const [leftSpace, setLeftSpace] = useState(360);
  // const [scroll, setScroll] = useState(0);
  // const [isScrollUp, setIsScrollUp] = useState(false);

  // (ArrUrlImages.length - 1) * 360
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  // const handleScroll = () => {
  //   setScroll(window.scrollY);
  // if(scroll + 360 > document.documentElement.clientHeight) {
  //   console.log("скроллим слайдер справо налево!!!!!");
  //   setIsScrollUp(true);
  // } else {
  //   console.log("скроллим слайдер в другую сторону!");
  //   setIsScrollUp(false);
  // }
  // };
  // const ref = useRef();
  // const myRef = createRef();
  // useEffect(() => {
  //   const windowInnerWidth = document.documentElement.clientWidth;
  //   const rect = ref.current.getBoundingClientRect();
  //   // console.log(rect)
  //   scrollToMyRef()
  // }, []);
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
  // document.addEventListener("wheel", (e) => {
  // if(el.getBoundingClientRect())
  // console.log(el.getBoundingClientRect())
  // console.log(e.target)
  // scrollToMyRef()
  // });
  // function scrollToMyRef() {
  //   // window.scrollTo(0, myRef.top)
  //   if (myRef && myRef.current) {
  //     const heightGallery = myRef.current.getBoundingClientRect().height;
  //     console.log("heightGallery", heightGallery);
  //     const toTop = myRef.current.getBoundingClientRect().top;
  //     console.log("toTop", toTop);
  //     const windowInnerWidth = document.documentElement.clientWidth;
  //     const rect = ref.current.getBoundingClientRect().left;
  //     console.log("rect", rect);
  //     console.log("windowInnerWidth", windowInnerWidth);
  //     if (rect < windowInnerWidth && !isScrollUp) {
  //       window.scrollTo({
  //         top: toTop + heightGallery,
  //         behavior: "smooth",
  //       });
  //       setIsScrollUp(true)
  //     }
  //   }
  // }
  // setTimeout(scrollToMyRef, 1000);
  // function slideClass(ind) {
  //   switch (ind) {
  //     case 0:
  //       return "gallery__item slide in-up out-left";
  //     case ArrUrlImages.length - 1:
  //       return "gallery__item slide in-left out-up";
  //     default:
  //       return "gallery__item slide in-left out-left";
  //   }
  // }

  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      let sections = gsap.utils.toArray(".gallery-item-wrapper");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section className="gallery-container" data-scroll-section>
      {/* <div className="gallery"> */}
      <div className="gallery-wrap">
        <h2 className="gallery__title">Lorem ipsum dolor sit amet</h2>
        {/* <ul className="gallery__list" ref={myRef}> */}
        <ul className="gallery" ref={ref}>
          {/* <HorizontalScroll className="scroll" reverseScroll={true}> */}
          {ArrUrlImages.map((el, index) => {
            return (
              <GalleryItem
                el={el}
                index={index}
                key={index}
               
                updateActiveImage={handleUpdateActiveImage}
              />
            );
          })}
          {/* </HorizontalScroll> */}
        </ul>
        {/* {scroll + 360 > document.documentElement.clientHeight && <p>че там</p>} */}
      </div>
    </section>
  );
}

export default Gallery;
