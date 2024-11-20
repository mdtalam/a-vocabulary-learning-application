
import React from "react";
import { useNavigate } from "react-router-dom";

const Tutorials = () => {
  const navigate = useNavigate();

  const videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video URLs
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/lTTajzrSkCw",
    "https://www.youtube.com/embed/kJQP7kiw5Fk",
    "https://www.youtube.com/embed/YbJOTdZBX1g",
    "https://www.youtube.com/embed/RgKAFK5djSk",
    "https://www.youtube.com/embed/JGwWNGJdvx8",
    "https://www.youtube.com/embed/JGwWNGJdvx8",
    "https://www.youtube.com/embed/JGwWNGJdvx8",
];

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-6">
        Learn [Language Name]
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {videos.map((videoUrl, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
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