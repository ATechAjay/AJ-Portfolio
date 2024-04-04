import style from "./ProjectCard.module.css";
import { HiEye } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <section className={style.card_container}>
      <div className={style.upper}>
        <h3>Currency Conversion</h3>
        <p>React App</p>
        <p>01</p>
      </div>

      <div className={style.middle}>
        <p>
          A simple currency conversion app that allows users to convert
          currencies from one denomination to another.
        </p>
        <span className={style.line}></span>
      </div>

      <div className={style.lower}>
        <ul className={style.tags_container}>
          <li className={style.tag}>HTML</li>
          <li className={style.tag}>CSS</li>
          <li className={style.tag}>JavaScript</li>
          <li className={style.tag}>React</li>
        </ul>
      </div>

      <div className={style.links_container}>
        <ul>
          <li>
            <a href="https://aj-currency-converter.netlify.app/">
              <HiEye />
            </a>
          </li>
          <li>
            <a href="https://github.com/ATechAjay/50-The-Ultimate-JavaScript-Projects-Series/tree/main/25%20-%20Live%20currency%20converter#">
              <FaCode />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectCard;
