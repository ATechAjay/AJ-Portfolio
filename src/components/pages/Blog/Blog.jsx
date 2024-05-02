import style from "./Blog.module.css";

const Blog = () => {
  return (
    <div className={style.blog_container}>
      <h1>Technical Blogs</h1>
      <p className={style.description}>
        As a Technical Writer at Talent500 – Blogs since June 2022, I&apos;ve
        authored 12+ engaging blogs on HTML, CSS, JavaScript, React, and
        Firebase, ensuring clarity and accuracy. Additionally, I manage a
        Twitter channel focused on front-end technologies, attracting over 24K+
        followers with detailed threads simplifying complex topics like HTML,
        CSS, JavaScript, React, Tailwind, and Bootstrap, fostering engagement
        and understanding.
      </p>

      <a
        href="https://talent500.co/blog/author/ajay-yadav/"
        target="_blank"
        className={style.link}
      >
        Read all the blogs
      </a>
    </div>
  );
};

export default Blog;
