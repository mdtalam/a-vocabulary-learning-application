
import React from "react";
import { useNavigate } from "react-router-dom";

const Tutorials = () => {
  const navigate = useNavigate();

  const videos = [
    "https://www.youtube.com/embed/zwbmK3wrBa0", // Example video URLs
    "https://www.youtube.com/embed/cywn0FJKWk4",
    "https://www.youtube.com/embed/M11WPNYOKbg",
    "https://www.youtube.com/embed/wJsc6DuNgl0",
    "https://www.youtube.com/embed/fnagqHT-lps",
    "https://www.youtube.com/embed/DAp_v7EH9AA",
    "https://www.youtube.com/embed/lJw40ENfr2w",
    "https://www.youtube.com/embed/0Odnbvov9N0",
    "https://www.youtube.com/embed/Mh2KZhFoSIA",
    "https://www.youtube.com/embed/8hkXxmtvcdw",
];

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-6">
        Learn Spanish
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {videos.map((videoUrl, index) => (
          <div key={index} className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full rounded-lg shadow"
              src={videoUrl}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => navigate("/start-learning")}
          className="px-6 py-3 bg-cool-blue text-white font-semibold text-lg rounded-lg shadow hover:bg-blue-700"
        >
          Learn Vocabularies
        </button>
      </div>
    </div>
  );
};




export default Tutorials;