import axios from "axios"; 

// Imgflip API for fetching trending memes
const MEME_API_URL = "https://api.imgflip.com/get_memes";

// ImgBB API for image uploads
const IMGBB_API_URL = "https://api.imgbb.com/1/upload";

// ✅ Load API key from environment variable
const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;  

// Fetch trending memes
export const fetchMemes = async () => {
  try {
    const response = await axios.get(MEME_API_URL);
    return response.data.data.memes;  // Return only memes array
  } catch (error) {
    console.error("Error fetching memes:", error);
    return [];
  }
};

// Upload an image to ImgBB
export const uploadMeme = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);
  formData.append("key", IMGBB_API_KEY);  // ✅ Use the .env variable

  try {
    const response = await axios.post(IMGBB_API_URL, formData);
    return response.data.data.url;  // Return uploaded image URL
  } catch (error) {
    console.error("Error uploading meme:", error);
    return null;
  }
};
