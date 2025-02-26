import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const MemeDetails = () => {
  const { id } = useParams();
  const [meme, setMeme] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const memes = JSON.parse(localStorage.getItem("memes")) || [];
    const selectedMeme = memes.find((m) => m.id === parseInt(id));
    if (selectedMeme) {
      setMeme(selectedMeme);
      setLikes(parseInt(localStorage.getItem(`likes_${id}`)) || 0);
      setComments(JSON.parse(localStorage.getItem(`comments_${id}`)) || []);
    }
  }, [id]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes_${id}`, newLikes);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() === "") return;
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
    setNewComment("");
  };

  if (!meme) {
    return <h2 className="text-center text-xl mt-10">Meme not found!</h2>;
  }

  return (
    <motion.div
      className="max-w-2xl mx-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center">Meme Details</h2>
      <div className="mt-4 border rounded-lg p-4">
        <img src={meme.url} alt="Meme" className="w-full rounded-lg" />
        <p className="mt-2" dangerouslySetInnerHTML={{ __html: meme.caption }}></p>
        <div className="flex items-center justify-between mt-4">
          <motion.button
            onClick={handleLike}
            className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center"
            whileTap={{ scale: 0.9 }}
          >
            ❤️ {likes}
          </motion.button>
          <button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            📤 Share
          </button>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-bold">Comments</h3>
          <div className="mt-2">
            {comments.map((comment, index) => (
              <p key={index} className="bg-gray-200 p-2 rounded my-1">
                {comment}
              </p>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="border p-2 flex-1 rounded"
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              ➕ Add
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MemeDetails;
