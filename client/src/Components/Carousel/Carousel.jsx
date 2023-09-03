import React from "react";
import "./Carousel.css";

const Carousel = () => {
  class Carousel {
    constructor(carouselElement) {
      this.carousel = carouselElement;
      this.carouselTrack = this.carousel.querySelector(".carousel__track");

      this.slides = Array.from(
        this.carousel.querySelectorAll(".carousel__slides")
      );
      this.slides = Array.from(
        this.carousel.querySelectorAll(".carousel__pill")
      );

      this.prevButton = this.carousel.querySelector(".carousel__prev");
      this.nextButton = this.carousel.querySelector(".carousel__next");
      this.counter = this.carousel.querySelector(".carousel__counter");
      this.progress = this.carousel.querySelector(".carousel__progress");
      this.progressBar = this.carousel.querySelector(".carousel__progressBar");

      this.autoInterval = this.carousel.dataset.autoSlideInterval;
      this.currentSlideIndex = 0;
      this.totalSlides = this.slides.length;
      this.autoSlideInterval = null;
      this.dragging = false;
      this.startX = 0;
      this.scrollleft = 0;
    }
  }

  return (
    <>
      <div className="carousel__container">
        <div className="carousel" data-auto-slide-interval="4000">
          {/* Progress Bar */}
          <div className="carousel__progress" aria-hidden="true">
            <div className="carousel__progressBar"></div>
          </div>
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
            {"<"}
          </button>
          <button
            className="carousel__button carousel__next"
            aria-label="Next Slide"
          >
            {">"}
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
              <span className="carousel__current_slide">1</span>-of-
              <span className="carousel__total_slide">4</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
