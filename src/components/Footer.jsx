import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Left Section - Logo & Copyright */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">MemeVerse</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MemeVerse. All rights reserved.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-4">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/explore" className="hover:text-blue-400 transition">Explore</a>
          <a href="/upload" className="hover:text-blue-400 transition">Upload</a>
          <a href="/profile" className="hover:text-blue-400 transition">Profile</a>
        </nav>

        {/* Right Section - Social Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition text-xl">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400 transition text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-400 transition text-xl">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
