const partners = [
  {
    id: 1,
    name: "UNICEF",
    logo: "https://placehold.co/220x100?text=UNICEF",
  },
  {
    id: 2,
    name: "WHO",
    logo: "https://placehold.co/220x100?text=WHO",
  },
  {
    id: 3,
    name: "USAID",
    logo: "https://placehold.co/220x100?text=USAID",
  },
  {
    id: 4,
    name: "UNDP",
    logo: "https://placehold.co/220x100?text=UNDP",
  },
  {
    id: 5,
    name: "Save the Children",
    logo: "https://placehold.co/220x100?text=Save+the+Children",
  },
  {
    id: 6,
    name: "World Vision",
    logo: "https://placehold.co/220x100?text=World+Vision",
  },
];

const Partners = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Trusted Partnerships
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Our Partners & Sponsors
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Our work is strengthened through collaborations with organizations,
            businesses, and institutions that share our vision of creating
            lasting positive impact.
          </p>
        </div>

        {/* Logos */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-green-700 rounded-3xl p-10 lg:p-14 text-center">
          <h3 className="text-3xl font-bold text-white">
            Become a Partner
          </h3>

          <p className="mt-4 text-green-100 max-w-2xl mx-auto leading-8">
            We welcome organizations, businesses, and individuals who want to
            collaborate with us to create sustainable solutions and transform
            communities.
          </p>

          <button className="mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;