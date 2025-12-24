import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Базовый CSS Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Импортируй свой CSS-файл (если он называется carousel.css)
import './carousel.css'; // Добавь это, если ещё не импортировано

const Carousel = () => {
    // Обновленный массив: убрали textStyle, добавили textClass для CSS-классов
    const images = [
        { 
            src: '/images/carousel/heppi.png', 
            alt: 'Пицца Маргарита', 
            text: 'Вкусная Маргарита — классика!', 
            textClass: 'text-large'  // Класс для стилизации в CSS
        },
        { 
            src: '/images/carousel/logot.png', 
            alt: 'Пицца Пепперони', 
            text: '',  // Пустой текст
            textClass: '' 
        },
        { 
            src: '/images/carousel/procent10.png', 
            alt: 'Тирамису', 
            text: 'Скидка 10% на десерты!', 
            textClass: 'text-medium' 
        },
        { 
            src: '/images/carousel/stars.png', 
            alt: 'Тирамису', 
            text: 'Бесплатная доставка при заказе от 500р (районы нужно уточнять) ', 
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
              /*   autoplay={{ delay: 3000, disableOnInteraction: false }} */
                loop={true}
                className="my-swiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content"> {/* Контейнер для изображения и текста */}
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="slide-image" 
                                loading="lazy"  // Для производительности
                            />
                            {image.text && (  // Рендерим текст только если он есть
                                <div className={`slide-text ${image.textClass}`}>  {/* Используем классы из textClass */}
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
