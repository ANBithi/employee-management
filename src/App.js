import "./App.css";
import {
	Container,
} from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Setting from "./Components/Setting";
function App() {
	
	return (
		<Container maxW="container.xl" h="calc(100vh)" p={0}>
		<BrowserRouter>
		<Routes>
		<Route path="/" element={<Login/>}></Route>
		<Route index element={<Home/>}></Route>
		<Route path="setting" element={<Setting/>}></Route>
		</Routes>
		</BrowserRouter>
	   </Container>
	);
}

export default App;
