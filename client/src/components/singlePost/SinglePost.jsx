import "./singlePost.css";

const SinglePost = () => {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					className="singlePostImg"
					src="https://images.unsplash.com/photo-1512386233331-f023884a92e8?q=80&w=1495&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="post_img"
				/>
				<h1 className="singlePostTitle">
					Lorem ipsum dolor sit
					<div className="singlePostEdit">
						<i className="singlePostIcon fa-solid fa-pen-to-square"></i>
						<i className="singlePostIcon fa-solid fa-trash-can"></i>
					</div>
				</h1>
				<p className="singlePostDesc">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
					exercitationem adipisci placeat deserunt minima, fugiat rerum magni
					officia eius molestias sunt facere, itaque error maxime accusantium
					porro blanditiis beatae. Nostrum?Lorem ipsum dolor sit amet
					consectetur, adipisicing elit. Iure, exercitationem adipisci placeat
					deserunt minima, fugiat rerum magni officia eius molestias sunt
					facere, itaque error maxime accusantium porro blanditiis beatae.
					Nostrum?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Iure, exercitationem adipisci placeat deserunt minima, fugiat rerum
					magni officia eius molestias sunt facere, itaque error maxime
					accusantium porro blanditiis beatae. Nostrum?Lorem ipsum dolor sit
					amet consectetur, adipisicing elit. Iure, exercitationem adipisci
					placeat deserunt minima, fugiat rerum magni officia eius molestias
					sunt facere, itaque error maxime accusantium porro blanditiis beatae.
					Nostrum?
				</p>
			</div>
		</div>
	);
};

export default SinglePost;
