import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js"; // Redux Store
import Home from "./pages/Home.jsx";
import MemeExplorer from "./pages/MemeExplorer";
import MemeUpload from "./pages/MemeUpload";
import MemeDetails from "./pages/MemeDetails";
import UserProfile from "./pages/UserProfile";
import Leaderboard from "./pages/Leaderboard";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const memes = JSON.parse(localStorage.getItem("memes")) || [];

  return (
    <Provider store={store}>
      <Router>
        {/* Full-page flexbox layout */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          {/* Main content should grow to fill space */}
          <main className="flex-grow container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<MemeExplorer />} />
              <Route path="/upload" element={<MemeUpload />} />
              <Route path="/meme/:id" element={<MemeDetails />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/leaderboard" element={<Leaderboard memes={memes} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
