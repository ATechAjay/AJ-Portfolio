import style from "./ProjectCard.module.css";
import { HiEye } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

const ProjectCard = ({ projectData }) => {
  const {
    id,
    projectName,
    image,
    techStack,
    description,
    techTags,
    hostedLink,
    gitHubLink,
  } = projectData;

  return (
    <section className={style.card_container}>
      <div
        className={style.upper}
        style={{
          background: `linear-gradient(to right, #000000b0, #000000b3), url(${image}) no-repeat center center/cover`,
        }}
      >
        <h3>{projectName}</h3>
        <p>{techStack}</p>
        <p>{id}</p>
      </div>

      <div className={style.middle}>
        <p>{description}</p>
        <span className={style.line}></span>
      </div>

      <div className={style.lower}>
        <ul className={style.tags_container}>
          {techTags.map((tag, index) => (
            <li className={style.tag} key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className={style.links_container}>
        <ul>
          <li>
            <a href={hostedLink}>
              <HiEye />
            </a>
          </li>
          <li>
            <a href={gitHubLink}>
              <FaCode />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectCard;
