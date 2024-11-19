import React from "react";

const CardLesson = ({ lesson }) => {
    
  const { id, word, pronunciation, meaning, part_of_speech, difficulty } =
    lesson;

  const difficultyColors = {
    easy: "bg-gradient-to-r from-gray-800 via-gray-600 to-green-300",
    medium: "bg-gradient-to-r from-gray-800 via-gray-600 to-yellow-500",
    hard: "bg-gradient-to-r from-gray-800 via-gray-600 to-red-600",
  };

  return (
    <div>
      <div
        className={`*:text-white *:text-center p-4 border-l-4 rounded-lg shadow-md w-full h-full ${
          difficultyColors[difficulty] || "bg-gray-100 border-gray-400"
        }`}
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
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="mt-4 px-4 py-2 bg-cool-blue font-semibold text-white rounded-md shadow hover:bg-red-500"
          >
            When to Say
          </button>
        </div>
      </div>

      {/* <Modal key={id} lesson={lesson}></Modal> */}
      <div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Word: {word}</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      {/* modal end */}
    </div>
  );
};

// "id": "99",
//     "word": "mar",
//     "pronunciation": "mahr",
//     "meaning": "sea",
//     "part_of_speech": "noun",
//     "difficulty": "medium",
//     "Lesson_no": 7,
//     "when_to_say": "When describing the ocean or sea",
//     "example": "El mar es muy tranquilo. (ehl mahr ehs mwee trahn-KEE-loh) - The sea is very calm."
export default CardLesson;
