import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "../css/slider.css";

function Slider({ post }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const sliderPost = post.slice(0, 3);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === sliderPost.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? sliderPost.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = sliderPost.map((item) => {
    return (
      <CarouselItem
        className="carouselİtem"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.urlToImage}
      >
        <img className="sliderİmg" src={item.urlToImage} alt={item.title} />
        <CarouselCaption className="titleSlider" captionHeader={item.title} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={sliderPost}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Slider;
