import React from "react";
import {
	About,
	Experience,
	Footer,
	Header,
	Projects,
	Skills,
} from "./container/index";
import "./App.scss";
import { default as Navbar } from "./components/Navbar/Navbar.jsx";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Header />
			{/* <About /> */}
			<Projects />
			<Skills />
			<Experience />

			<Footer />
		</div>
	);
};

export default App;
