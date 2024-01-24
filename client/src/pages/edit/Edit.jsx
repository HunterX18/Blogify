import "./edit.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [post, setPost] = useState({
		title: "",
		body: "",
	});

	useEffect(() => {
		async function getPost() {
			const res = await axios.get(`http://localhost:8000/posts/${id}`);
			const data = res.data;
			if (data.detail?.error !== undefined) {
				navigate("/error");
			} else setPost(data);
		}
		getPost();
	}, []);

	const handleEdit = async (e) => {
		e.preventDefault();
		// console.log(post);
		if (post.title === "" || post.body === "") {
			alert("Field cannot be empty");
		} else {
			const res = await axios.put(`http://localhost:8000/posts/${id}`, post);
			const data = res.data;
			// console.log(data);
			// navigate("/");
			navigate(`/post/${id}`);
		}
	};

	return (
		<div className="edit">
			<img
				className="editImg"
				src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="edit_img"
			/>
			<form className="editForm">
				<div className="editFormGroup">
					<input
						className="editInput"
						autoFocus={true}
						type="text"
						placeholder="Title"
						value={post.title}
						onChange={(e) => setPost({ ...post, title: e.target.value })}
					/>
				</div>
				<div className="editFormGroup">
					<textarea
						placeholder="Tell your story..."
						type="text"
						className="editInput editText"
						value={post.body}
						onChange={(e) => setPost({ ...post, body: e.target.value })}
					></textarea>
				</div>
				<button className="editSubmit" onClick={(e) => handleEdit(e)}>
					Edit
				</button>
			</form>
		</div>
	);
};

export default Edit;
