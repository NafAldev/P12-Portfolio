import items from '../dataProjects/projects.json'
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.cover} alt="visuel du site " />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <h4>{item.description}</h4>
              <p>{item.competence}</p>
              <div className='icons-tech'>
                {item.icons.map((icon, index) => (
                  <img key={index} src={icon} alt={"icons"} />
                ))}
             </div>
             <a href={item.lien}>
                Lien du site 
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  const Portfolio = () => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Projects</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
  };
  
  export default Portfolio;