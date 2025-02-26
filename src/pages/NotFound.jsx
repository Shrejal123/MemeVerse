import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const meme404 = [
  "https://i.imgflip.com/4t0m5.jpg",
  "https://i.imgflip.com/1bij.jpg",
  "https://i.imgflip.com/26am.jpg",
  "https://i.imgflip.com/2hgfw.jpg",
  "https://i.imgflip.com/3lmzyx.jpg",
];

const NotFound = () => {
  const [randomMeme, setRandomMeme] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * meme404.length);
    setRandomMeme(meme404[randomIndex]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center">
      <motion.h1
        className="text-6xl font-extrabold text-red-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mt-2">
        Oops! This page doesn't exist. Maybe it's lost in the meme universe. 🚀
      </p>
      
      <motion.img
        src={randomMeme}
        alt="404 Meme"
        className="mt-6 w-96 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <Link to="/" className="mt-6">
        <motion.button
          className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Go Back Home 🏠
        </motion.button>
      </Link>
    </div>
  );
};

export default NotFound;
