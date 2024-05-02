import { useState } from "react";
import logo from "../../assets/logo.png";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
// Mobile nav icon
import { HiOutlineX } from "react-icons/hi";
import { CgMenuGridR } from "react-icons/cg";

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
      <Link to="/" className={style.header_logo_link}>
        <img className={style.header_logo} src={logo} alt="AJ Logo" />
      </Link>

      <ul className={style.header_link_container}>
        <li>
          <Link to="/project">Project</Link>
        </li>

        <li>
          <Link to="/collab">Collab</Link>
        </li>

        <li>
          <Link to="/thread">Thread</Link>
        </li>

        <li>
          <Link to="/blog">Blog</Link>
        </li>

        <li>
          <Link to="/connect">Connect</Link>
        </li>
      </ul>

      <button className={style["mobile_nav_btn"]} onClick={clickHandler}>
        {showMobileNav ? (
          <CgMenuGridR className={style.open_icon} />
        ) : (
          <HiOutlineX className={style.close_icon} />
        )}
      </button>
    </header>
  );
};

export default Header;
