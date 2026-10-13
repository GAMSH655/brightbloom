import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "../images/Logo.jpg"
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  // { name: "Projects", path: "/projects" },
  { name: "News", path: "/news" },
  // { name: "Volunteer", path: "/volunteer" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
           <img src={Logo} alt="NGO Foundation Logo" className="w-20 h-20" />
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-green-700"
                      : "text-gray-700 hover:text-green-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Donate Button */}
          <div className="hidden lg:block">
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition">
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-800"
          >
            {menuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t px-6 py-5">

          <div className="flex flex-col gap-5">

            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive
                      ? "text-green-700"
                      : "text-gray-700 hover:text-green-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <button className="mt-3 bg-green-700 hover:bg-green-800 text-white py-3 rounded-full font-semibold transition">
              Donate Now
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;