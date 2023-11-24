import React, { useState, useEffect } from "react";
import "./Experience.scss";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { Chrono } from "react-chrono";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
const Experience = () => {
	const [experiences, setExperiences] = useState([]);
	// const [items, setItems] = useState([])

	useEffect(() => {
		const query = '*[_type == "workExperience"]';

		client.fetch(query).then((data) => {
			setExperiences(data);
		});
	}, []);

	const items = experiences.map((experience) => ({
		title: `${experience.startDate} - ${experience.endDate}`,
		cardTitle: experience.role,
		cardSubtitle: experience.company,
		cardDetailedText: experience.desc,
		// date: experience.startDate,
	}));
	return (
		<div className="app__skills-exp">
			<h2 className="head-text">Experience</h2>
			{experiences.map((experience) => (
				<motion.div className="app__skills-exp-item" key={experience.startDate}>
					<div className="app__skills-exp-year">
						<p className="bold-text">{experience.startDate}</p>
					</div>
					<div style={{ width: "500px", height: "950px" }}>
						<Chrono items={items} mode="VERTICAL_ALTERNATING" />
					</div>
					{/* <motion.div className="app__skills-exp-works">
						{experience.works.map((work) => (
							<>
								<motion.div
									whileInView={{ opacity: [0, 1] }}
									transition={{ duration: 0.5 }}
									className="app__skills-exp-work"
									data-tip
									data-for={work.name}
									key={work.name}
								>
									<h4 className="bold-text">{work.role}</h4>
									<p className="p-text">{work.company}</p>
								</motion.div>
								<Tooltip
									id={work.role}
									effect="solid"
									arrowColor="#fff"
									className="skills-tooltip"
								>
									{work.desc}
								</Tooltip>
							</>
						))}
					</motion.div> */}
				</motion.div>
			))}
		</div>
	);
};

export default AppWrap(Experience, "experience");
