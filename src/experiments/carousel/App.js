import React, { Component } from "react";
import { colors } from "./";
import { NukaCarousel } from "./";
import { RoundedColor } from "../../components";

const styles = {
  carousel: {
    overflow: "hidden",
    width: 675
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "100vw"
  },
  containerCustomStyle: {
    margin: "10px 20px"
  }
};

function logName(name) {
  return function() {
    console.log(name);
  };
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };

    this.handleSlide = this.handleSlide.bind(this);
  }

  handleSlide(currentIndex) {
    this.setState(() => {
      return { currentIndex };
    });
  }

  render() {
    const { currentIndex } = this.state;

    return (
      <div style={styles.container}>
        <h1>{`Current color: ${colors[currentIndex].name}`}</h1>
        <div style={styles.carousel}>
          <NukaCarousel afterSlide={this.handleSlide}>
            {colors.map(({ name, value }) => {
              return (
                <RoundedColor
                  key={value}
                  color={value}
                  containerCustomStyle={styles.containerCustomStyle}
                  onClick={logName(name)}
                />
              );
            })}
          </NukaCarousel>
        </div>
      </div>
    );
  }
}

export default App;
