import style from "./Series.module.css";

const Series = () => {
  return (
    <div>
      <h1 className={style.heading}>Coding Series on 𝕏</h1>

      <div className={style.series_container}>
        <div className={style.css}>
          <a href="#">CSS Series</a>
        </div>
      </div>
    </div>
  );
};

export default Series;
