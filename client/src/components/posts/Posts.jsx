import Post from "../post/Post";
import "./posts.css";

const Posts = ({ posts }) => {
	return (
		<div className="posts">
			{posts.length > 0 &&
				posts.map((post) => <Post post={post} key={post.id} />)}
		</div>
	);
};

export default Posts;
