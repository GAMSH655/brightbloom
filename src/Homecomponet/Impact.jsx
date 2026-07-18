import {
  FaUsers,
  FaHandsHelping,
  FaGlobeAfrica,
  FaSchool,
} from "react-icons/fa";

const impactData = [
  {
    id: 1,
    icon: <FaUsers />,
    number: "25K+",
    title: "Lives Impacted",
    description:
      "Supporting individuals and families through sustainable community programs.",
  },
  {
    id: 2,
    icon: <FaHandsHelping />,
    number: "500+",
    title: "Volunteers",
    description:
      "Dedicated volunteers working together to create lasting positive change.",
  },
  {
    id: 3,
    icon: <FaGlobeAfrica />,
    number: "75+",
    title: "Communities Reached",
    description:
      "Expanding our impact across underserved communities every year.",
  },
  {
    id: 4,
    icon: <FaSchool />,
    number: "150+",
    title: "Projects Completed",
    description:
      "Successfully delivering education, healthcare, and humanitarian initiatives.",
  },
];

const Impact = () => {
  return (
    <section className="bg-green-700 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Our Impact
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            Transforming Lives Through Action
          </h2>

          <p className="mt-6 text-green-100 text-lg leading-8">
            Every project, every volunteer, and every contribution helps us
            create stronger communities and brighter futures.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impactData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-3xl text-green-700">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="mt-6 text-4xl font-extrabold text-gray-900">
                {item.number}
              </h3>

              {/* Title */}
              <h4 className="mt-3 text-xl font-semibold text-gray-800">
                {item.title}
              </h4>

              {/* Description */}
              <p className="mt-4 text-gray-600 leading-7 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;