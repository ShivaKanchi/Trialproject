import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div className="carousel__container">
        <div className="carousel">
          {/* Slides */}
          <div className="carousel__track">
            <div className="carousel__slide">1</div>
            <div className="carousel__slide">2</div>
            <div className="carousel__slide">3</div>
            <div className="carousel__slide">4</div>
          </div>

          {/* navigation */}
          <button
            className="carousel__button carousel__prev"
            aria-label="Previous Slide"
          >
            {" "}
            prev{" "}
          </button>
          <button
            className="carousel__button carousel__next"
            aria-label="Next Slide"
          >
            {" "}
            next{" "}
          </button>

          {/* Pills */}
          <div
            className="carousel__pills"
            role="tablist"
            aria-label="Carousel Navigation"
          >
            <button
              className="carousel__pill"
              role="tab"
              aria-controls="slide1"
              aria-selected="true"
            >
              1
            </button>
            <button
              className="carousel__pill"
              role="tab"
              aria-controls="slide2"
            >
              2
            </button>
            <button
              className="carousel__pill"
              role="tab"
              aria-controls="slide3"
            >
              3
            </button>
            <button
              className="carousel__pill"
              role="tab"
              aria-controls="slide4"
            >
              4
            </button>
          </div>

          {/* Counter */}
          <div className="carousel__counter" aria-live="polite">
            <p>
              <span className="carousel__current_slide">1</span>of
              <span className="carousel__total_slide">4</span>
            </p>
          </div>

          {/* Progress Bar */}
          <div className="carousel__progress" aria-hidden="true">
            <div className="carousel__progressBar"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
