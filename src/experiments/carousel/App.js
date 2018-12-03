import React, { Component } from "react";
import { colors, slideWidth, swiperWidth } from "./data";
import NukaCarousel from "./NukaCarousel";
import { RoundedColor } from "../../components";
import SwiperCarousel from "./SwiperCarousel";

const styles = {
  carousel: {
    overflow: "hidden",
    width: swiperWidth
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "100vw"
  },
  containerCustomStyle: {
    margin: "10px 20px"
  },
  slide: {
    width: slideWidth
  },
  swiper: {
    width: swiperWidth
  }
};

const slides = colors.map(({ name, value }) => {
  return (
    <RoundedColor
      key={value}
      color={value}
      containerCustomStyle={styles.containerCustomStyle}
      onClick={logName(name)}
    />
  );
});

function logName(name) {
  return function() {
    console.log(name);
  };
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nukaIndex: 0,
      swiperIndex: 0
    };

    this.handleNukaSlide = this.handleNukaSlide.bind(this);
    this.setSlideIndex = this.setSlideIndex.bind(this);
  }

  handleNukaSlide(currentIndex) {
    this.handleSlide("nukaIndex", currentIndex);
  }

  handleSlide(key, currentIndex) {
    this.setState(() => {
      return { [key]: currentIndex };
    });
  }

  handleSwiperSlide(currentIndex) {
    this.handleSlide("swiperIndex", currentIndex);
  }

  /**
   * @description setSlideIndex is called by each Slide component
   * to bind the "currentIndex" argument of handleSwiperSlide to
   * the current slide index.
   * @param {number} slideIndex
   */
  setSlideIndex(slideIndex) {
    return this.handleSwiperSlide.bind(this, slideIndex);
  }

  render() {
    const { nukaIndex, swiperIndex } = this.state;

    return (
      <div style={styles.container}>
        <h1>nuka-carousel</h1>
        <h3>{`Current color: ${colors[nukaIndex].name}`}</h3>
        <div style={styles.carousel}>
          <NukaCarousel
            afterSlide={this.handleNukaSlide}
            slideWidth={`${slideWidth}px`}
          >
            {slides}
          </NukaCarousel>
        </div>
        <h1>react-dynamic-swiper (v)</h1>
        <h3>{`Current color: ${colors[swiperIndex].name}`}</h3>
        <div style={styles.carousel}>
          <SwiperCarousel
            onActive={this.setSlideIndex}
            slideStyle={styles.slide}
            swiperStyle={styles.swiper}
          >
            {slides}
          </SwiperCarousel>
        </div>
      </div>
    );
  }
}

export default App;
