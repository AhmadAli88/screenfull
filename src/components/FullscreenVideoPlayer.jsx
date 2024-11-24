import  { useRef, useEffect, useState } from "react";
import screenfull from "screenfull";

const FullscreenVideoPlayer = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (screenfull.isEnabled && videoRef.current) {
      if (screenfull.isFullscreen) {
        screenfull.exit(); // Exit fullscreen
      } else {
        screenfull.request(videoRef.current); // Enter fullscreen for the video
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(screenfull.isFullscreen); // Update state on fullscreen change
    };

    if (screenfull.isEnabled) {
      screenfull.on("change", handleFullscreenChange); // Listen for fullscreen changes
    }

    return () => {
      if (screenfull.isEnabled) {
        screenfull.off("change", handleFullscreenChange); // Cleanup on component unmount
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <video
        ref={videoRef}
        style={{ width: "80%", maxWidth: "600px", border: "1px solid #ccc" }}
        controls
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <br />
      <button
        onClick={toggleFullscreen}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: isFullscreen ? "#f44336" : "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
      </button>
    </div>
  );
};

export default FullscreenVideoPlayer;
