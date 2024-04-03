import logo from "../../assets/logo.png";
import style from "./Header.module.css";
// Mobile nav icon
import { HiOutlineViewGrid, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

// import { IconName } from "react-icons/hi";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(true);

  const clickHandler = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    // Add a new class called "open_nav"
    <header
      className={
        showMobileNav ? `${style.header}` : `${style.header} ${style.open_nav}`
      }
    >
      <a href="/" className={style.header_logo_link}>
        <img className={style.header_logo} src={logo} alt="AJ Logo" />
      </a>

      <ul className={style.header_link_container}>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Thread</a>
        </li>
        <li>
          <a href="#">Series</a>
        </li>
        <li>
          <a href="#">Collab</a>
        </li>
        <li>
          <a href="#">Connect</a>
        </li>
      </ul>

      <button className={style["mobile_nav_btn"]} onClick={clickHandler}>
        {showMobileNav ? (
          <HiOutlineViewGrid className={style.open_icon} />
        ) : (
          <HiOutlineX className={style.close_icon} />
        )}
      </button>
    </header>
  );
};

export default Header;
