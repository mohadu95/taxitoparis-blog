import { useParams } from "react-router-dom";
import { blogData } from "../data/blogData";
import Header from "./Header";
import Footer from "./Footer";

export default function ArticlePage() {
  const { slug } = useParams();
  const article = blogData.find((a) => a.slug === slug);

  if (!article) return <div>Article introuvable</div>;

  return (
    <div>
      <Header />
      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-taxi-red mb-4">{article.title}</h1>
        <img src={article.image} alt={article.title} className="mb-4 w-full h-auto rounded" />
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </main>
      <Footer />
    </div>
  );
}