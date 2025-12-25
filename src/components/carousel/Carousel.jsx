import slide1 from "../../assets/carousel/heppi.png";  // Первая картинка
import slide2 from "../../assets/carousel/logot.png";  // Первая картинка
import slide3 from "../../assets/carousel/procent10.png";  // Первая картинка
import slide4 from "../../assets/carousel/stars.png";  // Первая картинка


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './carousel.css';

const Carousel = () => {
    const images = [
        { 
            src: slide1,  // Используй импортированную переменную!
            alt: 'Пицца Маргарита', 
            text: 'Вкусная Маргарита — классика!', 
            textClass: 'text-large'
        },
        { 
            src: slide2,  // Вторая картинка
            alt: 'Пицца Пепперони', 
            text: '', 
            textClass: '' 
        },
        { 
            src: slide3,  // Третья картинка
            alt: 'Тирамису', 
            text: 'Скидка 10% на десерты!', 
            textClass: 'text-medium' 
        },
        { 
            src: slide4,  // Четвертая (или другая)
            alt: 'Тирамису', 
            text: 'Бесплатная доставка при заказе от 500р (районы нужно уточнять)', 
            textClass: 'text-small' 
        },
    ];

    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="my-swiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content">
                            <img 
                                src={image.src}  // Теперь используем image.src (импортированную переменную)
                                alt={image.alt} 
                                className="slide-image" 
                                loading="lazy"
                            />
                            {image.text && (
                                <div className={`slide-text ${image.textClass}`}>
                                    {image.text}
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
