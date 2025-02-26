
// import React from "react";

// const Leaderboard = ({ memes }) => {
//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-4">Leaderboard (Top 10 Memes)</h2>
//       <div className="grid grid-cols-1 gap-4">
//         {[...memes].sort((a, b) => b.likes - a.likes).slice(0, 10).map((meme) => (
//           <div key={meme.id} className="p-2 border rounded-lg flex justify-between items-center">
//             <img src={meme.url} alt="Meme" className="w-16 h-16 rounded shadow-lg" />
//             <p className="text-sm" dangerouslySetInnerHTML={{ __html: meme.caption }}></p>
//             <p className="text-lg font-bold">❤️ {meme.likes}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Leaderboard;




// import React, { useState, useEffect } from "react";

// const Leaderboard = () => {
//   const [topMemes, setTopMemes] = useState([]);

//   useEffect(() => {
//     const memes = JSON.parse(localStorage.getItem("memes")) || [];
    
//     // Retrieve likes for each meme from local storage
//     const memesWithLikes = memes.map(meme => ({
//       ...meme,
//       likes: parseInt(localStorage.getItem(`likes_${meme.id}`)) || 0
//     }));

//     // Sort by likes and get top 10
//     const sortedMemes = [...memesWithLikes].sort((a, b) => b.likes - a.likes).slice(0, 10);
//     setTopMemes(sortedMemes);
//   }, []);

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-4">Leaderboard (Top 10 Memes)</h2>
//       <div className="grid grid-cols-1 gap-4">
//         {topMemes.length > 0 ? (
//           topMemes.map((meme, index) => (
//             <div key={meme.id} className="p-2 border rounded-lg flex justify-between items-center bg-white shadow-lg">
//               <span className="text-xl font-bold">{index + 1}.</span>
//               <img src={meme.url} alt="Meme" className="w-16 h-16 rounded shadow-lg" />
//               <p className="text-sm flex-1 px-2" dangerouslySetInnerHTML={{ __html: meme.caption }}></p>
//               <p className="text-lg font-bold">❤️ {meme.likes}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No memes uploaded yet!</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Leaderboard;



import React, { useState, useEffect } from "react";

const Leaderboard = () => {
  const [topMemes, setTopMemes] = useState([]);

  useEffect(() => {
    const memes = JSON.parse(localStorage.getItem("memes")) || [];

    // Retrieve likes for each meme from local storage
    const memesWithLikes = memes.map((meme) => ({
      ...meme,
      likes: parseInt(localStorage.getItem(`likes_${meme.id}`)) || 0,
    }));

    // Sort by likes and get top 10
    const sortedMemes = [...memesWithLikes].sort((a, b) => b.likes - a.likes).slice(0, 10);
    setTopMemes(sortedMemes);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto rounded-2xl shadow-lg transition-all duration-300 
                    bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-6 tracking-wide">🏆 Meme Leaderboard</h2>

      {/* Meme List */}
      <div className="grid grid-cols-1 gap-4">
        {topMemes.length > 0 ? (
          topMemes.map((meme, index) => (
            <div
              key={meme.id}
              className="p-4 rounded-xl flex gap-5 items-center justify-between shadow-lg border backdrop-blur-lg transition-all duration-300
                         bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
            >
              {/* Ranking Number */}
              <span className="text-xl font-bold gap-3">{index + 1}.</span>

              {/* Meme Image */}
              <img src={meme.url} alt="Meme" className="w-20 h-20 gap-3 rounded-lg shadow-md" />

              {/* Meme Caption */}
              <p className="text-md flex-1 px-4 " dangerouslySetInnerHTML={{ __html: meme.caption }}></p>

              {/* Likes */}
              <p className="text-xl font-bold flex items-center">
                ❤️ {meme.likes}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg">No memes uploaded yet! 📭</p>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
