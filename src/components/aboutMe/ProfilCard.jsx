import './profilCard.scss'

function ProfilCard() {
  return (
    <div className='card'>
        <div className='card-container'>
            <div className='card-face front-face'>
                <img src="../img/avatar.png" alt="avatar" />
                <h2>Web Developer</h2>
            </div>
            <div className='card-face back-face'>
                <div className='container-about'>
                    <h2>About Me</h2>
                    <p>Passionné par le développement depuis quelques années,
                        j&apos;ai entamé cette reconversion professionnelle
                        en autodidacte avant de rejoindre OpenClassrooms pour 
                        cette nouvelle aventure !
                    </p>
                </div>

            </div>

        </div>
        
      
    </div>
  )
}

export default ProfilCard
