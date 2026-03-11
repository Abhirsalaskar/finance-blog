import { Link } from 'react-router';

export function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F7FA' }}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#0A2540' }}>
          Navigate Your Financial Future with Confidence
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto" style={{ color: '#1B3A57' }}>
          Expert insights, market analysis, and investment strategies to help you make informed financial decisions and build lasting wealth.
        </p>
        <Link to="/article/1">
          <button
            className="px-8 py-4 rounded-lg text-white font-semibold text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: '#00B386' }}
          >
            READ LATEST ARTICLE
          </button>
        </Link>
      </div>
    </section>
  );
}