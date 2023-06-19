// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper';

const SwiperContainer = () => {
    return (
        <Swiper
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}

            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            style={{ cursor: "grab" }}
        >
            <SwiperSlide style={{}}><div style={{ width: '99%', background: "#ffffff1f", boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: "10px", height: '100%', display: "flex", justifyContent: "center", alignItems: 'center' }}>Hello world i am the best</div></SwiperSlide>
            <SwiperSlide style={{}}><div style={{ width: '99%', background: "#ffffff1f", boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: "10px", height: '100%', display: "flex", justifyContent: "center", alignItems: 'center' }}>Hello world i am the best</div></SwiperSlide >
            <SwiperSlide style={{}}><div style={{ width: '99%', background: "#ffffff1f", boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: "10px", height: '100%', display: "flex", justifyContent: "center", alignItems: 'center' }}>Hello world i am the best</div></SwiperSlide >
            <SwiperSlide style={{}}><div style={{ width: '99%', background: "#ffffff1f", boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: "10px", height: '100%', display: "flex", justifyContent: "center", alignItems: 'center' }}>Hello world i am the best</div></SwiperSlide >
            <SwiperSlide style={{}}><div style={{ width: '99%', background: "#ffffff1f", boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: "10px", height: '100%', display: "flex", justifyContent: "center", alignItems: 'center' }}>Hello world i am the best</div></SwiperSlide >
            <SwiperSlide style={{}}><div style={{ width: '99%', background: "#ffffff1f", boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: "10px", height: '100%', display: "flex", justifyContent: "center", alignItems: 'center' }}>Hello world i am the best</div></SwiperSlide >


            ...
        </Swiper >
    );
};
export default SwiperContainer