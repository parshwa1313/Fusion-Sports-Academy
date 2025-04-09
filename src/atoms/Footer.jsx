export default function Footer() {
  return (
      <footer className="bg-[#1c1c1cf1] text-gray-300 py-8 text-center px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl justify-center">
              {/* Logo & Description */}
              <div className="text-center">
                  <h2 className="text-2xl font-bold text-orange-500">Fusion Sports Academy</h2>
                  <p className="mt-2 text-lg">
                      Elevate your game with us! Join our sports academy today to enhance your skills, strength, and strategy.
                  </p>
              </div>

              {/* Quick Links */}
              <div className="text-center">
                  <h3 className="text-lg font-semibold text-orange-500">Quick links</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                      <li><a href="/" className="hover:text-orange-400 transition">Home</a></li>
                      <li><a href="/academy" className="hover:text-orange-400 transition">Academy</a></li>
                      <li><a href="/community" className="hover:text-orange-400 transition">Community</a></li>
                      <li><a href="/events" className="hover:text-orange-400 transition">Events</a></li>
                      <li><a href="/sports" className="hover:text-orange-400 transition">Sports</a></li>
                      <li><a href="/gallery" className="hover:text-orange-400 transition">Gallery</a></li>
                      <li><a href="/news" className="hover:text-orange-400 transition">News& Tips</a></li>
                     
                  </ul>
              </div>

              {/* Company */}
              <div className="text-center">
                  <h3 className="text-lg font-semibold text-orange-500">Company</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                      <li><a href="/privacy" className="hover:text-orange-400 transition">Privacy Policy</a></li>
                      <li><a href="/terms" className="hover:text-orange-400 transition">Terms & Conditions</a></li>
                      <li><a href="/contact" className="hover:text-orange-400 transition">Contact</a></li>
                  </ul>
              </div>

              {/* Contact Information */}
              <div className="text-center">
                  <h3 className="text-lg font-semibold text-orange-500">Contact Us</h3>
                  <p className="mt-2 text-sm">📍 723 Fusion Sports Academy, Science City, Ahmedabad, Gujarat 380060</p>
                  <p className="text-sm">📞 +91 9989725624</p>
                  <p className="text-sm">✉️ Fusion13@gmail.com</p>
              </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs">
              © {new Date().getFullYear()} Fusion Sports Academy. All Rights Reserved.
          </div>
      </footer>
  );
}
