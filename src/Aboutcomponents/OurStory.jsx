import { FaArrowRight } from "react-icons/fa";

const OurStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=80"
              alt="Our Story"
              className="rounded-3xl w-full h-[500px] object-cover shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Communities Through Compassion & Action
            </h2>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              Our organization was founded with a simple but powerful vision:
              to create opportunities for individuals and communities facing
              social and economic challenges. What started as a small
              community initiative has grown into a movement dedicated to
              transforming lives through education, healthcare, humanitarian
              assistance, and sustainable development.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              We believe that lasting change happens when people work together.
              Through partnerships, volunteers, and generous supporters, we
              continue to provide hope, empower families, and inspire
              communities to build a brighter future.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h3 className="text-3xl font-bold text-green-700">25K+</h3>
                <p className="text-gray-600 mt-2">
                  Lives Positively Impacted
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-700">150+</h3>
                <p className="text-gray-600 mt-2">
                  Successful Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-700">75+</h3>
                <p className="text-gray-600 mt-2">
                  Communities Reached
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-700">500+</h3>
                <p className="text-gray-600 mt-2">
                  Dedicated Volunteers
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-10 inline-flex items-center gap-3 bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition">
              Learn More
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;