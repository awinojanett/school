
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactBar from './components/ContactBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Courses from './pages/Courses';
import Equipment from './pages/Equipment';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ContactBar />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;