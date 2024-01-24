import "./post.css";

const Post = () => {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="blog_background"
			/>
			<div className="postInfo">
				<span className="postTitle">Lorem ipsum dolor sit </span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo id
				reprehenderit deleniti odio non pariatur iusto. Sunt, non itaque optio
				eius soluta tempore autem assumenda id exercitationem in vel
				consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Quo id reprehenderit deleniti odio non pariatur iusto. Sunt, non itaque
				optio eius soluta tempore autem assumenda id exercitationem in vel
				consequuntur.
			</p>
		</div>
	);
};

export default Post;
