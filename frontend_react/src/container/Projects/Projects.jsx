import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import "./Projects.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [projects, setProjects] = useState([]);
	const [filterProjects, setFilterProjects] = useState([]);
	useEffect(() => {
		const query = '*[_type == "projects"]';
		client.fetch(query).then((data) => {
			setProjects(data);
			setFilterProjects(data);
		});
	}, []);

	const handleProjectsFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);
			if (item === "All") {
				setFilterProjects(projects);
			} else {
				setFilterProjects(
					projects.filter((project) => project.tags.includes(item))
				);
			}
		}, 500);
	};
	return (
		<div className="app__projects">
			<h2 className="head-text">
				My <span>Projects</span>
			</h2>
			<div className="app__projects-filter">
				{["Web App", "Mobile App", "All"].map((item, index) => (
					<div
						key={index}
						onClick={() => handleProjectsFilter(item)}
						className={`app__projects-filter-item app__flex p-text ${
							activeFilter === item ? "item-active" : ""
						}`}
					>
						{item}
					</div>
				))}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__projects-portfolio"
			>
				{filterProjects.map((project, index) => (
					<div className="app__projects-item app__flex" key={index}>
						<div className="app__projects-img app__flex">
							<img src={urlFor(project.image).url()} alt={project.name} />
							<motion.div
								className="app__projects-hover app__flex"
								whileHover={{ opacity: [0, 1] }}
								transition={{
									duration: 0.25,
									ease: "easeInOut",
									staggerChildren: 0.5,
								}}
							>
								<a
									href={project.projectLink}
									target="_blank"
									rel="noopener noreferer"
								>
									<motion.div
										className="app__flex"
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{
											duration: 0.25,
										}}
									>
										<AiFillEye />
									</motion.div>
								</a>
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferer"
								>
									<motion.div
										className="app__flex"
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{
											duration: 0.25,
										}}
									>
										<AiFillGithub />
									</motion.div>
								</a>
							</motion.div>
						</div>

						<div className="app__projects-content app__flex">
							<h4 className="bold-text"> {project.name} </h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{" "}
								{project.description}
							</p>

							<div className="app__projects-tag app__flex">
								{project.tags && project.tags.length > 0 && (
									<p className="p-text">{project.tags[0]}</p>
								)}
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrap(Projects, "projects");
