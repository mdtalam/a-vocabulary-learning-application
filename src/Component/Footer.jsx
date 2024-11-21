import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cool-blue text-white py-10">
      <div className="container mx-auto px-4 pl-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">
              <span className="font-bold">Address:</span> Sonadanga Residential Area (R/A), Khulna, Bangladesh
            </p>
            <p className="mb-2">
              <span className="font-bold">Phone:</span> +8801911424195
            </p>
            <p className="mb-2">
              <span className="font-bold">Email:</span> rafsantasnimrafsan@gmail.com
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/rafsan.tasnim/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="https://x.com/mdtalambd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-200"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/rafsantasnim/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/mdtalambd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-600"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a
                href="https://github.com/tasnimalam1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-gray-400"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center border-t border-gray-700 pt-6">
          <p>&copy; {new Date().getFullYear()} Lingo Bingo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
