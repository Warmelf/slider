import ArrUrlImages from "../../constans/ArrUrlImages";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery">
        <h2 className="gallery__title">Lorem ipsum dolor sit amet</h2>
        <ul className="gallery__list">
          {ArrUrlImages.map((el, index) => {
            return (
              <li className="gallery__item" key={index}>
                <picture className="gallery__image">
                  <source media="(min-width: 1920px)" width="320" height="489" srcSet={el} />
                  <source width="225" height="344" srcSet={el} />
                  <img className="header__logo" width="225" height="344" src={el} alt="CIRCEYA" />
                </picture>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Gallery;
