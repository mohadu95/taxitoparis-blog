import { Link } from "react-router-dom";
import { blogData } from "../data/blogData";
import Header from "./Header";
import Footer from "./Footer";

export default function BlogHome() {
  return (
    <div>
      <Header />
      <main className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Nos Articles</h2>
        {blogData.map((article) => (
          <div key={article.id} className="mb-6">
            <h3 className="text-xl font-semibold text-taxi-red">
              <Link to={`/blog/article/${article.slug}`}>{article.title}</Link>
            </h3>
            <p>{article.excerpt}</p>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}