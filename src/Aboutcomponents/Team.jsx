import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Executive Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Programs Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Amina Yusuf",
    role: "Community Coordinator",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Volunteer Lead",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  },
];

const Team = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Leadership Team
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Meet the People Behind Our Mission
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Our passionate team brings together experience, compassion,
            and dedication to create meaningful and lasting impact in
            the communities we serve.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-green-700 font-semibold">
                  {member.role}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-3 mt-6">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-green-700 hover:text-white transition flex items-center justify-center"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-green-700 hover:text-white transition flex items-center justify-center"
                  >
                    <FaTwitter />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-green-700 hover:text-white transition flex items-center justify-center"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 text-lg">
            Together, we work every day to inspire hope and create lasting
            change in communities around the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;