import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg1 from '../../src/assets/8f02334a-307d-4bed-811a-594474d3.jpg';
import sliderImg5 from '../../src/assets/img-5.jpg';
import sliderImg2 from '../../src/assets/img3.jpg';
import sliderImg4 from '../../src/assets/img4.jpg';
import sliderImg3 from '../../src/assets/pexels-tima-miroshnichenko-5912586.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Slider = () => {
  return (
    <div className="">
      <Swiper
        // install Swiper modules
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[70vh] w-screen container mx-auto bg-cover"
      >
        
        <SwiperSlide>
            <img className="w-full h-full" src={sliderImg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full h-full" src={sliderImg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full h-full" src={sliderImg3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full h-full" src={sliderImg4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full h-full" src={sliderImg5} alt="" />
        </SwiperSlide>
        .....
      </Swiper>
        
    </div>
  );
};

export default Slider;
