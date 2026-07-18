import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
              Get In Touch
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              We'd love to hear from you. Whether you have a question,
              partnership proposal, volunteer request, or would like to
              support our mission, fill out the form and our team will get
              back to you as soon as possible.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <p className="text-gray-700">
                  We respond within 24–48 hours.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <p className="text-gray-700">
                  Your information is kept private and secure.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <p className="text-gray-700">
                  We welcome volunteers, donors, and partners.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full rounded-xl border border-gray-300 px-5 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white font-semibold py-4 rounded-xl transition duration-300"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;