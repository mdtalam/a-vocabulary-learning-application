import 'animate.css';
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const StartLearning = () => {
  const navigate = useNavigate()
  const lessons = useLoaderData();

  return (
    <div>
      <section className="bg-gray-50 min-h-screen py-16 px-6 sm:px-12">
        <div className="container mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10 animate__animated animate__slideInRight">
            Let’s Learn
          </h1>

          {/* Lessons Section */}
          <Link  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {lessons?.map((lesson) => (
              <Link
              
                key={lesson.id}
                to={`/lesson/${lesson.Lesson_no}`}
                className="bg-cool-blue p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center cursor-pointer text-xl font-semibold text-white animate__animated animate__zoomIn"
              >
                Lesson-{lesson.Lesson_no}
              </Link>
            ))}
          </Link>

          {/* Tutorial Section */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center animate__animated animate__slideInLeft">
              Learn the Alphabet
            </h2>

            {/* Video Section */}
            <div className="flex justify-center mb-6">
              <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/MwomqYAMVdc?si=XEeqO1E4MNEKpN3q"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            {/* View More Button */}
            <div className="text-center">
              <button
                onClick={() => navigate("/tutorials")}
                className="px-6 py-3 bg-cool-blue text-white text-2xl font-semibold rounded-lg shadow hover:bg-red-500 transition animate__animated animate__lightSpeedInRight"
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartLearning;
