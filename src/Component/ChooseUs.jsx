import img1 from "../assets/5-Benefits-of-Personalized-Learn.jpg";
import img2 from "../assets/Global-Community-Building.jpg";
import img3 from "../assets/proven-results-satisfaction-guar.jpg";

const ChooseUs = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6 sm:px-8 md:py-20 lg:py-24">
        <div className="container mx-auto text-center">
          {/* Section Header */}
          <h2 data-aos="fade-right" className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
            Why Choose Us?
          </h2>
          <p data-aos="fade-left" className="text-base sm:text-lg text-gray-600 mb-10 sm:mb-12">
            Discover the unique features that make us the best choice for
            language learners.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="bg-cool-blue p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <span className="text-blue-600 w-[400px] h-[250px] text-4xl md:text-5xl">
                  <img className="w-full h-full rounded-xl" src={img1} alt="" />
                </span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white">
                Personalized Learning
              </h4>
              <p className="mt-2 text-sm md:text-base text-white">
                Tailored lessons to match your pace and style of learning.
              </p>
            </div>
            {/* Feature 2 */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="bg-cool-blue p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <span className="text-green-600 w-[400px] h-[250px] text-4xl md:text-5xl">
                  <img className="w-full h-full rounded-xl" src={img2} alt="" />
                </span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white">
                Global Community
              </h4>
              <p className="mt-2 text-sm md:text-base text-white">
                Connect with language learners and native speakers worldwide.
              </p>
            </div>
            {/* Feature 3 */}
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="bg-cool-blue p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <span className="text-yellow-600 w-[400px] h-[250px] text-4xl md:text-5xl">
                  <img className="w-full h-full rounded-xl" src={img3} alt="" />
                </span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white">
                Proven Results
              </h4>
              <p className="mt-2 text-sm md:text-base text-white">
                Thousands of learners have achieved fluency with our methods.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;
