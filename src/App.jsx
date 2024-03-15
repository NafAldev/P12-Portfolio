import './app.scss'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';




const App = () => {
  return (
  <>
  <section id='Homepage'> 
    <Navbar/>
    <Hero/>
  </section>
  <section id='About Me'>Parallax</section>
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
