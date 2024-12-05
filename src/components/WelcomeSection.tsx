import { Link } from 'react-router-dom';
const WelcomeSection = () => {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left Column - Text */}
<div className="lg:w-1/2 bg-blue-800 text-white p-8 pt-14 pb-14 rounded-lg shadow-lg flex flex-col justify-between">
  <div className="space-y-6">
    <h2 className="text-4xl lg:text-5xl font-bold leading-snug">
      Welcome to Equinox Emergency Training Center
    </h2>
    <p className="text-lg lg:text-xl">
      We are an institution that focuses on pioneering specialized emergency medical care, safety, and rescue training services. 
      We provide training to both EMS and Non-EMS personnel.
    </p>
    <p className="text-lg lg:text-xl"> 
      Our courses are designed to prepare you to assess and provide patient and casualty care 
      under any circumstance, for both corporate and non-corporate sectors.
    </p>
    <p className="text-lg lg:text-xl">
      At Equinox, we train our students to provide first care and preserve life. Our mission is to empower you with the skills to act swiftly, 
      confidently, and effectively in emergency situations.
    </p>
    <p className="text-lg lg:text-xl">
      Our institution offers an all-round education including moral, professional, social, and cultural aspects. We endeavor to develop well-trained manpower 
      equipped with knowledge, skills, and the latest patient and rescue care technology.
    </p>    
  </div>
  <div className="mt-8">
    <Link to="/courses">
      <button className="bg-white text-blue-800 py-3 px-6 rounded-lg font-semibold shadow hover:bg-blue-100 transition">
        Learn More
      </button>
    </Link>
  </div>
</div>

  
            {/* Right Column - Images */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img
                src="/pic1.JPG"
                alt="Graduation"
                className="w-full aspect-square object-cover rounded-lg border border-gray-200 shadow"
              />
              <img
                src="/pic2.JPG"
                alt="Certificates"
                className="w-full aspect-square object-cover rounded-lg border border-gray-200 shadow"
              />
              <img
                src="/pic3.JPG"
                alt="Students"
                className="w-full aspect-square object-cover rounded-lg border border-gray-200 shadow"
              />
              <img
                src="/pic4.JPG"
                alt="Healthcare Training"
                className="w-full aspect-square object-cover rounded-lg border border-gray-200 shadow"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WelcomeSection;
  