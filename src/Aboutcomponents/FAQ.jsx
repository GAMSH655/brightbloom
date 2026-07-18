import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "What does your NGO do?",
    answer:
      "We work to improve lives through education, healthcare, humanitarian assistance, youth empowerment, and sustainable community development initiatives.",
  },
  {
    id: 2,
    question: "How can I become a volunteer?",
    answer:
      "You can join our volunteer network by completing the volunteer application form on our website. Our team will review your application and contact you with the next steps.",
  },
  {
    id: 3,
    question: "How can I donate?",
    answer:
      "Donations can be made securely through our website. Every contribution helps us deliver life-changing programs to communities in need.",
  },
  {
    id: 4,
    question: "Where do you operate?",
    answer:
      "We currently operate in several communities across the country and continue to expand our reach through partnerships and community-driven projects.",
  },
  {
    id: 5,
    question: "Can organizations partner with you?",
    answer:
      "Yes. We welcome partnerships with businesses, government agencies, NGOs, and individuals who share our mission of creating sustainable impact.",
  },
  {
    id: 6,
    question: "How do I stay updated on your activities?",
    answer:
      "You can subscribe to our newsletter or follow us on our social media platforms to receive updates on projects, events, and opportunities.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Got Questions?
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Find answers to some of the most common questions about our
            organization, our work, and how you can get involved.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-14 space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`text-green-700 transition-transform duration-300 ${
                    active === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  active === faq.id
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-600 leading-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Prompt */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            Can't find the answer you're looking for?
          </p>

          <button className="mt-6 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;