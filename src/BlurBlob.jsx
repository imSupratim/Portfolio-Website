// components/BlurBlob.jsx
import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ position, size }) => {
  // Destructure position and size with default values
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"></div>

      <style>{`
        @keyframes blob {
          0% { transform: scale(1); }
          33% { transform: scale(1.2); }
          66% { transform: scale(0.8); }
          100% { transform: scale(1); }
        }
        
        .animate-blob {
          animation: blob 4s infinite;
        }
      `}</style>
    </div>
  );
};

// Define prop types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
