import { Heart, Flame, Ambulance, Plane, Shield } from 'lucide-react';

const collegeCourses = [
  {
    icon: "👨‍⚕️",
    title: "Certificate in Patient Attendant",
    description: "Comprehensive training in patient care and medical assistance."
  },
  {
    icon: "👴",
    title: "Certificate in Disability & Elderly Care",
    description: "Specialized care training for disabled and elderly patients."
  },
  {
    icon: "🚑",
    title: "Certificate in Emergency Medical Response",
    description: "Advanced training in emergency medical situations and response."
  },
  {
    icon: "🚁",
    title: "Certificate in Rescue Technology",
    description: "Technical training in rescue operations and equipment usage."
  },
  {
    icon: "✈️",
    title: "Certificate in Aviation Security",
    description: "Specialized security training for aviation industry personnel."
  }
];

const corporateCourses = [
  {
    icon: Heart,
    title: "Basic Life Support - BLS for Health Providers",
    description: "A course designed by the American Heart Association (AHA) to train its participants to promptly recognize several life-threatening emergencies, give high-quality chest compressions, deliver appropriate ventilations and provide early use of an AED."
  },
  {
    icon: Shield,
    title: "Advanced Cardiovascular Life Support - ACLS",
    description: "Course designed for healthcare professionals who either direct or participate in the management of cardiopulmonary arrest or other cardiovascular emergencies and for personnel in emergency response."
  },
  {
    icon: Flame,
    title: "Fire Safety Course",
    description: "This course is designed for persons who may have to use an extinguisher in offices, shops, hotels and industrial premises."
  },
  {
    icon: Ambulance,
    title: "Pre-Hospital Trauma Life Support",
    description: "The Pre-hospital trauma life support course aims to improve the quality of trauma care and decrease mortality. Designed for EMTs, paramedics, nurses and combat medical technicians."
  },
  {
    icon: Plane,
    title: "Flight Attendant Medical Training",
    description: "This is a comprehensive program that covers all aspects of train & aviation First Aid required by airlines. Practical first aid skills with considerations of time, space, and the limited resources are trained."
  }
];

const Courses = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/behind1.JPG"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start pl-4 sm:pl-12">
            <div className="w-1 h-32 bg-red-500 mr-6" />
            <div>
              <h1 className="text-6xl font-bold text-blue-900">OUR</h1>
              <h1 className="text-6xl font-bold text-blue-900">COURSES</h1>
            </div>
          </div>
        </div>
      </section>

      {/* College Courses Section */}
<section className="relative min-h-screen mb-20 bg-blue-600">
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
    <h1 className="text-6xl font-bold text-white text-center mb-8">
      COLLEGE COURSES
    </h1>

    <div className="text-center text-white mb-12">
      <p className="text-xl">
        Equinox emergency college offers the following courses:
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {collegeCourses.map((course, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-start space-x-4">
            <span className="text-4xl">{course.icon}</span>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{course.title}</h3>
              <p className="text-blue-800">{course.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Corporate Courses Section */}
      <section className="bg-white py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
          <h1 className="text-6xl font-bold text-blue-900 text-center mb-8">
            CORPORATE COURSES
          </h1>

          <div className="text-center text-blue-900 mb-12">
            <p className="text-xl max-w-4xl mx-auto">
              Equinox emergency offers the following courses to corporate clients in line with professional bodies requirement, (DOSH) Directorate of Occupational Healthy and Safety & National Industrial Training Authority (NITA).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corporateCourses.map((course, index) => (
              <div key={index} className="bg-blue-900/90 p-6 rounded-lg hover:bg-blue-800/90 transition-colors">
                <div className="flex items-start space-x-4">
                  {course.icon && <course.icon className="w-8 h-8 text-white" />}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-blue-100">{course.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Enroll in our courses and take the first step towards a rewarding career in emergency medical services.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us to Enroll
          </a>
        </div>
      </section>
    </div>
  );
};

export default Courses;
