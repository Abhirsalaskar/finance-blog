import { Link } from 'react-router';
import { Logo } from './logo';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const footerLinks = [
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Instagram, label: 'Instagram' },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1B3A57' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div style={{ filter: 'brightness(0) invert(1)' }}>
                <Logo />
              </div>
            </div>
            <p className="text-white opacity-80 text-sm leading-relaxed">
              Capital Compass is your trusted source for financial insights and investment strategies. We provide expert analysis to help you navigate the complex world of finance with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-white opacity-80 hover:opacity-100 transition-opacity text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: '#00B386' }}
                >
                  <social.icon size={18} color="white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t text-center" style={{ borderColor: '#2D4A65' }}>
          <p className="text-white opacity-70 text-sm">
            © 2026 Capital Compass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
