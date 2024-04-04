import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Swipe = () => {
    return (
        <div>
            <Swiper
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
                loop= {true}
                className="mySwiper"
            >
                <SwiperSlide> <div className='h-[500px] w-full bg-red-400' >Slide 1</div> </SwiperSlide>
                <SwiperSlide> <div className='h-[500px] w-full bg-yellow-400' >Slide 2</div> </SwiperSlide>
                <SwiperSlide> <div className='h-[500px] w-full bg-green-400' >Slide 3</div> </SwiperSlide>
                <SwiperSlide> <div className='h-[500px] w-full bg-blue-400' >Slide 4</div> </SwiperSlide>
                <SwiperSlide> <div className='h-[500px] w-full bg-green-700 ' >Slide 5</div> </SwiperSlide>
                <SwiperSlide> <div className='h-[500px] w-full bg-pink-800' >Slide 6</div> </SwiperSlide>
                <SwiperSlide> <div className='h-[500px] w-full bg-yellow-700' >Slide 7</div> </SwiperSlide>
                <SwiperSlide> <div className='h-[500px] w-full bg-red-400' >Slide 8</div> </SwiperSlide>
                <SwiperSlide> <div className='h-[500px] w-full bg-red-400' >Slide 9</div> </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Swipe;