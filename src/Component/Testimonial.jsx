import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const Testimonial = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-8">
        <div className="container mx-auto text-center">
          {/* section header */}
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            What Our Learners Say
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Hear from learners who have improved their vocabulary and language
            skills with us.
          </p>

          <Swiper
        
        loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10, 
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            centeredSlides={true}
            modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[35vh] container mx-auto"
      >
        <SwiperSlide>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-48">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://via.placeholder.com/50"
                alt="1"
              />
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Anna Schmidt
                </h4>
                <p className="text-sm text-white">German Learner</p>
              </div>
            </div>
            <p className="text-white">
              "The detailed explanations and cultural notes make learning German
              truly engaging!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-48">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://via.placeholder.com/50"
                alt="1"
              />
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Maria Gonzalez
                </h4>
                <p className="text-sm text-white">Spanish Learner</p>
              </div>
            </div>
            <p className="text-white">
              "LanguageLearn has completely changed the way I approach
              vocabulary. The interactive games make learning fun and easy!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-48">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://via.placeholder.com/50"
                alt="1"
              />
              <div>
                <h4 className="text-lg font-semibold text-white">Li Wei</h4>
                <p className="text-sm text-white">Mandarin Learner</p>
              </div>
            </div>
            <p className="text-white">
              "I never thought learning Mandarin would be this enjoyable! The
              real-life usage examples are super helpful."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-48">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://via.placeholder.com/50"
                alt="1"
              />
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Amir Hassan
                </h4>
                <p className="text-sm text-white">Arabic Learner</p>
              </div>
            </div>
            <p className="text-white">
              "I love how the lessons are tailored to my level. I've gained so
              much confidence speaking Arabic!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-48">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://via.placeholder.com/50"
                alt="1"
              />
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Sophie Martin
                </h4>
                <p className="text-sm text-white">French Learner</p>
              </div>
            </div>
            <p className="text-white">
              "The lessons are structured so well! I feel confident holding
              basic conversations in French."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-48">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://via.placeholder.com/50"
                alt="1"
              />
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Ahmed Ali
                </h4>
                <p className="text-sm text-white">Portuguese Learner</p>
              </div>
            </div>
            <p className="text-white">
              "The flashcards and quizzes keep me motivated. I've made great
              progress with Portuguese."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-48">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://via.placeholder.com/50"
                alt="1"
              />
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Olivia Brooks
                </h4>
                <p className="text-sm text-white">Italian Learner</p>
              </div>
            </div>
            <p className="text-white">
              "The interactive exercises are brilliant! I can't wait to visit
              Italy and practice my skills."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-cool-blue p-6 rounded-lg shadow-lg h-48">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://via.placeholder.com/50"
                alt="1"
              />
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Samuel Kim
                </h4>
                <p className="text-sm text-white">Korean Learner</p>
              </div>
            </div>
            <p className="text-white">
              "The pronunciation guides are so helpful. I'm amazed at how much
              I've learned in just a few weeks."
            </p>
          </div>
        </SwiperSlide>
        .....
      </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
