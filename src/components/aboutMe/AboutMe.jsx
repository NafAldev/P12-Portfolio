import { useRef } from "react";
import "./aboutMe.scss"; 
import { motion } from "framer-motion";
import ProfilCard from "./ProfilCard";

const variants = {
  initial: {
    x: -300,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const AboutMe = () => {
  const ref = useRef();

  return (
    <>
    <motion.div
      className="animation-about"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"} 
    >
      <motion.div className="title-container" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "RebeccaPurple" }}>About</motion.b>{" "}
            Me
          </h1>
        </div>
      </motion.div>
      <motion.div className="profil-container" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
        <ProfilCard/>
        </motion.div>
      </motion.div>
    </motion.div>
    </>
  );
};

export default AboutMe;
