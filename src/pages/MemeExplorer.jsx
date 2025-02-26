
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


const MemeExplorer = () => {
  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("likes");
  const [category, setCategory] = useState("All");
  const [visibleMemes, setVisibleMemes] = useState(12);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        const categories = ["Trending", "New", "Classic", "Random"];

        // Assign categories randomly
        const enrichedMemes = data.data.memes.map((meme) => ({
          ...meme,
          likes: Math.floor(Math.random() * 500),
          comments: Math.floor(Math.random() * 100),
          category: categories[Math.floor(Math.random() * categories.length)]
        }));

        setMemes(enrichedMemes);
        setFilteredMemes(enrichedMemes);
      });
  }, []);

  // Debounced Search Function
  const handleSearch = useCallback(
    debounce((query) => {
      setSearchTerm(query);
      const filtered = memes.filter((meme) =>
        meme.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMemes(filtered);
    }, 500),
    [memes]
  );

  // Sorting Function
  const handleSort = (option) => {
    setSortOption(option);
    const sortedMemes = [...filteredMemes].sort((a, b) => b[option] - a[option]);
    setFilteredMemes(sortedMemes);
  };

  // Category Filtering
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    if (selectedCategory === "All") {
      setFilteredMemes(memes);
    } else {
      setFilteredMemes(memes.filter((meme) => meme.category === selectedCategory));
    }
  };

  // Load More (Infinite Scroll)
  const loadMoreMemes = () => {
    setVisibleMemes((prev) => prev + 12);
  };

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Explore Memes</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search memes..."
        className="border p-2 w-full my-2 rounded md:w-2/3 mx-auto block"
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* Sort Options */}
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-2 my-4">
        <select
          onChange={(e) => handleSort(e.target.value)}
          className="p-2 border rounded w-full md:w-auto"
        >
          <option value="likes">Sort by Likes</option>
          <option value="comments">Sort by Comments</option>
        </select>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {["All", "Trending", "New", "Classic", "Random"].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded text-sm md:text-base ${
                category === cat ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Meme Grid (Responsive) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMemes.slice(0, visibleMemes).map((meme) => (
          <Link key={meme.id} to={`/meme/${meme.id}`} className="block">
            {/* <img
              src={meme.url}
              alt={meme.name}
              className="rounded-lg w-full h-auto shadow-md transition-transform transform hover:scale-105"
            /> */}

<LazyLoadImage
  src={meme.url}
  alt={meme.name}
  effect="blur" // Adds a blur effect while loading
  className="rounded-lg w-full h-auto shadow-md transition-transform transform hover:scale-105"
/>

            
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {visibleMemes < filteredMemes.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreMemes}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default MemeExplorer;
