import { useState } from 'react';
import { Mail } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0A2540' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: '#00B386' }}>
          <Mail size={32} color="white" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          Stay Updated with Capital Compass
        </h2>
        <p className="text-lg mb-8 text-white opacity-90">
          Get the latest financial insights, market analysis, and investment strategies delivered straight to your inbox. Join thousands of savvy investors who trust Capital Compass.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 rounded-lg border-2 border-transparent focus:border-white focus:outline-none"
              style={{ backgroundColor: '#1B3A57', color: 'white' }}
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-lg font-semibold transition-transform hover:scale-105 text-white"
              style={{ backgroundColor: '#00B386' }}
            >
              Subscribe
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-white opacity-70">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
