import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Loading from "./Components/Loading";
import FirstPage from "./Components/FirstPage";
import VideoIntro from "./Components/VideoIntro";
import RevenueShare from "./Components/RevenueShare";
import Home from "./Components/Home";
import RoadMap from "./Components/RoadMap";
import Community from "./Components/Community";
import InfoForm from "./Components/InfoForm";
import PreloadAssets from "./PreloadAssets";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [showFirstPage, setShowFirstPage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowFirstPage(true);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleOnEnter = () =>{
    setShowFirstPage(false);
    setShowVideo(true);
    navigate("/")
  }

  if (loading) return <Loading />;

   if (showFirstPage)
    return (
      <FirstPage
        onEnter={handleOnEnter}
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
    <>
      <ToastContainer />
      <PreloadAssets />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/revenueShare" element={<RevenueShare />} />
        <Route path="/roadMap" element={<RoadMap />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<InfoForm />} />
      </Routes>
    </>
  );
}

export default App;
