import {
  FaGraduationCap,
  FaHeartbeat,
  FaHandsHelping,
  FaLeaf,
  FaFemale,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Causes = () => {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            What We Do
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Our Causes
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We believe sustainable change begins by addressing the most
            pressing needs of our communities. Our programs focus on creating
            lasting impact through education, healthcare, empowerment, and
            humanitarian support.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {causes.map((cause) => (
            <motion.div
              key={cause.id}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl transition"
            >
              {/* Animated top line */}
              <span className="absolute top-0 left-0 h-1 w-0 bg-green-700 transition-all duration-500 group-hover:w-full"></span>

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.15,
                }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-xl bg-green-100 text-green-700 flex items-center justify-center text-3xl group-hover:bg-green-700 group-hover:text-white transition-all duration-300"
              >
                {cause.icon}
              </motion.div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {cause.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 leading-7">
                {cause.description}
              </p>

              {/* Button */}
              <motion.button
                whileHover={{ x: 8 }}
                className="mt-6 flex items-center gap-2 text-green-700 font-semibold"
              >
                Learn More

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.4 }}
                >
                  <FaArrowRight className="text-sm" />
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Causes;