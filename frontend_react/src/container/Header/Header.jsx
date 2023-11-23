import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

const Header = () => {
	return (
		<div id="home" className="app__header app__flex">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.8, delayChildren: 0.5 }}
				className="app__header-info"
			>
				<div className="app__header-badge">
					<h1>Hello, I'm Grace.</h1>

					<p>
						I am a Computer Science and Physics double major at the University
						of Maryland, College Park. I develop websites and apps to solve
						problems with machine learning.
					</p>
					{/* <div className='tag-cmp app__flex'>
            <p className='p-text'>I'm a Computer Science and Physics student at the University of Maryland, College Park. </p>
            <p className='p-text'>I enjoy developing websites and apps with machine learning.</p>
          </div> */}

					<div className="social-cmp app__flex">
						<a
							href="https://www.linkedin.com/in/gracelcai/"
							target="_blank"
							rel="noopener noreferrer"
						>
							{/* <img src={images.linkedin}/> */}
							LinkedIn
						</a>
						<a
							href="https://github.com/gracelcai"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.8, delayChildren: 0.5 }}
				className="app__header-img"
			>
				<img src={images.profile2} alt="profile_bg" />
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					src={images.circle}
					alt="profile_circle"
					className="overlay_circle"
				/>
			</motion.div>

			{/* <motion.div variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
      >
        {[images.flutter, images.react, images.tensorflow].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle'/>
          </div>
        ))}

      </motion.div> */}
		</div>
	);
};

export default AppWrap(Header, "home");
