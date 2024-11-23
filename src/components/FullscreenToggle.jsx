import { useState, useEffect } from "react";
import screenfull from "screenfull";

const FullscreenToggle = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
      if (screenfull.isFullscreen) {
        screenfull.exit(); // Exit fullscreen
      } else {
        screenfull.request(); // Request fullscreen
      }
    }
  };

  useEffect(() => {
    // Listen for fullscreen change events
    const onFullscreenChange = () => {
      setIsFullscreen(screenfull.isFullscreen); // Update state based on fullscreen mode
    };

    screenfull.on("change", onFullscreenChange);

    // Cleanup listener on component unmount
    return () => {
      screenfull.off("change", onFullscreenChange);
    };
  }, []);

  return (
    <div>
      <button onClick={toggleFullscreen}>
        {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      </button>
    </div>
  );
};

export default FullscreenToggle;
