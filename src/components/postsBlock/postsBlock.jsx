import "./PostsBlock.css";

function PostsBlock({
  firstTitle,
  firstBigImage,
  firstSmallImage,
  firstTextPartOne,
  firstTextPartTwo,
  secondTitle,
  secondBigImage,
  secondSmallImage,
  secondTextPartOne,
  secondTextPartTwo,
}) {
  return (
    <div className="posts-container">
      <div className="posts">
        <h2 className="posts__title">ut aliquip ex ea commodo consequat</h2>
        <ul className="posts__list">
          <li className="posts__item">
            <picture className="posts__image">
              <source
                media="(min-width: 1920px)"
                width="860"
                height="480"
                srcSet={`/assets/posts/${firstBigImage}`}
              />
              <source width="372" height="372" srcSet={`/assets/posts/${firstSmallImage}`} />
              <img
                className="header__logo"
                width="375"
                height="370"
                src={`/assets/posts/${firstSmallImage}`}
                alt="CIRCEYA"
              />
            </picture>
            <div className="posts__description">
              <h3 className="posts__subtitle">{firstTitle}</h3>
              <p className="posts__text">{firstTextPartOne}</p>
              <p className="posts__text">{firstTextPartTwo}</p>
            </div>
          </li>
          <li className="posts__item">
            <div className="posts__description">
              <h3 className="posts__subtitle">{secondTitle}</h3>
              <p className="posts__text">{secondTextPartOne}</p>
              <p className="posts__text">{secondTextPartTwo}</p>
            </div>
            <picture className="posts__image">
              <source
                media="(min-width: 1920px)"
                width="599"
                height="411"
                srcSet={`/assets/posts/${secondBigImage}`}
              />
              <source width="375" height="360" srcSet={`/assets/posts/${secondSmallImage}`} />
              <img
                className="header__logo"
                width="375"
                height="360"
                src={`/assets/posts/${secondSmallImage}`}
                alt="CIRCEYA"
              />
            </picture>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostsBlock;
