import "./header.css";

const Header = () => {
	return (
		<>
			<div className="header">
				<div className="headerTitles">
					<span className="headerTitleSm">React & Node</span>
					<span className="headerTitleLg">Blogs</span>
				</div>
				<img
					className="headerImg"
					src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="home_image"
				/>
			</div>
		</>
	);
};

export default Header;
