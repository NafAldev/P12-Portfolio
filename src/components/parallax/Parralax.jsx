import { useRef } from 'react';
import './parralax.scss'
import {motion, useScroll, useTransform} from 'framer-motion'

const Parralax = ({type}) => {
  const ref =useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
    className="parallax"
    ref={ref}
    style={{
      background:
        type === "About Me"
          ? "linear-gradient(180deg, #111132, #0c0c1d)"
          : "linear-gradient(180deg, #111132, #505064)",
    }}
  >
      <motion.h1 style={{y :yText}}>{type ==="About Me" ? "Who i am ?" : "What i did?"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{y:yBg, backgroundImage: `url(${
        type === "About Me" ?"/parralex/planets.png" : "/parralex/sun.png"
        })`,
      }}>
      </motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  )
}

export default Parralax
