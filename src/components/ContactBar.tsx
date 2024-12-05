
import { Mail, Phone, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactBar = () => {
  return (
    <div className="bg-blue-600 text-white py-1 sm:py-2 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="tel:+15551234567" className="flex items-center hover:text-blue-100 transition-colors">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="sm:hidden">Call Us</span>
              <span className="hidden sm:inline">0740495954</span>
            </a>
            <a href="mailto:info@equinoxemergency.com" className="flex items-center hover:text-blue-100 transition-colors">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="sm:hidden">Email</span>
              <span className="hidden sm:inline">info@equinoxemergency.co.ke</span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Mon - Fri: 8:00 AM - 6:00 PM</span>
              <span className="sm:hidden">8AM - 6PM</span>
            </div>
            <div className="flex items-center gap-2 border-l border-white/20 pl-2 sm:pl-4">
              <a href="#" className="hover:text-blue-100 transition-colors">
                <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
              </a>
              <a href="#" className="hover:text-blue-100 transition-colors">
                <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
              </a>
              <a href="#" className="hover:text-blue-100 transition-colors">
                <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
              </a>
              <a href="#" className="hover:text-blue-100 transition-colors">
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;