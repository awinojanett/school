
import { BookOpen, Stethoscope, FileCheck, Shield } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: "EMS College Training",
    description: "Comprehensive emergency medical service training programs led by experienced professionals."
  },
  {
    icon: Shield,
    title: "Corporate EMS Training",
    description: "Customized emergency response training solutions for corporate environments."
  },
  {
    icon: Stethoscope,
    title: "EMS Equipment Supply",
    description: "High-quality emergency medical equipment and supplies for professionals."
  },
  {
    icon: FileCheck,
    title: "OHS & Fire Audits",
    description: "Thorough occupational health, safety, and fire safety audits for organizations."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive emergency medical training and services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;