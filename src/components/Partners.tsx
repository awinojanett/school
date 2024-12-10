import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const partners = [
  {
    name: "ICT",
    logo: "/ict.jpg"
  },
  {
    name: "Kanika Hospital",
    logo: "/kanika1.jpg"
  },
  {
    name: "National Industrial Training Authority",
    logo: "/green.jpg"
  },
  {
    name: "Chelimo Medical Training College",
    logo: "/chelimo.jpg"
  }
];

const Partners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + partners.length) % partners.length);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Our Partners</h2>

        {/* Desktop View */}
        <div className="hidden md:flex justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-16 object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 flex justify-center items-center px-4"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-blue-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-blue-900" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentSlide(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;