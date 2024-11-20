import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import CardLesson from "../Component/CardLesson";

const LessonPage = () => {
  const lessonData = useLoaderData();
  const { lesson_no } = useParams();
  const lessonNumber = parseInt(lesson_no);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const filteredByLessonNumber = [...lessonData].filter(
      (lesson) => lesson.lesson_no === lessonNumber
    );
    setLessons(filteredByLessonNumber);
  }, [lessonData, lesson_no]);

  return (
    <div>
      <div className="mt-12 mb-12">
        <h1 className="text-4xl font-bold text-center mb-10">
          Lesson No: {lessonNumber}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {lessons?.map((lesson) => (
            <CardLesson key={lesson.id} lesson={lesson}></CardLesson>
          ))}
        </div>
      </div>
      <div className="text-center mb-8">
        <Link
          className="px-6 py-3 bg-cool-blue text-white text-2xl font-semibold rounded-lg shadow hover:bg-red-500 transition"
          to="/start-learning"
        >
          Back to Lesson
        </Link>
      </div>
    </div>
  );
};

export default LessonPage;
