import './skills.scss';
import {data} from '../dataProjects/icon.json';
import SkillCard from './SkillCard'
import { useState } from 'react';
import SkillsInfo from './SkillsInfoCard';
function Skills() {

  const [selectedSkill, setSelectedSkill] = useState(data[0])

  const handleSelectedSkill = (datas) =>{
    setSelectedSkill(datas)
  } 

  return (
    <> 
    <div className='skills-container'> 
      <div className='wrapper'>
        <h1>My Skills</h1>

        <div className='skills-content'>
            <div className='skills'>
                {data.map((item) => (
                    <SkillCard 
                    key={item.title} 
                    iconUrl={item.icon} 
                    initials = {item.initials}
                    title ={item.title} 
                    isActive={selectedSkill.title === item.title} 
                    onClick={() => {
                      handleSelectedSkill(item)
                    }} />
                ))}
            </div>
            <div className='skills-info' >
                  <SkillsInfo heading = {selectedSkill.title} skills={selectedSkill.skills}/>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Skills
