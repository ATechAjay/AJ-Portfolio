import PrimaryButton from "../Reusable/PrimaryButton";
import SecondaryButton from "../Reusable/SecondaryButton";
import style from "./HeroContent.module.css";

const HeroContent = () => {
  return (
    <section className={style.hero_text_container}>
      <div className={style.text_wrapper}>
        <p className={style.intro}>Hi, I am</p>
        <h1 className={style.intro_name}>Ajay Yadav</h1>
        <p className={style.intro_profession}>Front-end developer ✨</p>
        <p className={style.intro_cta}>
          Skilled in front-end development, I craft engaging web experiences
          with HTML, CSS, JavaScript, and ReactJS.
        </p>
        <p className={style.intro_cta}>
          Teaching is my passion, guiding others about the web development via
          Twitter threads, blogs, and videos.
        </p>
      </div>
      <div className={style.btn_wrapper}>
        <PrimaryButton />
        <SecondaryButton />
      </div>
    </section>
  );
};
export default HeroContent;
