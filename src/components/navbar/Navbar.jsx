import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {motion} from "framer-motion";

import './navbar.scss';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
      <motion.div className='wrapper' 
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:0.5}}> 
        <span> Naf Dev</span>
        <div className='social'>
        <a href='https://github.com/NafAldev' >
          <FontAwesomeIcon icon={faGithub} className='navbar-icon'/>
        </a>
        <a href='#'>
          <FontAwesomeIcon icon={faLinkedin} className='navbar-icon' /> 
        </a>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
