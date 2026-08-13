import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client} from "../Sanity/client";
import { urlFor } from "../Sanity/image";

const ReadMore = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const query = `*[_type == "news" && slug.current == $slug][0]{
      title,
      image,
      excerpt,
      body,
      publishedAt,
      author
    }`;

    client.fetch(query, { slug }).then((data) => {
      setArticle(data);
    });
  }, [slug]);

  if (!article) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <img
        src={urlFor(article.image).url()}
        alt={article.title}
        className="w-full h-96 object-cover rounded-2xl"
      />

      <p className="mt-6 text-pink-600">
        {new Date(article.publishedAt).toDateString()}
      </p>

      <h1 className="mt-4 text-4xl font-bold">
        {article.title}
      </h1>

      <p className="mt-6 text-gray-600 leading-8">
        {article.excerpt}
      </p>
    </section>
  );
};

export default ReadMore;