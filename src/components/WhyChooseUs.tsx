
import { Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    "Qualified & experienced Tutors",
    "Well equipped & maintained skill labs",
    "Conducive learning Environment",
    "Accredited & approved learning Center",
    "Indoor and outside door activities",
    "Academic Tours and Trips",
    "Free WI-Fi"
  ];

  const courses = [
    {
      icon: "👴",
      title: "Certificate in Disability & Elderly Care"
    },
    {
      icon: "🚑",
      title: "Certificate in Emergency Medical Response"
    },
    {
      icon: "🚁",
      title: "Certificate in Rescue Technology"
    },
    {
      icon: "✈️",
      title: "Certificate in Aviation Security"
    },
    {
      icon: "🚑",
      title: "Certificate in Emergency Vehicle Operation"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Courses */}
          <div className="bg-blue-800 p-8 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-8">Other Courses Offered</h2>
            <div className="space-y-6">
              {courses.map((course, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="text-2xl">{course.icon}</span>
                  <span className="text-lg">{course.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-blue-800">WHY CHOOSE US</h2>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-100 p-3 rounded">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;