import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image as ImageRK } from "react-konva";

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null
    };

    this.image = new window.Image();

    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad() {
    this.setState(() => {
      return { image: this.image };
    });
  }

  componentDidMount() {
    const { imageUrl } = this.props;

    this.image.addEventListener("load", this.handleLoad);

    this.image.src = imageUrl;
  }

  componentWillUnmount() {
    this.image.removeEventListener("load", this.handleLoad);
  }

  render() {
    const { image } = this.state;
    const { imageHeight, imageWidth } = this.props;

    return (
      Boolean(image) && (
        <ImageRK
          image={image}
          height={imageHeight}
          width={imageWidth}
          {...this.props}
        />
      )
    );
  }
}

Image.propTypes = {
  imageHeight: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageWidth: PropTypes.number.isRequired,
};

export default Image;
