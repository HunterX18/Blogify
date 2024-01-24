import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="blog_background"
			/>
			<div className="postInfo">
				<span className="postTitle">{post.title}</span>
				<span className="postDesc">
					<Link
						to={`/post/${post.id}`}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						Read More
					</Link>
				</span>
			</div>
		</div>
	);
};

export default Post;
