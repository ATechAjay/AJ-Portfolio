import style from "./Blog.module.css";
const BlogCard = () => {
  return (
    <div className={style.container}>
      <a
        className={style.blog}
        href="https://talent500.co/blog/building-complex-layouts-with-css-grid/"
      >
        <img
          src="https://blog.talent500.co/wp-content/uploads/2024/04/Learn-CSS-Feature-730x485-1-370x300.png"
          alt=""
        />

        <p className={style.blog_heading}>
          Guide to Building Complex Layouts with CSS Grid
        </p>
      </a>
    </div>
  );
};

export default BlogCard;
