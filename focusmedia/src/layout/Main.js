import React from 'react';
import video from '../files/videos/FocusMedia_Kick_off.mp4';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Services from '../components/services'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Main() {

    const isMobile = window.innerWidth <= 900;

    return (
        <main>
            <section id="section1" style={{
                position: 'relative',
                width: '100%',
                height: isMobile ? '50vh' : '75vh',  
                overflow: 'hidden'
            }}>
                <video
                    style={{
                        width: '100%', 
                        height: '100%',  
                        objectFit: 'cover',  
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',  
                        pointerEvents: isMobile ? 'none' : 'auto'  
                    }}
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    Your browser does not support the video tag.
                </video>
            </section>
            <section id="space" style={{ position: 'relative', width: '100%', height: '1.5vh', }}>
            </section>
            <section id="section2" style={{ position: 'relative', width: '100%', height: '100%' }}>
                <>
                    <Swiper
                        slidesPerView={isMobile ? 1 : 3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={require("../files/images/slideshow/image1.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image2.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image3.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image4.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image5.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image6.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image7.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image8.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image9.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image10.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image11.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image12.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image13.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image14.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image15.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image16.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image17.jpg")} alt='slideshow img'></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/image18.jpg")} alt='slideshow img'></img></SwiperSlide>
                    </Swiper>
                </>
            </section>
            <section id="section3" style={{ paddingTop: '20px', position: 'relative' }}>
                <Services></Services>
                <div>
                    <button className="button" id="price" onClick={() => window.open('https://portal.spiro.media/order/focmed/service-focusmedia', '_blank')}>
                        Réservation/Prix
                    </button>
                </div>

            </section>
        </main>
    );
}

export default Main;
