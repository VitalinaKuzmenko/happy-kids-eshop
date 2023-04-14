import React from "react";
import "./ImageCarousel.css";
import { Link } from "react-router-dom";

const ImageCarousel = () => {
  const imageSources = [
    "/Carousel_images/Carousel_image_1.webp",
    "/Carousel_images/Carousel_image_2.webp",
    "/Carousel_images/Carousel_image_3.webp",
  ];
  const delay = 3500;

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imageSources.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div className="slideshow h-56 md:h-96">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {imageSources.map((src, index) => {
            if (index === 0) {
              return (
                <div className="slide" key={index}>
                  <img className="slide-image" src={src} alt="Carousel_image" />
                  <div className="text-on-image absolute">
                    <h1>NEW COLLECTION</h1>
                    <Link to="/shop">
                      <button>Shop Now</button>
                    </Link>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="slide" key={index}>
                  <img className="slide-image" src={src} alt="Carousel_image" />
                </div>
              );
            }
          })}
        </div>

        <div className="slideshowDots">
          {imageSources.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
