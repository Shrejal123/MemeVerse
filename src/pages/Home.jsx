// import React from "react";

// const Home = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold">Welcome to MemeVerse</h1>
//       <p>Explore trending memes!</p>
//     </div>
//   );
// };

// export default Home;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMemes } from "../store/memeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { trendingMemes, loading } = useSelector((state) => state.memes);

  useEffect(() => {
    dispatch(getMemes());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🔥 Trending Memes</h1>

      {loading ? (
        <p>Loading memes...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {trendingMemes.map((meme) => (
            <div key={meme.id} className="p-2 border rounded">
              <img src={meme.url} alt={meme.name} className="w-full rounded" />
              <p className="text-center font-semibold mt-2">{meme.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
