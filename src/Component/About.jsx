import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  

  return (
    <div>
      <section className="bg-gray-100 py-16 px-8">
        <div className="container mx-auto text-center">
          {/* our mission */}
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            At <strong>Lingo Bingo</strong>, our mission is to empower learners
            worldwide to break language barriers by mastering vocabulary in a
            fun, engaging, and effective way. We believe that vocabulary is the
            foundation of communication, and our platform is designed to make
            learning new words simple, memorable, and enjoyable.
          </p>
          {/* Learning Explanation */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">
            How it Works
          </h3>
          <p className="text-xl text-gray-600 mb-6">
            Our platform offers an interactive learning experience by providing:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* feature 1 */}
            <div className=" bg-cool-blue p-6 rounded-lg shadow" data-aos="fade-right">
                <h4 className="text-lg font-semibold mb-3 text-white">Personalized Lessons</h4>
                <p className="text-gray-300">Learn at your own pace with lessons tailored to your skill level. Track your progress through various levels and topics.</p>
            </div>
            {/* feature 2 */}
            <div className="bg-cool-blue p-6 rounded-lg shadow">
                <h4 className="text-lg font-semibold mb-3 text-white">Real-Life Usage</h4>
                <p className="text-gray-300">Reinforce your learning through interactive games and quizzes designed to test your knowledge and boost retention.</p>
            </div>
            {/* feature 3 */}
            <div className="bg-cool-blue p-6 rounded-lg shadow">
                <h4 className="text-lg font-semibold mb-3 text-white">Interactive Vocabulary Games</h4>
                <p className="text-gray-300">Reinforce your learning through interactive games and quizzes designed to test your knowledge and boost retention.
                </p>
            </div>
            {/* feature 4 */}
            <div className="bg-cool-blue p-6 rounded-lg shadow">
                <h4 className="text-lg font-semibold mb-3 text-white">Multilingual Support</h4>
                <p className="text-gray-300">Explore new words across various languages such as French, Spanish, Mandarin, Arabic, and more.
                </p>
            </div>
            {/* feature 5 */}
            <div className="bg-cool-blue p-6 rounded-lg shadow">
                <h4 className="text-lg font-semibold mb-3 text-white">Progress Tracking</h4>
                <p className="text-gray-300">Visualize your progress with detailed dashboards showing lessons completed, words mastered, and improvement over time.</p>
            </div>
            {/* feature 6 */}
            <div className="bg-cool-blue p-6 rounded-lg shadow">
                <h4 className="text-lg font-semibold mb-3 text-white">Community Support</h4>
                <p className="text-gray-300">Connect with fellow learners and native speakers in a global community to practice and share your progress.</p>
            </div>
          </div>
          <button className="bg-cool-blue hover:bg-red-600 text-3xl text-white py-4 px-10 mt-8 rounded-xl animate-pulse">Lets Learn</button>
        </div>
      </section>
    </div>
  );
};

export default About;
