import "./App.css";
import { Container } from "@chakra-ui/react";
import Layout from "./Components/NavBar/Layout";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Setting from "./Components/Setting";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import ManageProfile from "./Components/Employee/ManageProfile";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProtectedRoutes />}>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="settings" element={<Setting />} />
						<Route path="manage-profile" element={<ManageProfile />} />

						{/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
					</Route>
				</Route>
				<Route path="login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}


export default App;
