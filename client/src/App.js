import Topbar from "./components/topbar/Topbar";
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Edit from "./pages/edit/Edit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Topbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/post/:id" element={<Single />} />
					<Route exact path="/new-post" element={<Create />} />
					<Route exact path="/posts/:id/edit" element={<Edit />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
