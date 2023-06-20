// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';

const SwiperContainer = () => {
    return (
        <Swiper
            centeredSlides={true}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            pagination={{

            }}

            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            style={{ cursor: "grab", marginTop: "20px" }}
        >
            <SwiperSlide style={{}}><Slide1 /></SwiperSlide>
            <SwiperSlide style={{}}><Slide2 /></SwiperSlide>

            <SwiperSlide style={{}}><Slide3 /></SwiperSlide>

            <SwiperSlide style={{}}><Slide4 /></SwiperSlide>

        </Swiper >
    );
};
export default SwiperContainer