import React from "react";
import PropTypes from "prop-types";
import Carousel from "nuka-carousel";

function NukaCarousel({ afterSlide, children, ...others }) {
  return (
    <Carousel
      afterSlide={afterSlide}
      cellAlign="center"
      dragging
      frameOverflow="visible"
      slidesToShow={1}
      slideWidth="85px"
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
  children: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired
};

export default NukaCarousel;
