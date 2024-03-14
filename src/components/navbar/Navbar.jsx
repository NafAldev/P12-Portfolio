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
            <FontAwesomeIcon icon={faGithub} className='navbar-icon' />
            <FontAwesomeIcon icon={faLinkedin} className='navbar-icon' /> 
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
