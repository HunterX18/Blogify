import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./home.css";

function Home() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function getPosts() {
			const res = await axios.get("http://localhost:8000/posts");
			const data = res.data;
			console.log(data);
			setPosts(data);
		}
		getPosts();
	}, []);

	return (
		<>
			<Header />
			<div className="home">
				<Posts posts={posts} />
			</div>
		</>
	);
}

export default Home;
