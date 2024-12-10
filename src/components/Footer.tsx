import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Equinox Emergency Column */}
          <div>
            <div className="flex items-center mb-4">
              <span className="ml-2 text-xl font-bold">Equinox Emergency <br />Training Center</span>
            </div>
            <p className="text-gray-400 mb-4">Experts train the brave</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#courses" className="text-gray-400 hover:text-white transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-gray-400 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Litein Campus</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Brail Plaza, 2nd Floor</li>
              <li>Faulu Bank off Hospital Road</li>
              <li>Phone: 0724 238 805</li>
              <li>Email: equinoxemergency@gmail.com</li>
            </ul>
          </div>

          {/* Kisumu Campus Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kisumu Campus</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Paul Mark Building</li>
              <li>Kondele-Kibos Road</li>
              <li>Phone: 0724 238 805</li>
              <li>Email: equinoxemergency@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Equinox Emergency Training Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
