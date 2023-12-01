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
	// const [items, setItems] = useState([]);
	const items = [
		{
			title: "Jan 2022 - Nov 2022",
			cardTitle: "Social Media Manager",
			cardSubtitle: "Bay View Golf Club - Milpitas, CA",
			cardDetailedText:
				"Filmed videos and took photos for social media; grew following to 1,000 and post views to 5,000; advertised weekly golf programs, events, & product deals; assisted customers during events and tournaments.",
		},
		{
			title: "Jun 2022 - Dec 2022",
			cardTitle: "Entrepreneur in Residence",
			cardSubtitle: "Jetson - Remote",
			cardDetailedText:
				"Built online teen Web3 community and managed website and social media; coordinated virtual teen summit speaker event with 200+ attendees and facilitated interviews with leaders in the Web3 industry",
		},
		{
			title: "Feb 2023 - Apr 2023",
			cardTitle: "Team Member",
			cardSubtitle: "Whole Foods - Los Altos, CA",
			cardDetailedText:
				"Restocked and maintained Whole Body products; set up decorations and displays for holidays; assisted customers in finding optimal body care products and supplements",
		},
		{
			title: "Jun 2023 - Aug 2023",
			cardTitle: "Instructor",
			cardSubtitle: "Code For Fun - Sunnyvale, CA",
			cardDetailedText:
				"Taught 120+ elementary school students coding in Scratch through summer camps; provided students one-on-one guidance in brainstorming, designing, and coding their own games; fostered a positive and inclusive learning environment",
		},
	];
	useEffect(() => {
		const query = '*[_type == "workExperience"] | order(startDate asc)';

		client.fetch(query).then((data) => {
			console.log(data);
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
			console.log(experiences);
		});
	}, [experiences]);

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
