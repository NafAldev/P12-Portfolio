import './skillCard.scss';

const SkillCard = ( {title,initials, iconUrl, isActive, onClick}) => {
  return (
    <div className={`skills-card ${isActive ?"active" : ""}`} onClick={() => onClick()}>
        <div className='skill-icon'>

            <img src={iconUrl} alt={title} />
    
        </div>

        <span>{title}</span>
        <span className='icon-initials'>{initials}</span>
        
    </div>
  )
}

export default SkillCard
