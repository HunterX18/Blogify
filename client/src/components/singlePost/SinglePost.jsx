import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./singlePost.css";
import { useEffect, useState } from "react";
import api from "../../api";

const SinglePost = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [post, setPost] = useState({
		title: "",
		body: "",
	});

	useEffect(() => {
		async function getPost() {
			const res = await axios.get(`${api}/posts/${id}`);
			const data = res.data;
			if (data.detail?.error !== undefined) {
				navigate("/error");
			} else {
				setPost(data);
			}
		}
		getPost();
	}, []);

	const handleEdit = () => {
		// console.log("Edit");
		navigate(`/posts/${id}/edit`);
	};

	const handleDelete = async () => {
		// console.log("Delete");
		const res = await axios.delete(`${api}/posts/${id}`);
		const data = res.data;
		// console.log(data);
		navigate("/");
	};

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					className="singlePostImg"
					src="https://images.unsplash.com/photo-1512386233331-f023884a92e8?q=80&w=1495&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="post_img"
				/>
				<h1 className="singlePostTitle">
					{post.title}
					<div className="singlePostEdit">
						<i
							className="singlePostIcon fa-solid fa-pen-to-square"
							onClick={handleEdit}
						></i>
						<i
							className="singlePostIcon fa-solid fa-trash-can"
							onClick={handleDelete}
						></i>
					</div>
				</h1>
				<p className="singlePostDesc">{post.body}</p>
			</div>
		</div>
	);
};

export default SinglePost;
