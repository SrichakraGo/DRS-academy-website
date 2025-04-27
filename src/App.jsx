import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Faculty from './components/Faculty';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Faculty />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
