import { Routes, Route } from 'react-router-dom';
import BlogHome from './components/BlogHome';
import ArticlePage from './components/ArticlePage';

export default function App() {
  return (
    <Routes>
      <Route path="/blog" element={<BlogHome />} />
      <Route path="/blog/article/:slug" element={<ArticlePage />} />
    </Routes>
  );
}