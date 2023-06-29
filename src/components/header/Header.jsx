import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/">
          <img className="header__logo" src="/assets/logo.svg" alt="CIRCEYA" />
        </a>
        <a className="header__link" href="tel:+74954954954">
          +7 (495) 495-49-54
        </a>
      </div>
    </header>
  );
}

export default Header;
