import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const blogPosts = [
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1713461983836-de0a45009424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRpbmclMjBkZXNrfGVufDF8fHx8MTc3MzA1ODEyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Trading',
    title: '5 Essential Trading Strategies for Beginners',
    summary: 'Discover proven trading techniques that can help you start your investment journey on the right foot.',
    author: 'Michael Chen',
    date: 'March 5, 2026',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1763621587984-68065752ba6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwcG9ydGZvbGlvJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzczMDYyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Portfolio Management',
    title: 'Building a Diversified Investment Portfolio',
    summary: 'Learn the art of portfolio diversification to minimize risk while maximizing returns.',
    author: 'Emma Rodriguez',
    date: 'March 3, 2026',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1621761187091-76d31f1755d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJpdGNvaW4lMjBkaWdpdGFsfGVufDF8fHx8MTc3MzAzMjMzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cryptocurrency',
    title: 'Cryptocurrency Investment Guide: Navigating Digital Assets',
    summary: 'Understanding the fundamentals of cryptocurrency investing and how to approach digital assets safely.',
    author: 'Alex Thompson',
    date: 'March 2, 2026',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1758686254550-c5d8f4de1b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRpcmVtZW50JTIwcGxhbm5pbmclMjBlbGRlcmx5JTIwY291cGxlfGVufDF8fHx8MTc3MzAzMjEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Retirement',
    title: 'Retirement Planning: Securing Your Financial Future',
    summary: 'Comprehensive strategies for building a retirement portfolio that supports your lifestyle goals.',
    author: 'Patricia Williams',
    date: 'February 28, 2026',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1772588627499-baefc8ab0ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBkb2N1bWVudCUyMGNhbGN1bGF0b3J8ZW58MXx8fHwxNzczMDY1MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Tax Planning',
    title: 'Tax Optimization Strategies for Smart Investors',
    summary: 'Maximize your investment returns through strategic tax planning and optimization techniques.',
    author: 'Robert Chen',
    date: 'February 25, 2026',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1668911494481-1643ee3e1235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBob3VzZXxlbnwxfHx8fDE3NzMwMDAzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Real Estate',
    title: 'Real Estate Investing: Building Wealth Through Property',
    summary: 'Explore real estate investment opportunities from rental properties to REITs.',
    author: 'Jennifer Martinez',
    date: 'February 22, 2026',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1691250203539-bce8615d5652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGdyZWVuJTIwZW5lcmd5JTIwaW52ZXN0bWVudHxlbnwxfHx8fDE3NzMwNjUwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Sustainable Investing',
    title: 'ESG Investing: Profit with Purpose',
    summary: 'Align your investments with your values through Environmental, Social, and Governance criteria.',
    author: 'David Green',
    date: 'February 20, 2026',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1767423802472-f5fd07dfdb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjBwbGFubmluZyUyMGV4cGVuc2VzfGVufDF8fHx8MTc3MzA2NTAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Personal Finance',
    title: 'Personal Budgeting: The Foundation of Financial Success',
    summary: 'Master the art of budgeting to take control of your finances and accelerate wealth building.',
    author: 'Lisa Anderson',
    date: 'February 18, 2026',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1554260570-e9689a3418b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMGV4Y2hhbmdlJTIwbWFya2V0JTIwZGF0YXxlbnwxfHx8fDE3NzMwNjUwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Stock Market',
    title: 'Stock Market Fundamentals: A Beginner\'s Guide',
    summary: 'Learn the essential concepts every investor needs to understand about stock markets.',
    author: 'James Wilson',
    date: 'February 15, 2026',
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1762427354251-f008b64dbc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29ub21pYyUyMGdyb3d0aCUyMGNoYXJ0JTIwc3RhdGlzdGljc3xlbnwxfHx8fDE3NzMwNjUwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Economics',
    title: 'Economic Indicators: Reading the Financial Landscape',
    summary: 'Understand key economic indicators and how they influence investment decisions.',
    author: 'Dr. Rachel Kim',
    date: 'February 12, 2026',
  },
];

export function BlogGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F7FA' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold" style={{ color: '#0A2540' }}>
            Latest Articles
          </h2>
          <button className="flex items-center gap-2 font-medium hover:gap-3 transition-all" style={{ color: '#00B386' }}>
            View All <ArrowRight size={20} />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/article/${post.id}`}>
              <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3" style={{ backgroundColor: '#F5F7FA', color: '#0A2540' }}>
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2" style={{ color: '#0A2540' }}>
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-3" style={{ color: '#1A1A1A' }}>
                    {post.summary}
                  </p>
                  <div className="flex items-center gap-4 text-sm pt-4 border-t" style={{ color: '#1B3A57', borderColor: '#F5F7FA' }}>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
