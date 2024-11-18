import About from "../Component/About";
import Slider from "../Component/Slider";
import Testimonial from "../Component/Testimonial";


const Home = () => {
    return (
        <div className="">
            {/* banner */}
            <section className="banner">
                <Slider></Slider>
            </section>
            <section className="about">
                <About></About>
            </section>
            <section>
                <Testimonial></Testimonial>
            </section>
        </div>
    );
};

export default Home;