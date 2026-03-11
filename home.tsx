import { Hero } from '../components/hero';
import { FeaturedArticle } from '../components/featured-article';
import { BlogGrid } from '../components/blog-grid';
import { Newsletter } from '../components/newsletter';

export function Home() {
  return (
    <>
      <Hero />
      <FeaturedArticle />
      <BlogGrid />
      <Newsletter />
    </>
  );
}
