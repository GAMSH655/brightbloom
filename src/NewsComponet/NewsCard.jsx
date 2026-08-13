import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { client } from "../Sanity/client";
import { urlFor } from "../Sanity/image";
const query = `*[_type == "news"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  image,
  publishedAt,
  author->{
    name
  }
}`;

const NewsCard = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(query)
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-semibold">
            Latest News
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-800">
            Stories That Inspire Change
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Stay up to date with our programmes, events, partnerships, and the
            impact we're creating in the lives of girls and young women.
          </p>
        </div>

        {loading ? (
          <p className="text-center mt-12 text-gray-500">
            Loading news...
          </p>
        ) : (
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <div
                key={item._id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-pink-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={urlFor(item.image).width(600).height(400).url()}
                    alt={item.title}
                    className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-pink-600 text-sm font-medium">
                    <FaCalendarAlt />
                    <span>
                      {new Date(item.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {item.excerpt}
                  </p>

                 <Link
                to={`/news/${item.slug?.current}`}
                  className="mt-6 inline-flex items-center gap-2 text-pink-600 font-semibold hover:gap-4 transition-all"
                >
                  Read More
                  <FaArrowRight className="text-sm" />
                </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
    
  );
};

export default NewsCard;