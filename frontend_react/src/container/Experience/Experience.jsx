import React, { useState, useEffect } from "react";
import "./Experience.scss";
import { motion } from "framer-motion";
import { Chrono } from "react-chrono";
import { format } from "date-fns";
// import { MdOutlineCardTravel } from "react-icons/md";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
const Experience = () => {
	const [experiences, setExperiences] = useState([]);

	useEffect(() => {
		const query = '*[_type == "workExperience"] | order(startDate asc)';

		client.fetch(query).then((data) => {
			setExperiences(
				data.map((experience) => ({
					title: `${format(
						new Date(experience.startDate),
						"MMM, yyyy"
					)} - ${format(new Date(experience.endDate), "MMM, yyyy")}`,
					cardTitle: experience.role,
					cardSubtitle: experience.company,
					cardDetailedText: experience.desc,
				}))
			);
		});
	}, []);

	return (
		<div className="app__experience">
			<motion.div
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
			>
				{/* <p>hello</p> */}
				<h2 className="head-text">Experience</h2>
				<div className="app__experience-timeline">
					<Chrono
						items={experiences}
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
						cardWidth={1000}
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
						disableToolbar={true}
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
