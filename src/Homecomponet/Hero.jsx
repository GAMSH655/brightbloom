import { FaArrowRight, FaHandsHelping } from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500 px-4 py-2 rounded-full text-green-300 mb-6">
            <FaHandsHelping />
            <span className="text-sm font-medium">
              Together We Can Make a Difference
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Creating Hope,
            <br />
            <span className="text-green-400">
              Changing Lives.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-gray-200 text-lg md:text-xl leading-8 max-w-2xl">
            We are committed to empowering communities through education,
            healthcare, humanitarian support, and sustainable development.
            Together, we can build a brighter future for everyone.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-full text-white font-semibold flex items-center gap-3">
              Donate Now
              <FaArrowRight />
            </button>

            <button className="border border-white hover:bg-white hover:text-gray-900 transition px-8 py-4 rounded-full text-white font-semibold">
              Learn More
            </button>
          </div>

          {/* Statistics */}
          <div className="mt-16 mb-5 grid grid-cols-2 md:grid-cols-4 gap-5">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h2 className="text-3xl font-bold text-white">10K+</h2>
              <p className="text-gray-300 mt-2">Lives Impacted</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h2 className="text-3xl font-bold text-white">120+</h2>
              <p className="text-gray-300 mt-2">Projects</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h2 className="text-3xl font-bold text-white">85+</h2>
              <p className="text-gray-300 mt-2">Communities</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h2 className="text-3xl font-bold text-white">500+</h2>
              <p className="text-gray-300 mt-2">Volunteers</p>
            </div>

          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;