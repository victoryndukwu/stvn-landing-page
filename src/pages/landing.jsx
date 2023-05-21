import { BsArrowRight, BsBell } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { FiLock } from "react-icons/fi";
import "./landing.scss";

const Landing = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav__logo">STVN.</div>
        <ul className="nav__menu">
          <li className="nav__menu-item">Home</li>
          <li className="nav__menu-item">Men</li>
          <li className="nav__menu-item">Women</li>
          <li className="nav__menu-item">Collections</li>
        </ul>
        <div className="nav__user">
          <GrFavorite className="nav__user-item" />
          <BsBell className="nav__user-item" />
          <FiLock className="nav__user-item" />
        </div>
      </nav>

      <main className="hero">
        <div className="hero__paragraph">
          <p>Improve your look with the newest streetwear trends.</p>
        </div>
        <div className="hero__slider"></div>
      </main>

      <section className="category">
        <div className="category__header">
          <p className="category__header--title"></p>
          <button className="category__header--btn"></button>
        </div>
        <div className="category__grid"></div>
      </section>
      <section className="filter">
        <div className="filter__search"></div>
        <div className="filter__criteria"></div>
        <div className="filter__grid"></div>
      </section>
      <section className="collection">
        <p className="collection__heading"></p>
        <p className="collection__paragraph"></p>
        <div className="collection__grid"></div>
      </section>
      <footer className="footer">
        <div className="footer__col col__1">
          <p className="footer__logo">STVN</p>
          <p className="footer__paragraph">
            With our streetwear line, step up your fashion game.
          </p>
        </div>
        <div className="footer__col col__2">
          <ul className="footer__menu">
            <li className="footer__menu--item">About</li>
            <li className="footer__menu--item">Company</li>
            <li className="footer__menu--item">Contact</li>
          </ul>
        </div>
        <div className="footer__col col__3">
          <ul className="footer__menu">
            <li className="footer__menu--item">About</li>
            <li className="footer__menu--item">Company</li>
            <li className="footer__menu--item">Contact</li>
          </ul>
        </div>
        <div className="footer__col col__4">
          <ul className="footer__menu">
            <li className="footer__menu--item">FAQ</li>
            <li className="footer__menu--item">Terms</li>
            <li className="footer__menu--item">Privacy Policy</li>
          </ul>
        </div>

        <div className="footer__col col__5">
          <p className="footer__paragraph">Join Our News Collection</p>
          <div>
            <input type="text" placeholder="Enter your email" />
            <BsArrowRight />
          </div>
        </div>
      </footer>
    </>
  );
};
export default Landing;
