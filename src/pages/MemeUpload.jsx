import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill"; // Rich text editor for captions
import "react-quill/dist/quill.snow.css"; // Quill styles
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MemeUpload = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState(""); // User-entered caption
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [savedMemes, setSavedMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [aiCaption, setAiCaption] = useState(""); // AI-generated caption

  // Load saved memes from Local Storage
  useEffect(() => {
    const memes = JSON.parse(localStorage.getItem("memes")) || [];
    setSavedMemes(memes);
  }, []);

  const deleteMeme = (id) => {
    const updatedMemes = savedMemes.filter((meme) => meme.id !== id);
    setSavedMemes(updatedMemes);
    localStorage.setItem("memes", JSON.stringify(updatedMemes));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Only image files (JPG, PNG, GIF) are allowed!");
      return;
    }

    setImage(file);
    setUploadedImageUrl(URL.createObjectURL(file)); // Show preview before upload
  };

   // AI Meme Caption Generator using Imgflip API
  const generateAICaption = async () => {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();

      if (data.success) {
        const memes = data.data.memes;
        const randomMeme = memes[Math.floor(Math.random() * memes.length)]; // Pick a random meme
        setAiCaption(`"${randomMeme.name}"`); // AI-generated caption
      } else {
        alert("Failed to generate AI caption!");
      }
    } catch (error) {
      console.error("AI Caption Error:", error);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET); // Use the Upload Preset
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME); // Cloudinary Cloud Name

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setLoading(false);

      if (data.secure_url) {
        const meme = { id: Date.now(), url: data.secure_url, caption };
        const updatedMemes = [...savedMemes, meme];

        setSavedMemes(updatedMemes);
        localStorage.setItem("memes", JSON.stringify(updatedMemes));
        alert("Upload Successful!");
      } else {
        alert("Upload failed. Check Cloudinary settings.");
      }
    } catch (error) {
      console.error("Upload Error:", error);
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center space-y-6 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 className="text-3xl font-bold" whileHover={{ scale: 1.1 }}>
        Upload Your Meme
      </motion.h2>

      {/* Image Upload */}
      <motion.input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="border p-2"
        whileHover={{ scale: 1.05 }}
      />

      {/* Meme Preview */}
      {uploadedImageUrl && (
        <motion.div className="mt-4" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
          <h3 className="text-lg font-semibold">Meme Preview:</h3>
          <LazyLoadImage
            src={uploadedImageUrl}
            alt="Preview"
            effect="blur"
            className="mt-2 w-64 rounded-lg"
          />
        </motion.div>
      )}
      {/* AI Caption Button */}
     <motion.button
        onClick={generateAICaption}
        className="bg-purple-500 text-white p-2 rounded"
        whileHover={{ scale: 1.1 }}
      >
        Generate AI Caption
      </motion.button>
      {aiCaption && <p className="text-lg font-bold mt-2">AI Suggestion: {aiCaption}</p>}

      {/* Text Editor for Caption */}
      <ReactQuill value={caption} onChange={setCaption} placeholder="Enter a funny caption..." />

      {/* Upload Button */}
      <motion.button
        onClick={handleUpload}
        className="bg-blue-500 text-white p-2 rounded"
        whileHover={{ scale: 1.1 }}
      >
        {loading ? "Uploading..." : "Upload Meme"}
      </motion.button>

      {/* Display Previously Uploaded Memes */}
      <div className="mt-6 w-full">
        <h3 className="text-xl font-bold mb-6">Uploaded Memes:</h3>
        <div className="grid grid-cols-2 gap-4">
          {savedMemes.map((meme) => (
            <motion.div
              key={meme.id}
              className="p-2 border rounded-lg relative"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/meme/${meme.id}`}>
                <LazyLoadImage
                  src={meme.url}
                  alt="Meme"
                  effect="blur"
                  className="w-full h-auto rounded cursor-pointer"
                />
              </Link>
              <p className="mt-2 text-center" dangerouslySetInnerHTML={{ __html: meme.caption }}></p>
              <motion.button
                onClick={() => deleteMeme(meme.id)}
                className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded"
                whileHover={{ scale: 1.1 }}
              >
                ❌
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MemeUpload;
