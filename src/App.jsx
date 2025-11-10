import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Loading from "./Components/Loading";
import FirstPage from "./Components/FirstPage";
import VideoIntro from "./Components/VideoIntro";
import Home from "./Components/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const [showFirstPage, setShowFirstPage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowFirstPage(true);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

   if (showFirstPage)
    return (
      <FirstPage
        onEnter={() => {
          setShowFirstPage(false);
          setShowVideo(true);
        }}
      />
    );

  if (showVideo)
    return (
      <VideoIntro
        onVideoEnd={() => {
          setShowVideo(false);
        }}
      />
    );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
