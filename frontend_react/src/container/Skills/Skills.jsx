import React, { useState, useEffect } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { ReactTooltip } from "react-tooltip";
const Skills = () => {
	const [skills, setSkills] = useState([]);
	useEffect(() => {
		const query = '*[_type == "skills"] | order(rank asc)';
		client.fetch(query).then((data) => {
			setSkills(data);
		});
	}, []);
	return (
		<div className="app__skills">
			<h2 className="head-text">My Skills</h2>
			<motion.div
				className="app__skills-list"
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.8, delayChildren: 0.5 }}
			>
				<h3 className="sub-head-text">Languages</h3>
				<div className="app__skills-list-languages">
					{skills
						.filter((skill) => skill.type.includes("language"))
						.map((item) => (
							<div className="app__skills-item app__flex">
								<div className="app__flex" key={item.name}>
									<img src={urlFor(item.icon).url()} alt={item.name} />
								</div>
								<p className="p-text">{item.name}</p>
							</div>
						))}
				</div>

				<h3 className="sub-head-text">Frameworks</h3>
				<div className="app__skills-list-frameworks">
					{skills
						.filter((skill) => skill.type.includes("framework"))
						.map((item) => (
							<div className="app__skills-item app__flex">
								<div className="app__flex" key={item.name}>
									<img src={urlFor(item.icon).url()} alt={item.name} />
								</div>
								<p className="p-text">{item.name}</p>
							</div>
						))}
				</div>

				<h3 className="sub-head-text">Libraries</h3>
				<div className="app__skills-list-libraries">
					{skills
						.filter((skill) => skill.type.includes("library"))
						.map((item) => (
							<div className="app__skills-item app__flex">
								<div className="app__flex" key={item.name}>
									<img src={urlFor(item.icon).url()} alt={item.name} />
								</div>
								<p className="p-text">{item.name}</p>
							</div>
						))}
				</div>
			</motion.div>
		</div>
	);
};

export default AppWrap(
	MotionWrap(Skills, "app__skills"),
	"skills",
	"app__whitebg"
);
