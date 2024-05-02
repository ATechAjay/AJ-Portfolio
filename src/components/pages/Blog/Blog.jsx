import style from "./Blog.module.css";
import BlogCard from "./BlogCard";
const Blog = () => {
  return (
    <div className={style.blog_container}>
      <h1>Technical Blogs</h1>
      <div className={style.blogs}>
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
