import { useEffect, useState } from "react";
import "./styles/App.css";
import { fetchBlogs } from "./services/blogServices";
import BlogLists from "./components/BlogLists";
import FullBlogModal from "./components/FullBlogModal";

function App() {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedBlog, setSelectedBlog] = useState(null);

	useEffect(() => {
		fetchBlogs()
			.then((data) => setBlogs(data))
			.catch(console.error)
			.finally(() => setLoading(false));
	}, []);

	return (
		<div>
			<h1 style={{textAlign:"center", fontFamily: "monospace"}}>Mini Blog Viewer</h1>
			{loading ? (
				<p>Loading...</p>
			) : (
				<BlogLists
					blogs={blogs}
					onReadMore={setSelectedBlog}
				/>
			)}

			{selectedBlog && (
				<FullBlogModal
					blog={selectedBlog}
					onClose={() => {
						console.log("Modal close triggered");
						setSelectedBlog(null);
					}}
				/>
			)}
			{console.log("selectedBlog", selectedBlog)}
		</div>
	);
}

export default App;
