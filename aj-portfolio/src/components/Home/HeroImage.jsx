import style from "./HeroImage.module.css";
import hero from "../../assets/hero.png";
const HeroImage = () => {
  return (
    <div className={style.img_container}>
      <img src={hero} alt="Ajay Yadav (ATechAjay)" />
    </div>
  );
};

export default HeroImage;
