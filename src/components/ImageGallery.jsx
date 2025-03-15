"use client";
import React, { useState, useEffect, useRef } from "react";

const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbnailImages = images;
  const thumbContainerRef = useRef(null);
  const scrollInterval = useRef(null);

  // Auto-slide main image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Mouse move handler for the thumbnails container
  const handleMouseMove = (e) => {
    const container = thumbContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left; // Mouse position relative to container
    const threshold = 50; // Distance from edge (in px) where scrolling begins
    let scrollDirection = 0;

    if (mouseX < threshold) {
      scrollDirection = -1; // Scroll left
    } else if (mouseX > rect.width - threshold) {
      scrollDirection = 1; // Scroll right
    }

    // Clear any existing interval
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }

    // Start a new interval if needed
    if (scrollDirection !== 0) {
      scrollInterval.current = setInterval(() => {
        container.scrollLeft += scrollDirection * 5; // Adjust speed factor as needed
      }, 30);
    }
  };

  // Stop auto-scrolling when mouse leaves the container
  const handleMouseLeave = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, []);

  return (
    <div style={{ padding: "100px" }}>
      {/* Main Image Container */}
      <div
        style={{
          width: "600px",
          height: "400px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto", // Centers the container horizontally
          marginBottom: "10px",
        }}
      >
        <img
          src={images[currentImageIndex]}
          alt={`Main view of image #${currentImageIndex}`}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Thumbnails Container */}
      <div
        ref={thumbContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          display: "flex",
          overflowX: "auto",
          maxWidth: "600px",
          margin: "0 auto", // Centers thumbnail row horizontally
          gap: "2px",
          scrollbarWidth: "none", // Hides scrollbar
        }}
      >
        {thumbnailImages.map((imgSrc, index) => (
          <div
            key={index}
            style={{
              width: "80px",
              height: "80px",
              border:
                index === currentImageIndex
                  ? "2px solid white" // or no color
                  : "2px solid transparent",
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            <img
              src={imgSrc}
              alt={`Thumbnail #${index}`}
              onClick={() => handleThumbnailClick(index)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </div>
        ))}
      </div>

      {/* Style block to hide scrollbar in WebKit browsers */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
