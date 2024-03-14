import './app.scss'
import Navbar from './components/navbar/Navbar';




const App = () => {
  return (
  <>
  <section id='Homepage'> 
    <Navbar/>
  </section>
  <section id='About'>Parallax</section>
  <section>About me </section>
  <section id='Skills'>Parallax</section>
  <section>Skills</section>
  <section id='Projects'>Parallax</section>
  <section> Projects </section>
  <section id='Contact'>Parallax</section>
  <section >Contact Me</section>
  </> 
  )
};

export default App;
