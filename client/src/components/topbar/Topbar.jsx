import "./topbar.css";

const Topbar = () => {
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fa-brands fa-facebook"></i>
				<i className="topIcon fa-brands fa-square-twitter"></i>
				<i className="topIcon fa-brands fa-square-instagram"></i>
				<i className="topIcon fa-brands fa-pinterest"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">HOME</li>
					<li className="topListItem">ABOUT</li>
					<li className="topListItem">WRITE</li>
					<li className="topListItem">CONTACT</li>
				</ul>
			</div>
			<div className="topRight">
				<img
					className="topImg"
					src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile_pic"
				/>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	);
};

export default Topbar;
