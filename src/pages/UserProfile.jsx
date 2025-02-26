// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const UserProfile = () => {
//   const [userMemes, setUserMemes] = useState([]);
//   const [userProfile, setUserProfile] = useState({
//     name: "",
//     bio: "",
//     profilePic: "",
//   });

//   useEffect(() => {
//     const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
//     if (storedProfile) {
//       setUserProfile(storedProfile);
//     }

//     const storedMemes = JSON.parse(localStorage.getItem("memes"));
//     if (storedMemes) {
//       setUserMemes(storedMemes);
//     }
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
//       {/* Profile Card with Animation */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
//       >
//         <motion.img
//           src={userProfile.profilePic || "https://via.placeholder.com/100"}
//           alt="Profile"
//           className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
//           whileHover={{ scale: 1.1 }}
//         />
//         <h2 className="text-2xl font-bold mt-4 text-gray-800 dark:text-white">
//           {userProfile.name || "User"}
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300 text-center">
//           {userProfile.bio || "No bio available"}
//         </p>
//       </motion.div>

//       {/* Uploaded Memes Section with Animation */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Your Uploaded Memes</h2>

//         {userMemes.length > 0 ? (
//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.7 }}
//           >
//             {userMemes.map((meme, index) => (
//               <motion.div
//                 key={meme.id}
//                 className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <img src={meme.url} alt="Meme" className="rounded-lg w-full h-auto" />
//               </motion.div>
//             ))}
//           </motion.div>
//         ) : (
//           <p className="text-gray-500 dark:text-gray-400 text-center mt-4">No memes uploaded yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserProfile;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const UserProfile = () => {
//   const [userMemes, setUserMemes] = useState([]);
//   const [userProfile, setUserProfile] = useState({
//     name: "User",
//     bio: "No bio available",
//     profilePic: "https://via.placeholder.com/100", // Default profile image
//   });

//   useEffect(() => {
//     // Load user profile from local storage
//     const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
//     if (storedProfile) {
//       setUserProfile((prevProfile) => ({
//         ...prevProfile,
//         ...storedProfile,
//         profilePic: storedProfile.profilePic || "https://via.placeholder.com/100", // Fallback image
//       }));
//     }

//     // Load user memes from local storage
//     const storedMemes = JSON.parse(localStorage.getItem("memes"));
//     if (storedMemes) {
//       setUserMemes(storedMemes);
//     }
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
//       {/* Profile Card with Animation */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
//       >
//         <motion.img
//           src={userProfile.profilePic}
//           alt="Profile"
//           className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md object-cover"
//           whileHover={{ scale: 1.1 }}
//           onError={(e) => (e.target.src = "https://via.placeholder.com/100")} // Handle broken images
//         />
//         <h2 className="text-2xl font-bold mt-4 text-gray-800 dark:text-white">
//           {userProfile.name}
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300 text-center">
//           {userProfile.bio}
//         </p>
//       </motion.div>

//       {/* Uploaded Memes Section with Animation */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Your Uploaded Memes</h2>

//         {userMemes.length > 0 ? (
//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.7 }}
//           >
//             {userMemes.map((meme, index) => (
//               <motion.div
//                 key={meme.id}
//                 className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <img src={meme.url} alt="Meme" className="rounded-lg w-full h-auto" />
//               </motion.div>
//             ))}
//           </motion.div>
//         ) : (
//           <p className="text-gray-500 dark:text-gray-400 text-center mt-4">No memes uploaded yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserProfile;




import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DEFAULT_PROFILE_PIC = "https://cdn-icons-png.flaticon.com/512/149/149071.png"; // Default avatar of a person

const UserProfile = () => {
  const [userMemes, setUserMemes] = useState([]);
  const [userProfile, setUserProfile] = useState({
    name: "User",
    bio: "No bio available",
    profilePic: DEFAULT_PROFILE_PIC, // Default profile image
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editProfile, setEditProfile] = useState(userProfile);

  useEffect(() => {
    // Load user profile from local storage
    const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (storedProfile) {
      setUserProfile((prevProfile) => ({
        ...prevProfile,
        ...storedProfile,
        profilePic: storedProfile.profilePic || DEFAULT_PROFILE_PIC, // Fallback to default avatar
      }));
    }

    // Load user memes from local storage
    const storedMemes = JSON.parse(localStorage.getItem("memes"));
    if (storedMemes) {
      setUserMemes(storedMemes);
    }
  }, []);

  // Handle Profile Edit
  const handleEdit = () => {
    setEditProfile(userProfile);
    setIsEditing(true);
  };

  const handleSave = () => {
    setUserProfile(editProfile);
    localStorage.setItem("userProfile", JSON.stringify(editProfile));
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
      {/* Profile Card with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
      >
        <motion.img
          src={userProfile.profilePic}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md object-cover"
          whileHover={{ scale: 1.1 }}
          onError={(e) => (e.target.src = DEFAULT_PROFILE_PIC)} // Handle broken images
        />
        <h2 className="text-2xl font-bold mt-4 text-gray-800 dark:text-white">
          {userProfile.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center">
          {userProfile.bio}
        </p>
        <button
          onClick={handleEdit}
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Edit Profile
        </button>
      </motion.div>

      {/* Edit Profile Form */}
      {isEditing && (
        <div className="mt-4 p-4  bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <input
            type="text"
            value={editProfile.name}
            onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })}
            placeholder="Name"
            className="w-full p-2 mb-2 border rounded"
          />
          <textarea
            value={editProfile.bio}
            onChange={(e) => setEditProfile({ ...editProfile, bio: e.target.value })}
            placeholder="Bio"
            className="w-full p-2 mb-2 border rounded"
          ></textarea>
          <input
            type="text"
            value={editProfile.profilePic}
            onChange={(e) => setEditProfile({ ...editProfile, profilePic: e.target.value })}
            placeholder="Profile Picture URL"
            className="w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Uploaded Memes Section with Animation */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Your Uploaded Memes</h2>

        {userMemes.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {userMemes.map((meme, index) => (
              <motion.div
                key={meme.id}
                className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={meme.url} alt="Meme" className="rounded-lg w-full h-auto" />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center mt-4">No memes uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
