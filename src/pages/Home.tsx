
import Hero from '../components/Hero';
import Services from '../components/Services';
import WelcomeSection from '../components/WelcomeSection';
import Courses from '../components/Courses';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Accreditation from '../components/Accreditation';
import Community from '../components/Community';
import Partners from '../components/Partners';

const Home = () => {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <Courses />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Accreditation />
      <Community />
      <Partners />
    </>
  );
};

export default Home;