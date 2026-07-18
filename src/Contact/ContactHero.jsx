import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const ContactHero = () => {
  return (
    <section
      className="relative h-[55vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 text-center text-white px-6">
        <div className="flex items-center justify-center gap-2 text-sm">
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>

          <FaChevronRight />

          <span className="text-green-400">Contact</span>
        </div>

        <h1 className="mt-5 text-5xl md:text-6xl font-bold">
          Contact Us
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
          We'd love to hear from you. Reach out to learn more about our
          projects, partnerships, volunteering opportunities, or donations.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;