import React from 'react';
import video from '../files/videos/FocusMedia_Kick_off.mp4';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Main() {

    const isMobile = window.innerWidth <= 600;

    const services = [
        {
            name: "Photographie intérieur",
            icon: "📸", // Icon for each service
            description: "Capturez l'essence de vos espaces intérieurs avec des photographies professionnelles."
        },
        {
            name: "Plans 2D",
            icon: "🗺️",
            description: "Des plans 2D clairs et détaillés pour aider à la visualisation et planification des espaces."
        },
        {
            name: "Photographie aérienne",
            icon: "🚁",
            description: "Vue d'oiseau pour des perspectives impressionnantes et un contexte géographique enrichi."
        },
        {
            name: "Vidéo immobilière",
            icon: "🎥",
            description: "Vidéos immersives qui augmentent l'engagement et l'intérêt pour vos propriétés."
        },
        {
            name: "Staging virtuel",
            icon: "🏠",
            description: "Transformez vos espaces vides en maisons magnifiquement aménagées sans mobilier physique."
        }
    ];

    return (
        <main>
            <section id="section1" style={{
                position: 'relative',
                width: '100%',
                height: isMobile ? '50vh' : '75vh',  // Use viewport height for responsive sizing
                overflow: 'hidden'
            }}>
                <video
                    style={{
                        width: '100%',  // Ensures the video is responsive
                        height: '100%',  // Maintains aspect ratio while covering the section
                        objectFit: 'cover',  // Ensures the video covers the section area without stretching
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',  // Center the video
                        pointerEvents: isMobile ? 'none' : 'auto'  // Disables clicking on mobile
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
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={require("../files/images/slideshow/DSC05531.jpg")}></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/DSC07023.jpg")}></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/DSC07053.jpg")}></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/DSC07068.jpg")}></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/DSC08014.jpg")}></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/DSC09589.jpg")}></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/DSC09675.jpg")}></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/DSC09589.jpg")}></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/tinywow_DSC08469_52763549.png")}></img></SwiperSlide>
                        <SwiperSlide><img src={require("../files/images/slideshow/virtual twilight.jpg")}></img></SwiperSlide>
                    </Swiper>
                </>
            </section>
            <section id="section3" style={{ padding: '20px', textAlign:'center'}}>
                <h2 style={{ marginBottom: '20px' }}>Nos Services</h2>
                <ul className="services-list">
                    {services.map((service, index) => (
                        <li className="service-item" key={service.name}>
                            <span className="icon" style={{ fontSize: '2rem' }}>{service.icon}</span>
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                        </li>
                    ))}
                </ul>
                <button className="button" onClick={() => window.location.href = 'https://portal.spiro.media/order/focmed/service-focusmedia'}>
                Réservation/Prix
                </button>
            </section>
        </main>
    );
}

export default Main;
