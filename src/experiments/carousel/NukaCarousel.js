import React from "react";
import PropTypes from "prop-types";
import Carousel from "nuka-carousel";

function NukaCarousel({ afterSlide, children, slideWidth, ...others }) {
  return (
    <Carousel
      afterSlide={afterSlide}
      cellAlign="center"
      dragging
      frameOverflow="visible"
      slidesToShow={1}
      slideWidth={slideWidth}
      swiping
      withoutControls
      {...others}
    >
      {children}
    </Carousel>
  );
}

NukaCarousel.propTypes = {
  afterSlide: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  slideWidth: PropTypes.string
};

NukaCarousel.defaultProps = {
  slideWidth: "85px"
};

export default NukaCarousel;
