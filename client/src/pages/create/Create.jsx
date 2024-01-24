import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create.css";
import api from "../../api";

const Create = () => {
	const navigate = useNavigate();

	const [post, setPost] = useState({
		title: "",
		body: "",
	});

	const handlePublish = async (e) => {
		e.preventDefault();
		if (post.title === "" || post.body === "") {
			alert("Fields cannot by empty");
		} else {
			const res = await axios.post(`${api}/posts`, post);
			const data = res.data;
			console.log(data);
			navigate("/");
		}
	};

	return (
		<div className="create">
			<img
				className="createImg"
				src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="create_img"
			/>
			<form className="createForm">
				<div className="createFormGroup">
					<input
						className="createInput"
						autoFocus={true}
						type="text"
						placeholder="Title"
						value={post.title}
						onChange={(e) => setPost({ ...post, title: e.target.value })}
					/>
				</div>
				<div className="createFormGroup">
					<textarea
						placeholder="Tell your story..."
						type="text"
						className="createInput createText"
						value={post.body}
						onChange={(e) => setPost({ ...post, body: e.target.value })}
					></textarea>
				</div>
				<button className="createSubmit" onClick={(e) => handlePublish(e)}>
					Publish
				</button>
			</form>
		</div>
	);
};

export default Create;
