import logo from "../../assets/logo.png";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.header}>
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
    </header>
  );
};

export default Header;
