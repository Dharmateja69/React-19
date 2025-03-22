import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white border-t border-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
        {/* Top columns */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">📦 About Us</h3>
            <p className="text-sm text-gray-300">
              We’re passionate about delivering the best shopping experience for
              you. 🛒✨
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-2">🛍️ Products</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>Shoes 👟</li>
              <li>Watches ⌚</li>
              <li>Accessories 🎒</li>
            </ul>
          </div>

          {/* Contact Page */}
          <div>
            <h3 className="text-lg font-semibold mb-2">📞 Contact</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>Email: support@shopzone.com 📧</li>
              <li>Phone: +123-456-7890 📱</li>
              <li>Location: New York, USA 🌍</li>
            </ul>
          </div>
        </div>

        {/* Bottom message */}
        <h3 className="text-center text-sm text-gray-400 mt-4">
          With love ❤️ by Sidhu.
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
