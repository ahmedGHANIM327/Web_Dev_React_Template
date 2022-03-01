import About from './AboutUS/About';
import './App.css';
import Contact from './Contact/Contact';
import FAQ from './FAQ/FAQ';
import Features from './Features/Features';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Pricing from './Pricing/Pricing';
import Numbers from './Records/Numbers';
import Reviews from './Reviews/Reviews';

function App() {
  return (
    <div >
      <Home />
      <Numbers />
      <About />
      <Features />
      <Pricing />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
