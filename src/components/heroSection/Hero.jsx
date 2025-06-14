import React, { useEffect, useState } from 'react';
import './hero.css';

const images = [
    require('../assets/carouselImages/image1.jpg'),
    require('../assets/carouselImages/image2.jpg'),
    require('../assets/carouselImages/image3.jpg'),
    require('../assets/carouselImages/image4.jpg'),
    require('../assets/carouselImages/image1.jpg'),
    require('../assets/carouselImages/image3.jpg'),
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="home">
            <div className="hero-section">
                <div className="carousel-single-wrapper">
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                        className="carousel-single-image"
                    />
                    <div className='carousel-overlay-container'>
                        <div className="carousel-left-overlay">
                            <h1 className="hero-title">Welcome to Vikas High School</h1>
                        </div>
                        <div className="carousel-right-overlay">
                            <div class="admission-form-container">
                                <form action="https://api.web3forms.com/submit" method="POST" class="admission-form">
                                    <input type="hidden" name="access_key" value="99a36398-df7f-44fe-a4cd-eeccba85ab44"></input>
                                    <h2>Admissions Open for <br /> 2025-26</h2>

                                    <input name="Student Name" type="text" placeholder="Student Name*" required />
                                    <input name="Parent Name" type="text" placeholder="Parent Name" />

                                    <select name="Current Std" required>
                                        <option value="" disabled selected>Current Std</option>
                                        <option value="Nursery">Nursery</option>
                                        <option value="LKG">LKG</option>
                                        <option value="UKG">UKG</option>
                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                        <option value="5th">5th</option>
                                        <option value="6th">6th</option>
                                        <option value="7th">7th</option>
                                        <option value="8th">8th</option>
                                        <option value="9th">9th</option>
                                        <option value="10th">10th</option>
                                        <option value="11th">11th</option>
                                        <option value="12th">12th</option>
                                    </select>

                                    <input name="Mobile No " type="tel" placeholder="Mobile No*" required />
                                    <input name="Email" type="email" placeholder="Email ID" />
                                    <input name="City" type="text" placeholder="City*" required />

                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
