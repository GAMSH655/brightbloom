import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const AboutHero = () => {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
          <Link
            to="/"
            className="hover:text-green-400 transition"
          >
            Home
          </Link>

          <FaChevronRight className="text-xs" />

          <span className="text-green-400">
            About Us
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold">
          About Us
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-8">
          We are committed to transforming lives through education,
          healthcare, humanitarian assistance, and sustainable
          community development.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;