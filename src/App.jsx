import './app.scss'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parralax from './components/parallax/Parralax';
import Contact from './components/contact/Contact';
import Porfolio from './components/porfolio/Portfolio';



const App = () => {
  return (
    <>
      <section id='Homepage'> 
        <Navbar />
        <Hero />
      </section>
      <section id='About Me'><Parralax type="About Me" /></section>
      <section>About me </section>
      <section id='Skills'> Skills </section>
      <section id='Projects'> <Parralax type="Projects" /> </section>
      <Porfolio/>
      <section id='Contact'><Contact/></section>
    </> 
  );
};


export default App;
