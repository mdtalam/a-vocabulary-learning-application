import React, { useEffect, useState } from "react";
import { AiOutlineSound } from "react-icons/ai";

const CardLesson = ({ lesson }) => {
  const {
    id,
    word,
    pronunciation,
    meaning,
    part_of_speech,
    difficulty,
    when_to_say,
    example,
  } = lesson;

  const [modalData, setModalData] = useState(null);

  const difficultyColors = {
    easy: "bg-gradient-to-r from-gray-800 via-gray-600 to-green-300",
    medium: "bg-gradient-to-r from-gray-800 via-gray-600 to-yellow-500",
    hard: "bg-gradient-to-r from-gray-800 via-gray-600 to-red-600",
  };

  // Function to pronounce the word

  const pronounceWord = (wordToSay) => {
    const utterance = new SpeechSynthesisUtterance(wordToSay);
    console.log(utterance);
    utterance.lang = "es-ES"; //spanish language
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    window.speechSynthesis.onvoiceschanged = () => {
      console.log("Voices loaded:", window.speechSynthesis.getVoices());
    };
  }, []);

  const openModal = () => {
    setModalData({
      word,
      id,
      pronunciation,
      meaning,
      part_of_speech,
      difficulty,
      when_to_say,
      example,
    });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div>
      {/* Card */}
      <div
        className={`*:text-white *:text-center p-4 border-l-4 rounded-lg shadow-md w-full h-full ${
          difficultyColors[difficulty] || "bg-gray-100 border-gray-400"
        }`}
        onClick={() => pronounceWord(word)} // Pronounce word on card click
      >
        <h3 className="text-lg font-bold">Word: {word}</h3>
        <p>
          <span className="font-semibold">Meaning:</span> {meaning}
        </p>
        <p>
          <span className="font-semibold">Pronunciation:</span> {pronunciation}
        </p>
        <p>
          <span className="font-semibold">Part of Speech:</span>{" "}
          {part_of_speech}
        </p>
        <div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              openModal();
            }}
            className="mt-4 px-4 py-2 bg-cool-blue font-semibold text-white rounded-md shadow hover:bg-red-500"
          >
            When to Say
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div
          id="modal"
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-cool-blue text-white rounded-lg shadow-lg p-6 w-full max-w-xl mx-4 sm:mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl">
            <h3 className="text-lg font-bold">Word: {modalData.word}</h3>
            <p className="mt-4">
              <span className="font-semibold">Meaning:</span>{" "}
              {modalData.meaning}
            </p>
            <p className="mt-4">
              <span className="font-semibold">When to Say:</span>{" "}
              {modalData.when_to_say}
            </p>
            <p className="mt-4">
              <span className="font-semibold">Example:</span>{" "}
              {modalData.example}
            </p>
            <div className="flex justify-between mt-6 space-x-4">
              {/* Say Button */}
              <button
                onClick={() => pronounceWord(modalData.word)}
                className="flex-1 px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition"
              >
                <AiOutlineSound className="inline-block mr-2" />
                Say
              </button>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardLesson;
