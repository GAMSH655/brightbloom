import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0B1D17] bg-red-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* NGO Info */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">
                N
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  NGO Foundation
                </h2>

                <p className="text-sm text-gray-400">
                  Together We Create Change
                </p>
              </div>
            </Link>

            <p className="mt-6 leading-8">
              We are committed to improving lives through education,
              healthcare, humanitarian support, and sustainable community
              development.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 transition flex items-center justify-center"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-green-400 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="hover:text-green-400 transition"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/news" className="hover:text-green-400 transition">
                  News
                </Link>
              </li>

              <li>
                <Link
                  to="/volunteer"
                  className="hover:text-green-400 transition"
                >
                  Volunteer
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-green-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Our Programs
            </h3>

            <ul className="space-y-4">
              <li>Education</li>
              <li>Healthcare</li>
              <li>Humanitarian Aid</li>
              <li>Women Empowerment</li>
              <li>Youth Development</li>
              <li>Environmental Sustainability</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Us
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-green-400 mt-1" />
                <p>
                  123 NGO Street,
                  <br />
                  Lagos, Nigeria
                </p>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="text-green-400 mt-1" />
                <p>+234 800 000 0000</p>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-green-400 mt-1" />
                <p>info@ngofoundation.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} NGO Foundation. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link
              to="/privacy-policy"
              className="hover:text-green-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-green-400 transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;