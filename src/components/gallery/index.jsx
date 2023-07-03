import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
import ArrUrlImages from "../../constans/ArrUrlImages";

import "./style.scss";

function GalleryItem({
  src,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
  
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={"gallery-item"}>
        <picture className="gallery-item-image">
          <source media="(min-width: 1920px)" width="320" height="489" srcSet={src} />
          <source width="225" height="344" srcSet={src} />
          <img width="225" height="344" src={src} alt="CIRCEYA" />
        </picture>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
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
    <section data-scroll-section className="section-wrapper gallery-wrap"> 
      <div className="gallery" ref={ref}>
      <h2 className="gallery-title" style={{opacity: "1", zIndex: "999", transform: "translateX(262px)", width: 0, whiteSpace: "nowrap"}}>Lorem ipsum dolor sit amet</h2>
        {ArrUrlImages.map((image, index) => (
          <GalleryItem
            key={index}
            index={index}
            src={image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}
