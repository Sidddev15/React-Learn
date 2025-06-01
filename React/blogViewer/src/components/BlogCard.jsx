export default function BlogCards({ blog, onReadMore }) {
	return (
		<div className="blog-card">
			<h2>{blog.title}</h2>
			<p>{blog.body.slice(0, 100)}{"..."}</p>
			<button onClick={() => onReadMore(blog)}>Read More</button>
		</div>
	);
}
