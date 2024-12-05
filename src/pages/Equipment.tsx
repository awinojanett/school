import { Stethoscope, Flame, HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Equipment = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/behind.JPG"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start pl-4 sm:pl-12">
            <div className="w-1 h-32 bg-red-500 mr-6" />
            <div>
              <h1 className="text-6xl font-bold text-blue-900">EQUIPMENT</h1>
              <h1 className="text-6xl font-bold text-blue-900">SUPPLY</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">We supply the following equipment:</h2>

          <div className="space-y-16">
            {/* Hospital/Medical Equipment */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <Stethoscope className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Hospital / Medical Equipment Supply</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  We supply a variety of medical equipment ranging from dental, hollowware, hospital 
                  furniture, hospital linen, laboratory products, maternity, gynecology & nursing, non-pharmaceuticals, 
                  oxygen products, theatre equipment, vital/diagnostic equipment and walking aids.
                </p>
              </div>
            </div>

            {/* Fire Equipment */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <Flame className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Fire Equipment Supply</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  When it comes to something as important as the protection of people, assets and 
                  ultimately your brand, a 'one size fits all' approach is never good enough. That is why we 
                  tailor-fit all of our fire safety and security services packages exactly to our individual 
                  customer's requirements.
                </p>
              </div>
            </div>

            {/* First Aid Equipment */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <HeartPulse className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">First Aid Equipment Supply</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  First aid kit is multi-purpose for both vehicle, home, and sports. Some of the contents 
                  include digital thermometer, reusable ice pack, stainless trauma scissors, numerous 
                  bandages, first aid adhesive tape, and even a CPR mask.
                </p>
              </div>
            </div>
          </div>

          {/* Purchase Button */}
          <div className="mt-16 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
            >
              Purchase Equipment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Decorative Dots */}
        <div className="absolute right-0 top-1/4 w-24 h-24 grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
          ))}
        </div>
        <div className="absolute left-0 bottom-1/4 w-24 h-24 grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Equipment;
