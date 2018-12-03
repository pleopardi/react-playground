import React, { Children } from "react";
import PropTypes from "prop-types";
import { Slide, Swiper } from "react-dynamic-swiper";
import "react-dynamic-swiper/lib/styles.css";

function SwiperCarousel({
  children,
  onActive,
  slideStyle,
  swiperStyle,
  ...others
}) {
  return (
    <Swiper
      navigation={false}
      pagination={false}
      style={swiperStyle}
      swiperOptions={{
        centeredSlides: true,
        slidesPerView: "auto"
      }}
      {...others}
    >
      {Children.map(children, (child, index) => {
        return (
          <Slide
            onActive={Boolean(onActive) ? onActive(index) : undefined}
            style={slideStyle}
          >
            {child}
          </Slide>
        );
      })}
    </Swiper>
  );
}

SwiperCarousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  onActive: PropTypes.func,
  slideStyle: PropTypes.object,
  swiperStyle: PropTypes.object
};

SwiperCarousel.defaultProps = {
  slideStyle: { width: 85 },
  swiperStyle: { width: 675 }
};

export default SwiperCarousel;
