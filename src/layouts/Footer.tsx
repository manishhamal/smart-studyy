import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const subscribeNewsletter = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here (e.g., sending email to backend)
    console.log("Subscribing email:", email);
    setEmail(""); // Clear the input after submission
  };

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Smart Study</h3>
            <p className="mb-4">Your Essential Study Materials.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-themeColor">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-themeColor">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-themeColor">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-themeColor">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-themeColor">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-themeColor">
                  Subjects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-themeColor">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-themeColor">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-themeColor">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-themeColor"></i>
                <span>123 E-Commerce St, City, Country</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-2 text-themeColor"></i>
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-themeColor"></i>
                <span>support@vueecommerce.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form onSubmit={subscribeNewsletter} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-themeColor text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-themeColor px-4 py-2 rounded-r-lg hover:opacity-90 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Smart Study. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
