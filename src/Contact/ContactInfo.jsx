import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

const contactDetails = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    title: "Phone Number",
    info: "+234 708 994 1644",
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    title: "Email Address",
    info: "christiana.oyeyiola@gmail.com",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    title: "Office Address",
    info: "123 Charity Avenue, Lagos, Nigeria",
  },
  {
    id: 4,
    icon: <FaClock />,
    title: "Working Hours",
    info: "Mon - Fri | 9:00 AM - 5:00 PM",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const ContactInfo = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
            Contact Information
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            We'd Love to Hear From You
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Whether you'd like to volunteer, partner with us, make a donation,
            or simply learn more about our work, we're here to help.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactDetails.map((item) => (
            <motion.div
              key={item.id}
              variants={card}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative bg-white rounded-3xl p-8 text-center border border-gray-200 shadow-sm hover:shadow-2xl transition"
            >
              {/* Animated Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mx-auto rounded-full bg-green-100 text-green-700 flex items-center justify-center text-2xl group-hover:bg-green-700 group-hover:text-white transition-all duration-300"
              >
                {item.icon}
              </motion.div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.info}
              </p>

              {/* Bottom Accent */}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-green-700 rounded-b-3xl group-hover:w-full transition-all duration-500"></span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;