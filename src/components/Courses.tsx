import { FaLaptop, FaUserMd, FaTools, FaFireExtinguisher, FaFirstAid, FaProjectDiagram, FaSmileBeam } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineFactory, MdOutlineMedicalServices } from "react-icons/md";

const CoursesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">Our Courses</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          We offer a wide range of professional and technical courses tailored to meet the needs of individuals and organizations. 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - College Courses */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">College Courses</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <FaUserMd className="text-blue-700 mr-3" /> Home Care
              </li>
              <li className="flex items-center">
                <FaUserMd className="text-blue-700 mr-3" /> Patient Attendant Course
              </li>
              <li className="flex items-center">
                <FaSmileBeam className="text-blue-700 mr-3" /> Counselling and Psychology
              </li>
              <li className="flex items-center">
                <FaTools className="text-blue-700 mr-3" /> Housekeeping and Accommodation
              </li>
              <li className="flex items-center">
                <FaLaptop className="text-blue-700 mr-3" /> Computer Skills
              </li>
              <li className="flex items-center">
                <FaSmileBeam className="text-blue-700 mr-3" /> Hospitality Management
              </li>
              <li className="flex items-center">
                <FaLaptop className="text-blue-700 mr-3" /> Journalism and Media Studies
              </li>
              <li className="flex items-center">
                <FaProjectDiagram className="text-blue-700 mr-3" /> Project Management
              </li>
              <li className="flex items-center">
                <FaTools className="text-blue-700 mr-3" /> Laundry Services
              </li>
              <li className="flex items-center">
                <FaLaptop className="text-blue-700 mr-3" /> Marketing and Advertising
              </li>
              <li className="flex items-center">
                <FaSmileBeam className="text-blue-700 mr-3" /> Cosmetology
              </li>
            </ul>
          </div>

          {/* Column 2 - Corporate Courses */}
          <div className="p-6 bg-blue-800 text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Corporate Courses</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <FaFirstAid className="mr-3" /> First Aid Training
              </li>
              <li className="flex items-center">
                <FaFireExtinguisher className="mr-3" /> Fire Safety Training
              </li>
              <li className="flex items-center">
                <AiOutlineSafetyCertificate className="mr-3" /> Basic Life Support
              </li>
              <li className="flex items-center">
                <AiOutlineSafetyCertificate className="mr-3" /> Advanced Cardiac Life Support
              </li>
              <li className="flex items-center">
                <AiOutlineSafetyCertificate className="mr-3" /> Health and Safety Training
              </li>
            </ul>
          </div>

          {/* Column 3 - Other Services */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Other Services</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <MdOutlineFactory className="text-blue-700 mr-3" /> Factory Audit
              </li>
              <li className="flex items-center">
                <FaFireExtinguisher className="text-blue-700 mr-3" /> Fire Safety Audit
              </li>
              <li className="flex items-center">
                <MdOutlineMedicalServices className="text-blue-700 mr-3" /> Sale of Medical and Safety Equipment
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
