import { useEffect, useRef } from "react";
const VideoIntro = ({onVideoEnd}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.addEventListener("ended", onVideoEnd);
      return () => video.removeEventListener("ended", onVideoEnd);
    }
  }, [onVideoEnd]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
      }}
    >
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        style={{ objectFit: "cover" }}
      >
        <source src="/videos/3rd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default VideoIntro;
