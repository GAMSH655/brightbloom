import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const NewsHero = () => {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm mb-6">
          <Link
            to="/"
            className="hover:text-pink-300 transition duration-300"
          >
            Home
          </Link>

          <FaChevronRight className="text-xs" />

          <span className="text-pink-300">News</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          News & Updates
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-gray-200 leading-8 max-w-3xl mx-auto">
          Stay informed about our latest outreach programmes, success stories,
          community events, partnerships, and the impact we're making in the
          lives of girls and young women.
        </p>
      </div>
    </section>
  );
};

export default NewsHero;