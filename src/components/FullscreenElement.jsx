import { useRef, useState, useEffect } from "react";
import screenfull from "screenfull";

const FullscreenElement = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const elementRef = useRef(null); // Reference to the element to be made fullscreen

  const toggleFullscreen = () => {
    if (elementRef.current && screenfull.isEnabled) {
      if (screenfull.isFullscreen) {
        screenfull.exit(); // Exit fullscreen
      } else {
        screenfull.request(elementRef.current); // Request fullscreen for the element
      }
    }
  };

  useEffect(() => {
    // Listen for fullscreen change events
    const onFullscreenChange = () => {
      setIsFullscreen(screenfull.isFullscreen); // Update state based on fullscreen mode
    };

    screenfull.on("change", onFullscreenChange);

    return () => {
      screenfull.off("change", onFullscreenChange);
    };
  }, []);

  return (
    <div>
      <button onClick={toggleFullscreen}>
        {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      </button>
      <div
        ref={elementRef}
        style={{
          width: "100%",
          height: "300px",
          background: "lightblue",
          textAlign: "center",
          lineHeight: "300px",
        }}
      >
        Click button to toggle fullscreen for this element
      </div>
    </div>
  );
};

export default FullscreenElement;
