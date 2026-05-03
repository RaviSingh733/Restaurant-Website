import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import Specials from './components/Specials.jsx';
import Gallery from './components/Gallery.jsx';
import Reviews from './components/Reviews.jsx';
import Reservation from './components/Reservation.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-body text-spice">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Specials />
        <Gallery />
        <Reviews />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
