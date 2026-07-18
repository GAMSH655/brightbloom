import {
  FaHandsHelping,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaLeaf,
  FaBalanceScale,
} from "react-icons/fa";

const values = [
  {
    id: 1,
    icon: <FaHandsHelping />,
    title: "Compassion",
    description:
      "We serve every individual with empathy, respect, and genuine care, ensuring that dignity remains at the heart of everything we do.",
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Integrity",
    description:
      "We are committed to honesty, transparency, and accountability in all our actions and decisions.",
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: "Collaboration",
    description:
      "We believe lasting impact is achieved through partnerships, teamwork, and active community participation.",
  },
  {
    id: 4,
    icon: <FaLightbulb />,
    title: "Innovation",
    description:
      "We embrace creative ideas and sustainable solutions that address today's challenges while preparing for tomorrow.",
  },
  {
    id: 5,
    icon: <FaLeaf />,
    title: "Sustainability",
    description:
      "Our programs are designed to create long-term, self-sustaining improvements within communities.",
  },
  {
    id: 6,
    icon: <FaBalanceScale />,
    title: "Equality",
    description:
      "We believe everyone deserves equal opportunities regardless of age, gender, background, or ability.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Our Core Values
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            The Principles That Guide Everything We Do
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Our values shape every decision, every partnership, and every
            initiative. They define who we are and inspire us to create
            meaningful, lasting change.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.id}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 text-green-700 text-3xl group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                {value.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 leading-7">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;