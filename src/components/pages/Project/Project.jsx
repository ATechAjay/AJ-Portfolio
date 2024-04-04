import ProjectCard from "./ProjectCard";
import style from "./Project.module.css";
const Project = () => {
  return (
    <div className={style.cards_container}>
      <h1>Tip of the iceberg</h1>

      <div className={style.cards}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
