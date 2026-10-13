import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
            Our Purpose
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Guided by Purpose,
            <br />
            Driven by Impact
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Everything we do is inspired by our commitment to creating
            sustainable solutions that empower individuals and strengthen
            communities.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <div className="group rounded-3xl bg-white p-10 shadow-sm border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-green-100 text-green-700 text-4xl group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
              <FaBullseye />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-gray-900">
              Our Mission
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              To support out-of-school teenage girls by providing access to formal education, vocational training, mentorship, and advocacy. We also champion peer education and behavioural change initiatives to prevent teenage pregnancy and promote holistic well-being.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
             	Education Access and Support 
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
               	Teenage Pregnancy Prevention
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
               	Vocational and Life Skills Training
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
               	Counselling and Psychosocial Support 
              </li>
             
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
              	Mentorship and Leadership Development 
              </li>
              
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
               Health and Well-being Advocacy  
              </li>
            
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
              	Behaviour Change Communication (BCC) .
              </li>
            </ul>
          </div>
















          {/* Vision */}
          <div className="group rounded-3xl bg-green-700 p-10 text-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 text-4xl">
              <FaEye />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-6 text-green-100 leading-8">
              To build a world where every individual has equal access to
              opportunities, essential resources, and the support needed to
              live a healthy, dignified, and fulfilling life.
            </p>

            <ul className="mt-8 space-y-4 text-green-100">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Equal Opportunities for All
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Sustainable Community Growth
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Long-Term Positive Impact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;