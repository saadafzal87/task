import React from 'react';
import video from '../assets/video.gif';
import { FaPlay } from 'react-icons/fa';

const VideoSection = () => {
  return (
    <section className="bg-blue-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full rounded-md overflow-hidden shadow-lg">
          <img
            src={video}
            alt="Video Preview"
            className="w-full h-[400px] object-cover"
          />
          <button
            className="absolute inset-0 flex items-center justify-center bg-[#E8ECEF] bg-opacity-50 text-white rounded-full w-16 h-16 m-auto focus:outline-none"
            aria-label="Play Video"
          >
            <FaPlay className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
