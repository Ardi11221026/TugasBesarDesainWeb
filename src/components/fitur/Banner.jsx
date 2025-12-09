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
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds
  
        return () => clearInterval(slideInterval);
    }, []);
  
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
        <div className="relative w-full h-[500px] overflow-hidden z-0 shadow-lg" style={{ position: 'relative' }}>
        <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
                <img key={index} src={slide.src} alt={slide.alt} className="w-full h-[500px] object-cover flex-shrink-0 filter brightness-75" />
            ))}
        </div>
    
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="text-center space-y-6">
                <h5 className="text-2xl text-red-400 font-light tracking-wide">Selamat Datang di</h5>
                <h1 className="text-6xl font-bold mb-4 text-white drop-shadow-lg">Ragam Kaltim</h1>
                <p className="text-lg text-gray-200 max-w-xl mx-auto drop-shadow-md">Jelajahi keindahan, budaya, dan sejarah kaya dari 10 kota dan kabupaten di Kalimantan Timur</p>
                <button
                    onClick={scrollToDestinations}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 mt-6"
                >
                    Mulai Jelajah →
                </button>
            </div>
        </div>
    
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
                <div
                    key={index}
                    onClick={() => setSlide(index)}
                    className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentSlide ? 'bg-red-600 w-8' : 'bg-white w-3'}`}
                ></div>
            ))}
        </div>
    </div>
    );
  };

export default Banner;