import "./Gallery.css";

function Gallery() {
  const arrUrlImages = [
    "/assets/gallery/gallery_1.jpg",
    "/assets/gallery/gallery_2.jpg",
    "/assets/gallery/gallery_3.jpg",
    "/assets/gallery/gallery_4.jpg",
    "/assets/gallery/gallery_5.jpg",
    "/assets/gallery/gallery_6.jpg",
    "/assets/gallery/gallery_7.jpg",
    "/assets/gallery/gallery_8.jpg",
  ];
  return (
    <div className="gallery">
      <h2 className="gallery__title">Lorem ipsum dolor sit amet</h2>
      <ul className="gallery__list">
        {arrUrlImages.map((el, index) => {
          return (
            <li className="gallery__item" key={index}>
              <picture className="gallery__image">
                <source
                  media="(min-width: 1920px)"
                  width="320"
                  height="489"
                  srcSet={el}
                />
                <source
                  width="225"
                  height="344"
                  srcSet={el}
                />
                <img
                  className="header__logo"
                  width="225"
                  height="344"
                  src={el}
                  alt="CIRCEYA"
                />
              </picture>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Gallery;
