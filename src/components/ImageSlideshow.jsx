import { useRef, useState, useEffect } from 'react';
import screenfull from 'screenfull';

const ImageSlideshow = () => {
  const images = [
    'https://images.unsplash.com/photo-1695384287398-5781a1f51c31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1716547286289-3e650d7bdf7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVuc3BhbHNofGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1681006128855-2ce492e8d6f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHVuc3BhbHNofGVufDB8fDB8fHww',
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Current image index
  const [isFullscreen, setIsFullscreen] = useState(false); // Fullscreen mode state
  const slideshowRef = useRef(null); // Reference to the slideshow container

  useEffect(() => {
    if (screenfull.isEnabled) {
      const onChange = () => setIsFullscreen(screenfull.isFullscreen);
      screenfull.on('change', onChange);

      return () => screenfull.off('change', onChange);
    }
  }, []);

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

  // Handle indicator click
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {/* Slideshow Container */}
      <div
        ref={slideshowRef}
        style={{
          position: 'relative',
          width: isFullscreen ? '100vw' : '80%',
          height: isFullscreen ? '100vh' : '300px',
          margin: isFullscreen ? '0' : '20px auto',
          border: isFullscreen ? 'none' : '2px solid #ddd',
          borderRadius: isFullscreen ? '0' : '10px',
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Ensures the image covers the container proportionally
          }}
        />

        {/* Previous Button */}
        <button
          onClick={prevImage}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          &#8592;
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          &#8594;
        </button>
      </div>

      {/* Indicators */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
          gap: '10px',
        }}
      >
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleIndicatorClick(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: currentIndex === index ? '#4CAF50' : '#ddd',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Fullscreen Button */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={toggleFullscreen}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Toggle Fullscreen
        </button>
      </div>
    </div>
  );
};

export default ImageSlideshow;









// import { useRef, useState } from 'react';
// import screenfull from 'screenfull';

// const ImageSlideshow = () => {
//   const images = [
//     'https://images.unsplash.com/photo-1695384287398-5781a1f51c31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D',
//     'https://images.unsplash.com/photo-1716547286289-3e650d7bdf7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVuc3BhbHNofGVufDB8fDB8fHww',
//     'https://images.unsplash.com/photo-1681006128855-2ce492e8d6f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHVuc3BhbHNofGVufDB8fDB8fHww',
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0); // Current image index
//   const slideshowRef = useRef(null); // Reference to the slideshow container

//   // Toggle fullscreen mode for the slideshow
//   const toggleFullscreen = () => {
//     if (screenfull.isEnabled && slideshowRef.current) {
//       screenfull.toggle(slideshowRef.current);
//     }
//   };

//   // Navigate to the previous image
//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   // Navigate to the next image
//   const nextImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Handle indicator click
//   const handleIndicatorClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div>
//       {/* Slideshow Container */}
//       <div
//         ref={slideshowRef}
//         style={{
//           position: 'relative',
//           width: '80%',
//           margin: '20px auto',
//           border: '2px solid #ddd',
//           borderRadius: '10px',
//           overflow: 'hidden',
//           backgroundColor: '#000',
//         }}
//       >
//         <div style={{ width: '300px', height: '300px' }}>
//           <img
//             src={images[currentIndex]}
//             alt={`Slide ${currentIndex + 1}`}
//             style={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover', // Ensures the image covers the container proportionally
//               borderRadius: '10px', // Optional: adds rounded corners
//             }}
//           />
//         </div>

//         {/* Previous Button */}
//         <button
//           onClick={prevImage}
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '10px',
//             transform: 'translateY(-50%)',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             color: 'white',
//             border: 'none',
//             padding: '10px 15px',
//             cursor: 'pointer',
//             borderRadius: '5px',
//           }}
//         >
//           &#8592;
//         </button>

//         {/* Next Button */}
//         <button
//           onClick={nextImage}
//           style={{
//             position: 'absolute',
//             top: '50%',
//             right: '10px',
//             transform: 'translateY(-50%)',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             color: 'white',
//             border: 'none',
//             padding: '10px 15px',
//             cursor: 'pointer',
//             borderRadius: '5px',
//           }}
//         >
//           &#8594;
//         </button>
//       </div>

//       {/* Indicators */}
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           marginTop: '10px',
//           gap: '10px',
//         }}
//       >
//         {images.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => handleIndicatorClick(index)}
//             style={{
//               width: '12px',
//               height: '12px',
//               borderRadius: '50%',
//               backgroundColor: currentIndex === index ? '#4CAF50' : '#ddd',
//               cursor: 'pointer',
//               transition: 'background-color 0.3s ease',
//             }}
//           />
//         ))}
//       </div>

//       {/* Fullscreen Button */}
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <button
//           onClick={toggleFullscreen}
//           style={{
//             padding: '10px 20px',
//             fontSize: '16px',
//             backgroundColor: '#4CAF50',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//           }}
//         >
//           Toggle Fullscreen
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlideshow;
