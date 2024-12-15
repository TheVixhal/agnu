import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Events from './components/Events';
import Team from './components/Team';
import Shop from './components/shop/Shop';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Events />
      <Team />
      <Shop />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
