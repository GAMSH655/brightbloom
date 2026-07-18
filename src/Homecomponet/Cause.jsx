import {
  FaGraduationCap,
  FaHeartbeat,
  FaHandsHelping,
  FaLeaf,
  FaFemale,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const causes = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    title: "Education",
    description:
      "Providing quality education, scholarships, school supplies, and learning opportunities for children and young adults.",
  },
  {
    id: 2,
    icon: <FaHeartbeat />,
    title: "Healthcare",
    description:
      "Supporting communities through medical outreach, health awareness campaigns, and access to essential healthcare services.",
  },
  {
    id: 3,
    icon: <FaHandsHelping />,
    title: "Humanitarian Aid",
    description:
      "Delivering food, clean water, emergency relief, and support to vulnerable families during difficult times.",
  },
  {
    id: 4,
    icon: <FaLeaf />,
    title: "Environment",
    description:
      "Promoting environmental sustainability through tree planting, sanitation, and climate awareness initiatives.",
  },
  {
    id: 5,
    icon: <FaFemale />,
    title: "Women Empowerment",
    description:
      "Helping women gain financial independence through skills training, mentorship, and entrepreneurship support.",
  },
  {
    id: 6,
    icon: <FaUsers />,
    title: "Youth Development",
    description:
      "Preparing young people for success through leadership development, vocational training, and mentorship programs.",
  },
];

const Causes = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            What We Do
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Our Causes
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We believe sustainable change begins by addressing the most pressing
            needs of our communities. Our programs focus on creating lasting
            impact through education, healthcare, empowerment, and humanitarian
            support.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <div
              key={cause.id}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-green-100 text-green-700 flex items-center justify-center text-3xl group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
                {cause.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {cause.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 leading-7">
                {cause.description}
              </p>

              {/* Button */}
              <button className="mt-6 flex items-center gap-2 text-green-700 font-semibold group-hover:gap-4 transition-all">
                Learn More
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Causes;