import ProjectCard from "./ProjectCard";
import style from "./Project.module.css";
import Data from "../../utils/Data";
const Project = () => {
  // console.log(Data[0].id);

  return (
    <div className={style.cards_container}>
      <h1>Tip of the iceberg </h1>

      <div className={style.cards}>
        {/* <ProjectCard /> */}

        {Data.map((project) => (
          <ProjectCard projectData={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Project;
