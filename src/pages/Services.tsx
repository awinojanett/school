
import { GraduationCap, Building2, ClipboardCheck, Stethoscope, Shield, Leaf, AlertTriangle, Volume2 } from 'lucide-react';

const mainServices = [
  {
    icon: GraduationCap,
    title: "EMS College Training",
    description: "We train students on Emergency Medical Services provision, Rescue and Patient Care Courses. Students earn internationally recognized certificates."
  },
  {
    icon: Building2,
    title: "Corporate EMS Training",
    description: "We train EMS courses to corporate clients to ensure compliance with DOSH and NITA requirements."
  },
  {
    icon: ClipboardCheck,
    title: "Statutory Audits",
    description: "We offer OHS and fire audits as established by law. We assess safety risks and map out mitigation plans."
  },
  {
    icon: Stethoscope,
    title: "EMS Equipment Supply",
    description: "We supply, install and maintain EMS equipment including hospital medical, fire rescue, and first aid equipment."
  }
];

const Services = () => {
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
              <h1 className="text-6xl font-bold text-blue-900">OUR</h1>
              <h1 className="text-6xl font-bold text-blue-900">SERVICES</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
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

      {/* Statutory Audits Section */}
      <section className="mb-20">
        {/* Hero Banner */}
        <div className="relative h-[300px] mb-16">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="Statutory Audits"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl font-bold text-white tracking-wider">STATUTORY AUDITS</h2>
          </div>
        </div>

        {/* Audit Types Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Health and Safety Audit */}
            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Health and Safety Audit</h3>
              </div>
              <p className="text-blue-100">
                Undertaking an OHS Audit will assist your business evaluate how effectively your safety 
                processes have been implemented. OHS audit program will assist a business to continue to 
                improve its safety performance, by improving the management of foreseeable workplace OHS 
                hazards.
              </p>
            </div>

            {/* Environmental Audits */}
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-green-500 p-3 rounded-lg">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Environmental Audits</h3>
              </div>
              <p className="text-gray-600">
                An environmental audit is a type of evaluation intended to identify environmental compliance 
                and management system implementation gaps, along with related corrective actions.
              </p>
            </div>

            {/* Fire Safety Audit */}
            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-red-500 p-3 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Fire Safety Audit</h3>
              </div>
              <p className="text-blue-100">
                An essential element of any fire safety management system is the audit process. The 
                performance of key elements of a fire safety management system should be periodically 
                audited to ensure continual improvement in the management of fire safety.
              </p>
            </div>

            {/* Post Covid-19 Audits */}
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-red-500 p-3 rounded-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Post Covid-19 Audits</h3>
              </div>
              <p className="text-gray-600">
                The consequences of the Covid-19 pandemic on organization behavior, culture and governance 
                are complex and have resulted in challenges for management. This assessment discovers the 
                associated challenges and coping mechanisms.
              </p>
            </div>

            {/* Noise Assessment Audit */}
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Volume2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Noise Assessment Audit</h3>
              </div>
              <p className="text-gray-600">
                Noise audit helps company to meet OSHA standards through creation of a safer, more pleasant 
                and productive environment for your staff and improves your business image. The process allows 
                you to asses your present position and diagnose any noise problems you need to address.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to learn more about our services and how we can help you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;