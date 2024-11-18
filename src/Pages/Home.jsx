import About from "../Component/About";
import ChooseUs from "../Component/ChooseUs";
import Slider from "../Component/Slider";
import SuccessCount from "../Component/SuccessCount";
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
                <SuccessCount></SuccessCount>
            </section>
            <section>
                <Testimonial></Testimonial>
            </section>
            <section>
                <ChooseUs></ChooseUs>
            </section>
        </div>
    );
};

export default Home;