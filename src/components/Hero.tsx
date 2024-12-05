import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "/background1.JPG",
    title: "Excellence in Emergency Medical Training",
    description: "Pioneering specialized emergency medical care training for EMS and non-EMS personnel"
  },
  {
    image: "/equipment.jpeg",
    title: "Supply of medical and safety equipment",
    description: "Our products are designed to meet industry standards, offering reliable solutions for healthcare, emergency response, and workplace safety"  
  },
  {
    image: "/fire.jpeg",
    title: "Statutory Audits",
    description: "Conducting comprehensive statutory audits to ensure compliance with legal and regulatory requirements."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[calc(100vh-8rem)] sm:h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white px-4 sm:px-6 max-w-4xl">
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4">{slide.title}</h1>
              <p className="text-base sm:text-xl md:text-2xl mb-4 sm:mb-8">{slide.description}</p>
              <a
                href="/contact"
                className="inline-block bg-red-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md text-sm sm:text-lg font-medium hover:bg-red-700 transition-colors"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-1 sm:p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-1 sm:p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;