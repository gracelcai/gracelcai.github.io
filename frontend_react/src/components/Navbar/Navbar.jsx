import React from "react";
import "./Navbar.scss";
import { images } from "../../constants/index";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [page, setPage] = useState("home");

	const handlePage = (page) => {
		setPage(page);
	};
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.logo} alt="logo" width={200} />
			</div>
			<ul className="app__navbar-links">
				{["home", "projects", "skills", "experience"].map((item) => (
					<li
						className={`app__navbar-links-item app__flex p-text ${
							page === item ? "item-active" : ""
						}`}
						key={`<link-${item}`}
						onClick={() => handlePage(item)}
					>
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
				<li className="app__navbar-links-item app__flex p-text">
					<a
						href="https://drive.google.com/file/d/14arywDJBEF_tHVYfgDPGc9keKOzxePPW/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</a>
				</li>
			</ul>

			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: "easeOut" }}
					>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{[
								"home",
								// "about",
								"projects",
								"skills",
								"experience",
								// "resume",
							].map((item) => (
								<li key={item}>
									<a href={`#${item}`} onClick={() => setToggle(false)}>
										{item}
									</a>
								</li>
							))}
							<li>
								<a
									href="https://drive.google.com/file/d/14arywDJBEF_tHVYfgDPGc9keKOzxePPW/view?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => setToggle(false)}
								>
									Resume
								</a>
							</li>
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
