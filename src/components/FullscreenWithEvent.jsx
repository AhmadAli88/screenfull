import  { useState, useEffect } from "react";
import screenfull from "screenfull";

const FullscreenWithEvent = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenChange = () => {
    if (screenfull.isFullscreen) {
      console.log("Entered fullscreen mode");
    } else {
      console.log("Exited fullscreen mode");
    }
    setIsFullscreen(screenfull.isFullscreen); // Update state based on fullscreen mode
  };

  useEffect(() => {
    screenfull.on("change", handleFullscreenChange); // Listen for fullscreen state changes

    return () => {
      screenfull.off("change", handleFullscreenChange); // Cleanup on component unmount
    };
  }, []);

  return (
    <div>
      <button onClick={() => screenfull.request()}>
        {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      </button>
    </div>
  );
};

export default FullscreenWithEvent;
