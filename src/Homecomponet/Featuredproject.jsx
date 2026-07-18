import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Community Healthcare Outreach",
    location: "Lagos, Nigeria",
    category: "Healthcare",
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
    description:
      "Providing free medical consultations, medications, and health education to underserved communities.",
  },
  {
    id: 2,
    title: "Back To School Initiative",
    location: "Ibadan, Nigeria",
    category: "Education",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    description:
      "Supplying learning materials, uniforms, and scholarships to children from low-income families.",
  },
  {
    id: 3,
    title: "Clean Water Project",
    location: "Kano, Nigeria",
    category: "Water & Sanitation",
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    description:
      "Constructing boreholes and providing access to safe drinking water in rural communities.",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Featured Projects
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
              Making a Difference,
              <br />
              One Community at a Time
            </h2>

            <p className="mt-5 max-w-2xl text-gray-600 text-lg leading-8">
              Discover some of our recent projects dedicated to improving lives,
              empowering communities, and creating sustainable development.
            </p>
          </div>

          <button className="hidden lg:flex items-center gap-2 text-green-700 font-semibold hover:gap-4 transition-all">
            View All Projects
            <FaArrowRight />
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <span className="absolute top-5 left-5 bg-white px-4 py-2 rounded-full text-sm font-semibold text-green-700">
                  {project.category}
                </span>

                <span
                  className={`absolute top-5 right-5 px-4 py-2 rounded-full text-sm font-semibold ${
                    project.status === "Ongoing"
                      ? "bg-green-600 text-white"
                      : "bg-gray-900 text-white"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <FaMapMarkerAlt className="text-green-600" />
                  {project.location}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {project.description}
                </p>

                <button className="mt-7 flex items-center gap-2 text-green-700 font-semibold hover:gap-4 transition-all">
                  Learn More
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-12 text-center lg:hidden">
          <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;