// import { Link } from "react-router-dom";
// import DarkModeToggle from "./DarkModeToggle";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
//       <h1 className="text-2xl font-bold">MemeVerse</h1>
//       <ul className="flex space-x-4">
//         <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
//         <li><Link to="/explore" className="hover:text-gray-400">Explore</Link></li>
//         <li><Link to="/upload" className="hover:text-gray-400">Upload</Link></li>
//         <li><Link to="/profile" className="hover:text-gray-400">Profile</Link></li>
//         <li><Link to="/leaderboard" className="hover:text-gray-400">Leaderboard</Link></li>
//       </ul>
//       <DarkModeToggle/>
//     </nav>
//   );
// };

// export default Navbar;



import { Link } from "react-router-dom"; 
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Menu, X } from "lucide-react"; // Icons for toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Project Name */}
        <h1 className="text-2xl font-bold">MemeVerse</h1>

        {/* Desktop Menu (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/explore" className="hover:text-gray-400">Explore</Link></li>
          <li><Link to="/upload" className="hover:text-gray-400">Upload</Link></li>
          <li><Link to="/profile" className="hover:text-gray-400">Profile</Link></li>
          <li><Link to="/leaderboard" className="hover:text-gray-400">Leaderboard</Link></li>
        </ul>

        {/* Dark Mode Toggle */}
        <DarkModeToggle />

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none ml-4" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 md:hidden shadow-lg z-10">
          <ul className="flex flex-col items-center space-y-4 p-4 border-t border-gray-700">
            <li><Link to="/" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/explore" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Explore</Link></li>
            <li><Link to="/upload" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Upload</Link></li>
            <li><Link to="/profile" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Profile</Link></li>
            <li><Link to="/leaderboard" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Leaderboard</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
