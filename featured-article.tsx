import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router';

export function FeaturedArticle() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#0A2540' }}>
          Featured Article
        </h2>
        <Link to="/article/1">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-video md:aspect-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762427354251-f008b64dbc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYnVzaW5lc3MlMjBncm93dGglMjBjaGFydHxlbnwxfHx8fDE3NzMwNjIzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Financial growth chart"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit" style={{ backgroundColor: '#00B386', color: '#FFFFFF' }}>
                  Market Analysis
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#0A2540' }}>
                  Understanding Market Volatility: A Comprehensive Guide for 2026
                </h3>
                <p className="text-lg mb-6" style={{ color: '#1A1A1A' }}>
                  Learn how to navigate uncertain markets with proven strategies from seasoned investors. Discover the key indicators, risk management techniques, and portfolio diversification methods that can help protect and grow your wealth.
                </p>
                <div className="flex items-center gap-6 text-sm" style={{ color: '#1B3A57' }}>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>Sarah Mitchell</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>March 8, 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}