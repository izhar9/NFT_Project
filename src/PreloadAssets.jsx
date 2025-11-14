import { useEffect } from "react";

const images = [
  "/img/logo.png",
  "/img/2nd.jpg",
  "/img/community.jpg",
  "/img/roadMap.jpg",
];

const videos = [
  "/videos/main.mp4",
  "/videos/3rd.mp4",
];

export default function PreloadAssets() {
  useEffect(() => {
    // preload images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // preload videos
    videos.forEach((src) => {
      const video = document.createElement("video");
      video.src = src;
      video.preload = "auto";
    });
  }, []);

  return null;
}
