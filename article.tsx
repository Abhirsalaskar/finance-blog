import { useParams, Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, User, ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react';

// Mock article data - in a real app, this would come from an API or database
const articles = {
  '1': {
    id: '1',
    title: 'Understanding Market Volatility: A Comprehensive Guide for 2026',
    category: 'Market Analysis',
    image: 'https://images.unsplash.com/photo-1762427354251-f008b64dbc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYnVzaW5lc3MlMjBncm93dGglMjBjaGFydHxlbnwxfHx8fDE3NzMwNjIzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Sarah Mitchell',
    date: 'March 8, 2026',
    readTime: '8 min read',
    summary: 'Learn how to navigate uncertain markets with proven strategies from seasoned investors.',
    content: [
      { type: 'paragraph', text: 'Market volatility is an inevitable aspect of investing that can be both intimidating and opportunistic. In 2026, as global markets continue to adapt to technological disruptions and shifting economic policies, understanding volatility has become more crucial than ever for investors at all levels.' },
      { type: 'heading', text: 'What Causes Market Volatility?' },
      { type: 'paragraph', text: 'Market volatility stems from various sources including economic data releases, geopolitical events, changes in monetary policy, and shifts in investor sentiment. Recent studies show that algorithmic trading and social media can amplify these movements, creating rapid price swings that challenge traditional investment strategies.' },
      { type: 'paragraph', text: 'Understanding these drivers is the first step in developing a robust investment approach that can weather market turbulence while capitalizing on opportunities that volatility presents.' },
      { type: 'heading', text: 'Key Strategies for Managing Volatility' },
      { type: 'paragraph', text: 'Diversification remains the cornerstone of volatility management. By spreading investments across different asset classes, sectors, and geographic regions, investors can reduce the impact of any single market movement on their overall portfolio.' },
      { type: 'paragraph', text: 'Dollar-cost averaging is another powerful tool, allowing investors to buy more shares when prices are low and fewer when prices are high, effectively smoothing out the cost basis over time. This approach removes the emotional element from market timing decisions.' },
      { type: 'heading', text: 'Risk Management Techniques' },
      { type: 'paragraph', text: 'Professional investors employ various risk management techniques including stop-loss orders, position sizing based on volatility metrics, and regular portfolio rebalancing. These methods help maintain desired risk levels while protecting against significant drawdowns.' },
      { type: 'paragraph', text: 'The key is to remain disciplined and avoid emotional decision-making during periods of heightened volatility. Historical data shows that markets recover from downturns, and patient, well-diversified investors are typically rewarded over the long term.' }
    ]
  },
  '2': {
    id: '2',
    title: '5 Essential Trading Strategies for Beginners',
    category: 'Trading',
    image: 'https://images.unsplash.com/photo-1713461983836-de0a45009424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRpbmclMjBkZXNrfGVufDF8fHx8MTc3MzA1ODEyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Michael Chen',
    date: 'March 5, 2026',
    readTime: '6 min read',
    summary: 'Discover proven trading techniques that can help you start your investment journey on the right foot.',
    content: [
      { type: 'paragraph', text: 'Starting your trading journey can be overwhelming with the vast amount of information available. This guide breaks down five essential strategies that every beginner should master before risking significant capital in the markets.' },
      { type: 'heading', text: '1. Start with Paper Trading' },
      { type: 'paragraph', text: 'Before investing real money, practice with virtual portfolios. Paper trading allows you to test strategies, learn platform mechanics, and understand market dynamics without financial risk. Most successful traders spend months in simulation before going live.' },
      { type: 'heading', text: '2. Master Technical Analysis Basics' },
      { type: 'paragraph', text: 'Learn to read charts and understand key indicators like moving averages, RSI, and MACD. These tools help identify trends, support and resistance levels, and potential entry and exit points. Start simple and gradually expand your technical toolkit.' },
      { type: 'heading', text: '3. Implement Strict Risk Management' },
      { type: 'paragraph', text: 'Never risk more than 1-2% of your capital on a single trade. Use stop-loss orders religiously and always have a predetermined exit strategy. Risk management is what separates profitable traders from those who blow up their accounts.' }
    ]
  },
  '3': {
    id: '3',
    title: 'Building a Diversified Investment Portfolio',
    category: 'Portfolio Management',
    image: 'https://images.unsplash.com/photo-1763621587984-68065752ba6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwcG9ydGZvbGlvJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzczMDYyMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Emma Rodriguez',
    date: 'March 3, 2026',
    readTime: '7 min read',
    summary: 'Learn the art of portfolio diversification to minimize risk while maximizing returns.',
    content: [
      { type: 'paragraph', text: 'Portfolio diversification is the practice of spreading investments across various assets to reduce risk. A well-diversified portfolio can weather market downturns while capturing upside potential across different market segments.' },
      { type: 'heading', text: 'The Core Principles of Diversification' },
      { type: 'paragraph', text: 'Diversification works because different assets often move independently or in opposite directions. When stocks decline, bonds might rise. When domestic markets struggle, international markets may thrive. This negative correlation reduces overall portfolio volatility.' },
      { type: 'heading', text: 'Asset Allocation Strategies' },
      { type: 'paragraph', text: 'Your asset allocation should reflect your risk tolerance, time horizon, and financial goals. A common starting point is the 60/40 portfolio (60% stocks, 40% bonds), but this should be adjusted based on individual circumstances.' }
    ]
  },
  '4': {
    id: '4',
    title: 'Cryptocurrency Investment Guide: Navigating Digital Assets',
    category: 'Cryptocurrency',
    image: 'https://images.unsplash.com/photo-1621761187091-76d31f1755d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJpdGNvaW4lMjBkaWdpdGFsfGVufDF8fHx8MTc3MzAzMjMzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Alex Thompson',
    date: 'March 2, 2026',
    readTime: '9 min read',
    summary: 'Understanding the fundamentals of cryptocurrency investing and how to approach digital assets safely.',
    content: [
      { type: 'paragraph', text: 'Cryptocurrency has evolved from a niche technology to a mainstream investment option. As digital assets mature, understanding the fundamentals becomes crucial for any investor looking to participate in this market.' },
      { type: 'heading', text: 'Understanding Blockchain Technology' },
      { type: 'paragraph', text: 'At the core of cryptocurrency is blockchain technology—a decentralized ledger that records all transactions. This transparency and security make blockchain revolutionary, but it also comes with unique risks and considerations.' },
      { type: 'heading', text: 'Key Cryptocurrencies to Watch' },
      { type: 'paragraph', text: 'Bitcoin remains the dominant cryptocurrency, often called digital gold. Ethereum introduced smart contracts, enabling decentralized applications. Understanding the use case of each cryptocurrency is essential before investing.' },
      { type: 'heading', text: 'Risk Management in Crypto' },
      { type: 'paragraph', text: 'Cryptocurrency markets are notably more volatile than traditional markets. Never invest more than you can afford to lose, use secure wallets, enable two-factor authentication, and be wary of too-good-to-be-true opportunities.' }
    ]
  },
  '5': {
    id: '5',
    title: 'Retirement Planning: Securing Your Financial Future',
    category: 'Retirement',
    image: 'https://images.unsplash.com/photo-1758686254550-c5d8f4de1b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRpcmVtZW50JTIwcGxhbm5pbmclMjBlbGRlcmx5JTIwY291cGxlfGVufDF8fHx8MTc3MzAzMjEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Patricia Williams',
    date: 'February 28, 2026',
    readTime: '10 min read',
    summary: 'Comprehensive strategies for building a retirement portfolio that supports your lifestyle goals.',
    content: [
      { type: 'paragraph', text: 'Retirement planning is one of the most important financial endeavors you will undertake. Starting early and maintaining a disciplined approach can mean the difference between a comfortable retirement and financial stress.' },
      { type: 'heading', text: 'The Power of Compound Interest' },
      { type: 'paragraph', text: 'Time is your greatest ally in retirement planning. Starting to save in your 20s versus your 40s can result in hundreds of thousands of dollars in difference due to compound interest. Even small contributions add up significantly over decades.' },
      { type: 'heading', text: 'Retirement Account Options' },
      { type: 'paragraph', text: '401(k) plans, IRAs, and Roth IRAs each offer unique tax advantages. Understanding which accounts to prioritize and how to maximize employer matching contributions can dramatically accelerate your retirement savings.' },
      { type: 'heading', text: 'Calculating Your Retirement Needs' },
      { type: 'paragraph', text: 'A common rule of thumb is that you will need 70-80% of your pre-retirement income annually. However, your specific needs depend on your lifestyle, healthcare costs, and planned activities. Creating a detailed budget for retirement helps ensure adequate savings.' }
    ]
  },
  '6': {
    id: '6',
    title: 'Tax Optimization Strategies for Smart Investors',
    category: 'Tax Planning',
    image: 'https://images.unsplash.com/photo-1772588627499-baefc8ab0ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBkb2N1bWVudCUyMGNhbGN1bGF0b3J8ZW58MXx8fHwxNzczMDY1MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Robert Chen',
    date: 'February 25, 2026',
    readTime: '8 min read',
    summary: 'Maximize your investment returns through strategic tax planning and optimization techniques.',
    content: [
      { type: 'paragraph', text: 'Taxes can significantly impact your investment returns. Understanding tax-efficient investment strategies can help you keep more of what you earn and accelerate wealth building.' },
      { type: 'heading', text: 'Tax-Advantaged Accounts' },
      { type: 'paragraph', text: 'Utilizing tax-advantaged accounts like 401(k)s, IRAs, and HSAs allows your investments to grow tax-deferred or tax-free. Maximizing contributions to these accounts should be a priority in any tax optimization strategy.' },
      { type: 'heading', text: 'Tax-Loss Harvesting' },
      { type: 'paragraph', text: 'Tax-loss harvesting involves selling investments at a loss to offset capital gains taxes. This strategy can reduce your tax burden while maintaining your desired asset allocation through strategic replacement purchases.' },
      { type: 'heading', text: 'Asset Location Strategy' },
      { type: 'paragraph', text: 'Placing tax-inefficient investments like bonds in tax-advantaged accounts and tax-efficient investments like index funds in taxable accounts can minimize your overall tax liability and improve after-tax returns.' }
    ]
  },
  '7': {
    id: '7',
    title: 'Real Estate Investing: Building Wealth Through Property',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1668911494481-1643ee3e1235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBob3VzZXxlbnwxfHx8fDE3NzMwMDAzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Jennifer Martinez',
    date: 'February 22, 2026',
    readTime: '11 min read',
    summary: 'Explore real estate investment opportunities from rental properties to REITs.',
    content: [
      { type: 'paragraph', text: 'Real estate has long been a cornerstone of wealth building. Whether through direct property ownership or real estate investment trusts (REITs), property investments offer unique advantages including cash flow, appreciation, and tax benefits.' },
      { type: 'heading', text: 'Rental Property Fundamentals' },
      { type: 'paragraph', text: 'Successful rental property investing requires understanding location analysis, cash flow calculation, property management, and tenant screening. The 1% rule suggests monthly rent should equal at least 1% of the purchase price for positive cash flow.' },
      { type: 'heading', text: 'REITs: Passive Real Estate Investing' },
      { type: 'paragraph', text: 'Real Estate Investment Trusts allow you to invest in property portfolios without the hassles of direct ownership. REITs must distribute 90% of taxable income as dividends, making them attractive for income-focused investors.' },
      { type: 'heading', text: 'Financing Strategies' },
      { type: 'paragraph', text: 'Leverage through mortgages can amplify returns in real estate investing. Understanding different loan types, interest rates, and how to calculate return on equity helps optimize your financing strategy for maximum returns.' }
    ]
  },
  '8': {
    id: '8',
    title: 'ESG Investing: Profit with Purpose',
    category: 'Sustainable Investing',
    image: 'https://images.unsplash.com/photo-1691250203539-bce8615d5652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGdyZWVuJTIwZW5lcmd5JTIwaW52ZXN0bWVudHxlbnwxfHx8fDE3NzMwNjUwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'David Green',
    date: 'February 20, 2026',
    readTime: '7 min read',
    summary: 'Align your investments with your values through Environmental, Social, and Governance criteria.',
    content: [
      { type: 'paragraph', text: 'ESG investing combines financial returns with positive social and environmental impact. As sustainable investing grows mainstream, understanding ESG principles becomes increasingly important for modern investors.' },
      { type: 'heading', text: 'Understanding ESG Criteria' },
      { type: 'paragraph', text: 'Environmental factors include climate impact and resource use. Social criteria examine labor practices and community relations. Governance evaluates corporate leadership and ethics. Together, these factors identify sustainable, responsible companies.' },
      { type: 'heading', text: 'Performance of ESG Investments' },
      { type: 'paragraph', text: 'Research shows ESG-focused companies often demonstrate strong long-term performance. Companies with good ESG practices typically have lower risk profiles, better operational efficiency, and stronger stakeholder relationships.' },
      { type: 'heading', text: 'How to Build an ESG Portfolio' },
      { type: 'paragraph', text: 'Start by defining your values and priorities. Use ESG ratings from providers like MSCI or Sustainalytics. Consider ESG-focused ETFs and mutual funds for diversified exposure to companies meeting sustainability criteria.' }
    ]
  },
  '9': {
    id: '9',
    title: 'Personal Budgeting: The Foundation of Financial Success',
    category: 'Personal Finance',
    image: 'https://images.unsplash.com/photo-1767423802472-f5fd07dfdb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjBwbGFubmluZyUyMGV4cGVuc2VzfGVufDF8fHx8MTc3MzA2NTAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Lisa Anderson',
    date: 'February 18, 2026',
    readTime: '6 min read',
    summary: 'Master the art of budgeting to take control of your finances and accelerate wealth building.',
    content: [
      { type: 'paragraph', text: 'A well-crafted budget is the foundation of financial success. It provides visibility into your spending, helps identify savings opportunities, and ensures you are living within your means while working toward financial goals.' },
      { type: 'heading', text: 'The 50/30/20 Rule' },
      { type: 'paragraph', text: 'This popular budgeting framework allocates 50% of income to needs, 30% to wants, and 20% to savings and debt repayment. While not perfect for everyone, it provides a simple starting point for balanced financial planning.' },
      { type: 'heading', text: 'Tracking Your Expenses' },
      { type: 'paragraph', text: 'Use budgeting apps, spreadsheets, or the envelope method to track spending. The key is consistency—reviewing expenses weekly helps identify patterns and opportunities for optimization before they become problematic.' },
      { type: 'heading', text: 'Building an Emergency Fund' },
      { type: 'paragraph', text: 'Before aggressive investing, establish an emergency fund covering 3-6 months of expenses. This financial cushion prevents forced asset sales during emergencies and provides peace of mind for taking calculated investment risks.' }
    ]
  },
  '10': {
    id: '10',
    title: 'Stock Market Fundamentals: A Beginner\'s Guide',
    category: 'Stock Market',
    image: 'https://images.unsplash.com/photo-1554260570-e9689a3418b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMGV4Y2hhbmdlJTIwbWFya2V0JTIwZGF0YXxlbnwxfHx8fDE3NzMwNjUwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'James Wilson',
    date: 'February 15, 2026',
    readTime: '9 min read',
    summary: 'Learn the essential concepts every investor needs to understand about stock markets.',
    content: [
      { type: 'paragraph', text: 'The stock market can seem intimidating to beginners, but understanding fundamental concepts makes it accessible. This guide covers the essential knowledge needed to start your stock market investing journey with confidence.' },
      { type: 'heading', text: 'What Are Stocks?' },
      { type: 'paragraph', text: 'Stocks represent ownership shares in a company. When you buy stock, you become a partial owner with potential to profit from the company\'s growth through price appreciation and dividends.' },
      { type: 'heading', text: 'How Stock Prices Are Determined' },
      { type: 'paragraph', text: 'Stock prices reflect supply and demand driven by company performance, economic conditions, and investor sentiment. Understanding valuation metrics like P/E ratio, earnings growth, and market capitalization helps assess if a stock is fairly priced.' },
      { type: 'heading', text: 'Index Funds vs Individual Stocks' },
      { type: 'paragraph', text: 'Index funds offer instant diversification and lower risk, making them ideal for beginners. Individual stock picking requires more research and carries higher risk but offers potential for greater returns if you choose wisely.' }
    ]
  },
  '11': {
    id: '11',
    title: 'Economic Indicators: Reading the Financial Landscape',
    category: 'Economics',
    image: 'https://images.unsplash.com/photo-1762427354251-f008b64dbc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29ub21pYyUyMGdyb3d0aCUyMGNoYXJ0JTIwc3RhdGlzdGljc3xlbnwxfHx8fDE3NzMwNjUwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Dr. Rachel Kim',
    date: 'February 12, 2026',
    readTime: '8 min read',
    summary: 'Understand key economic indicators and how they influence investment decisions.',
    content: [
      { type: 'paragraph', text: 'Economic indicators provide insights into the health of the economy and help investors make informed decisions. Understanding these metrics allows you to anticipate market movements and adjust your investment strategy accordingly.' },
      { type: 'heading', text: 'Leading vs Lagging Indicators' },
      { type: 'paragraph', text: 'Leading indicators like consumer confidence and housing starts predict future economic activity. Lagging indicators like unemployment rate and GDP confirm trends that have already begun. Both types inform comprehensive economic analysis.' },
      { type: 'heading', text: 'Inflation and Interest Rates' },
      { type: 'paragraph', text: 'The Federal Reserve adjusts interest rates to manage inflation. Rising rates typically strengthen the dollar and can pressure stock valuations, while lower rates stimulate economic growth and often boost equity markets.' },
      { type: 'heading', text: 'Using Indicators in Investment Strategy' },
      { type: 'paragraph', text: 'No single indicator tells the complete story. Successful investors monitor multiple indicators, understand their interrelationships, and consider the broader context when making investment decisions.' }
    ]
  }
};

export function Article() {
  const { id } = useParams();
  const article = id ? articles[id as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#0A2540' }}>
            Article Not Found
          </h1>
          <Link to="/" className="inline-flex items-center gap-2 mt-4" style={{ color: '#00B386' }}>
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Get related articles (exclude current article)
  const relatedArticlesList = Object.values(articles)
    .filter(a => a.id !== id)
    .slice(0, 2);

  return (
    <div style={{ backgroundColor: '#F5F7FA' }}>
      {/* Article Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:gap-3 transition-all" style={{ color: '#00B386' }}>
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#00B386', color: '#FFFFFF' }}>
            {article.category}
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#0A2540' }}>
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm mb-6" style={{ color: '#1B3A57' }}>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors hover:bg-gray-50" style={{ borderColor: '#E5E7EB', color: '#1B3A57' }}>
              <Share2 size={18} />
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors hover:bg-gray-50" style={{ borderColor: '#E5E7EB', color: '#1B3A57' }}>
              <Bookmark size={18} />
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-xl shadow-md p-8 sm:p-12">
          {article.content.map((block, index) => {
            if (block.type === 'heading') {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4 first:mt-0" style={{ color: '#0A2540' }}>
                  {block.text}
                </h2>
              );
            }
            return (
              <p key={index} className="text-lg leading-relaxed mb-6" style={{ color: '#1A1A1A' }}>
                {block.text}
              </p>
            );
          })}
        </div>
      </div>

      {/* Related Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#0A2540' }}>
          Related Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {relatedArticlesList.map((relatedArticle) => (
            <Link key={relatedArticle.id} to={`/article/${relatedArticle.id}`}>
              <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3" style={{ backgroundColor: '#F5F7FA', color: '#0A2540' }}>
                    {relatedArticle.category}
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#0A2540' }}>
                    {relatedArticle.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
