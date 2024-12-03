import { useState, useEffect } from 'react';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const slides = [
        { src: 'img/gerbang madani upscale.jpg', alt: 'Gerbang Madani 1' },
        { src: 'img/mahakam.jpg', alt: 'Gerbang Madani 2' },
        // Add more images 
    ];
  
    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds
  
        return () => clearInterval(slideInterval);
    }, [currentSlide]);
  
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };
  
    const setSlide = (index) => {
        setCurrentSlide(index);
    };
  
    const scrollToDestinations = () => {
        const destinationsSection = document.getElementById('destinations');
        destinationsSection.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
        <div className="relative w-full h-[400px] overflow-hidden z-0" style={{ position: 'relative' }}>
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
                <img key={index} src={slide.src} alt={slide.alt} className="w-full h-[400px] object-cover flex-shrink-0" />
            ))}
        </div>
    
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h5 className="text-xl text-red-500">Selamat Datang di</h5>
            <h1 className="text-4xl font-bold mb-4 text-white">Ragam Kaltim</h1>
            <button
                onClick={scrollToDestinations}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                Jelajahi Kaltim
            </button>
        </div>
    
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
                <div
                    key={index}
                    onClick={() => setSlide(index)}
                    className={`w-4 h-4 rounded-full cursor-pointer ${index === currentSlide ? 'bg-red-600' : 'bg-white'}`}
                ></div>
            ))}
        </div>
    </div>
    );
  };

export default Banner;
