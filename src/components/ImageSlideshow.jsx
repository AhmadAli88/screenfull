import  { useRef, useState } from "react";
import screenfull from "screenfull";

const ImageSlideshow = () => {
  const images = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
  ];
  const [currentIndex, setCurrentIndex] = useState(0); // Current image index
  const slideshowRef = useRef(null); // Reference to the slideshow container

  // Toggle fullscreen mode for the slideshow
  const toggleFullscreen = () => {
    if (screenfull.isEnabled && slideshowRef.current) {
      screenfull.toggle(slideshowRef.current);
    }
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div
        ref={slideshowRef}
        style={{
          position: "relative",
          width: "80%",
          margin: "20px auto",
          border: "2px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: "100%", height: "auto" }}
        />
        {/* Previous Button */}
        <button
          onClick={prevImage}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
          }}
        >
          &lt;
        </button>
        {/* Next Button */}
        <button
          onClick={nextImage}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
          }}
        >
          &gt;
        </button>
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button
          onClick={toggleFullscreen}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Toggle Fullscreen
        </button>
      </div>
    </div>
  );
};

export default ImageSlideshow;
