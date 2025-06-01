import BlogCards from "./BlogCard";

export default function BlogLists({blogs, onReadMore}) {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <BlogCards key={blog.id} blog={blog} onReadMore={onReadMore} />
      ))}
    </div>
  );
}
