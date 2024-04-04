import style from "./HeroImage.module.css";
const HeroImage = () => {
  return (
    <div className={style.img_container}>
      <img
        src="https://res.cloudinary.com/dxowsspd6/image/upload/v1712210835/AJ_Portfolio_Assets/Hero_z0a3ql.webp"
        alt="Ajay Yadav (ATechAjay)"
      />
    </div>
  );
};

export default HeroImage;
