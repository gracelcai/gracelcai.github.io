import React, { useState, useEffect } from "react";
import "./Experience.scss";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { Chrono } from "react-chrono";
import moment from "moment";
import { format } from "date-fns";
import { MdOutlineCardTravel } from "react-icons/md";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
const Experience = () => {
	const [experiences, setExperiences] = useState([]);
	// const [items, setItems] = useState([])

	useEffect(() => {
		const query = '*[_type == "workExperience"] | order(startDate asc)';

		client.fetch(query).then((data) => {
			setExperiences(data);
		});
	}, []);

	const items = experiences.map((experience) => ({
		title: `${format(new Date(experience.startDate), "MMM, yyyy")} - ${format(
			new Date(experience.endDate),
			"MMM, yyyy"
		)}`,
		cardTitle: experience.role,
		cardSubtitle: experience.company,
		cardDetailedText: experience.desc,
		// date: experience.startDate,
	}));
	return (
		<div className="app__experience">
			<h2 className="head-text">Experience</h2>

			<motion.div
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
			>
				{/* <p>hello</p> */}
				<div className="app__experience-timeline">
					<Chrono
						items={items}
						mode="VERTICAL_ALTERNATING"
						theme={{
							primary: "#948BFC",
							secondary: "none",
							cardBgColor: "white",
							titleColor: "black",
							titleColorActive: "black",
						}}
						// enableBreakPoint
						// verticalBreakPoint={400}
						hideControls={true}
						disableClickOnCircle={true}
						cardWidth={800}
						fontSizes={{
							cardSubtitle: "0.85rem",
							cardText: "0.8rem",
							cardTitle: "1rem",
							title: "1rem",
						}}
						classNames={{
							card: "card",
							cardMedia: "card-media",
							cardSubTitle: "card-subtitle",
							cardText: "card-text",
							cardTitle: "card-title",
							controls: "controls",
							title: "title",
						}}
					>
						{/* <div className="chrono-icons">
							<MdOutlineCardTravel />
							<MdOutlineCardTravel />
							<MdOutlineCardTravel />
						</div> */}
					</Chrono>
				</div>
			</motion.div>
		</div>
	);
};
export default AppWrap(
	MotionWrap(Experience, "app__experience"),
	"experience",
	"app__primarybg"
);
