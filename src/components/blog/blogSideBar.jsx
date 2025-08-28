import BlogCategory from "./blogCategory";
import BlogRecent from "./blogRecent";

export default function blogSideBar({ blogPosts }) {
  return (
    <div>
      <BlogRecent blogPosts={blogPosts} />
      <BlogCategory />
    </div>
  );
}
