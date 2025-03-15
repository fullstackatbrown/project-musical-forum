"use client";
import React, { useState } from "react";

const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Display only up to 10 thumbnails, remove slice if you want all thumbnails.
  const thumbnailImages = images.slice(0, 10);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div style={{ padding: "100px" }}>
      {/* Fixed-size container for the main image */}
      <div
        style={{
          width: "600px",
          height: "400px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto", // Centers this container horizontally
          marginBottom: "10px", // Spacing below the big image
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

      {/* Scrollable list of small square thumbnails */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          maxWidth: "600px",
          margin: "0 auto", // Centers thumbnail row horizontally
          gap: "2px", // Gap between thumbnails
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
                  ? "2px solid white"
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
    </div>
  );
};

export default ImageGallery;
